from django.contrib import admin

from .models import Ticket
from .models import Department
from .models import Category

admin.site.site_header = "PeerXP Dashboard"
admin.site.site_title = "Admin Panel"
admin.site.register(Ticket)
admin.site.register(Department)
admin.site.register(Category)
