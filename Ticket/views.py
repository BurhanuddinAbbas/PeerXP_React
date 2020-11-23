from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, get_object_or_404
import requests, json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated
from .forms import TicketForm
from .models import Ticket, Department, Category
from .serializers import TicketSerializer, CategorySerializer, DepartmentSerializer, _DepartmentSerializer, \
    _CategorySerializer
from constants import PRIORITIES
import numpy as np

auth_token = '9446933330c7f886fbdf16782906a9e0'
org_id = '60001280952'

params = "sortBy=-createdTime&limit=10"

headers = {
    "Authorization": auth_token,
    "orgId": org_id,
    "contentType": "application/json; charset=utf-8"
}

departments = {}


def get_department_name(dep_id):
    try:
        return departments[dep_id]
    except KeyError:
        try:
            dept_resp = requests.get('https://desk.zoho.in/api/v1/departments/' + str(dep_id), headers=headers)
            departments[dep_id] = json.loads(dept_resp.content)['name']
            return departments[dep_id]
        except:
            return str(dep_id)


def get_category_name(_id):
    try:
        return Category.objects.get(id=_id).name
    except ObjectDoesNotExist:
        return str(id)


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all().order_by('-created_on')
    serializer_class = TicketSerializer

    def get_queryset(self):
        queryset = self.queryset
        query_set = queryset.filter(user=self.request.user)
        return query_set


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = _DepartmentSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = _CategorySerializer


@csrf_exempt
@require_http_methods(['GET'])
@permission_classes([IsAuthenticated])
def all_tickets(request):
    resp = requests.get('https://desk.zoho.in/api/v1/tickets?' + params, headers=headers)
    _ = json.loads(resp.content)['data']
    ticket_list = []
    for response in _:
        ticket_list.append({
            "id": response['id'],
            "ticket_id": response['ticketNumber'],
            "lab_url": response['webUrl'],
            "department": {
                "id": 7189000000051431,
                "name": get_department_name(response['departmentId'])
            },
            "category": {
                "id": 0,
                "name": response['category']
            },
            "subject": response['subject'],
            "description": '',
            "priority": response['priority'],
            "priority_name": response['priority']
        })
    return JsonResponse(ticket_list, safe=False)


def get_category_by_name(param):
    try:
        return Category.objects.get(name=param).id
    except ObjectDoesNotExist:
        return str(param)


@csrf_exempt
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_ticket(request, ticket_id):
    resp = requests.get('https://desk.zoho.in/api/v1/tickets/' + str(ticket_id), headers=headers)
    response = json.loads(resp.content)
    print(response)
    data = {
        "id": response['ticketNumber'],
        "lab_url": response['webUrl'],
        "department": {
            "id": 7189000000051431,
            "name": get_department_name(response['departmentId'])
        },
        "category": {
            "id": get_category_by_name(response['category']),
            "name": response['category']
        },
        "subject": response['subject'],
        "description": response['description'],
        "priority": response['priority'],
        "priority_name": response['priority'],
        'name': request.user.username,
        "email": request.user.email,
    }
    return JsonResponse(data, safe=False)


@csrf_exempt
@require_http_methods(["POST"])
@permission_classes([IsAuthenticated])
def add_ticket(request):
    payload = dict(zip(list(request.POST.keys()),
                       np.array(list(request.POST.values())).flatten().tolist()))
    form_instance = TicketForm(payload)
    if form_instance.is_valid():
        form_instance.instance.user = request.user
        form_instance.save()
        return JsonResponse({'status': True}, safe=False, status=status.HTTP_201_CREATED)
    else:
        return JsonResponse(dict(form_instance.errors), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@csrf_exempt
@require_http_methods(["POST"])
@permission_classes([IsAuthenticated])
def add_ticket(request):
    payload = dict(zip(list(request.POST.keys()),
                       np.array(list(request.POST.values())).flatten().tolist()))
    payload.pop('id')
    form_instance = TicketForm(payload)
    if form_instance.is_valid():
        data = {"contactId": "7189000000125039",
                "subject": payload['subject'],
                "departmentId": payload['department'],
                "description": payload['description'],
                "priority": PRIORITIES(int(payload['priority']) or 1).name,
                "webUrl": payload['lab_url'],
                "category": get_category_name(payload['category']),
                "email": request.user.email,
                "status": "Open"}
        requests.post('https://desk.zoho.in/api/v1/tickets', headers=headers,
                      data=json.dumps(data))
        return JsonResponse({'status': 'OK'}, status=200)
    else:
        return JsonResponse(dict(form_instance.errors), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@csrf_exempt
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def update_ticket(request):
    payload = dict(zip(list(request.data.keys()),
                       np.array(list(request.data.values())).flatten().tolist()))
    payload['id'] = payload['id'][1:]
    ticket = get_object_or_404(Ticket, pk=payload["id"], user=request.user)
    form_instance = TicketForm(payload, instance=ticket)
    if form_instance.is_valid():
        form_instance.save()
        return JsonResponse({'status': True}, safe=False, status=status.HTTP_201_CREATED)
    else:
        return JsonResponse(dict(form_instance.errors), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@csrf_exempt
@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_ticket(request, ticket_id):
    ticket = get_object_or_404(Ticket, pk=ticket_id, user=request.user)
    ticket.delete()
    return JsonResponse({'status': True}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
