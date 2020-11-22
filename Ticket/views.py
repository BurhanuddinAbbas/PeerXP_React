from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
import requests, json
from django.conf import settings
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
import numpy as np


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
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_ticket(request, ticket_id):
    ticket = get_object_or_404(Ticket, pk=ticket_id, user=request.user)
    serialized_instance = TicketSerializer(ticket)
    return JsonResponse(serialized_instance.data, safe=False)


@csrf_exempt
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_ticket(request):
    payload = dict(zip(list(request.data.keys()),
                       np.array(list(request.data.values())).flatten().tolist()))
    form_instance = TicketForm(payload)
    if form_instance.is_valid():
        form_instance.instance.user = request.user
        form_instance.save()
        return JsonResponse({'status': True}, safe=False, status=status.HTTP_201_CREATED)
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
