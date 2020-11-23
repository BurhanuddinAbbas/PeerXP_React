from django.conf.urls import url
from django.urls import path, include

from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'tickets', TicketViewSet)
router.register(r'departments', DepartmentViewSet)
router.register(r'categories', CategoryViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('fetch_ticket/<int:ticket_id>', get_ticket, name='fetch_ticket'),
    path('add_ticket/', add_ticket, name='add_ticket'),
    path('all_tickets/', all_tickets, name='all_tickets'),
    path('update_ticket/', update_ticket, name='update_ticket'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
