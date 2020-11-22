from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate, logout
from .forms import LoginForm


# Create your views here.
@csrf_exempt
@require_http_methods(['POST'])
def login_user(request):
    """
    Login user > Create a Session > redirect user to home page
    :return:
    """
    print(request.body)
    print('LOGIN DATA >> ', list(request.POST.items()))
    form = LoginForm(request.POST)
    if form.is_valid():
        try:
            user = authenticate(username=request.POST['email'],
                                password=request.POST['password'])
            if user:
                login(request, user)
                return JsonResponse({'success': True}, status=200)
            else:
                return JsonResponse({'__all__': 'email or password is incorrect'}, status=422)
        except ObjectDoesNotExist:
            return JsonResponse({'__all__': 'email or password is incorrect'}, status=422)
    else:
        print('LOGIN ERR >> ', dict(form.errors))
        return JsonResponse(dict(form.errors), status=422)


# Create your views here.
@csrf_exempt
@require_http_methods(['GET'])
def logout_user(request):
    if request.user.is_authenticated:
        logout(request)
    return HttpResponse('OK', status=200)
