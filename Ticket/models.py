from django.db import models
from django.contrib.auth import get_user_model
from constants import PRIORITIES

user_model = get_user_model()


# Create your models here.
class Department(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name


class Ticket(models.Model):
    lab_url = models.URLField(null=True, blank=True)
    department = models.ForeignKey(Department, related_name="departments", on_delete=models.PROTECT)
    category = models.ForeignKey(Category, related_name="categories", on_delete=models.PROTECT)
    subject = models.CharField(max_length=150, null=True, blank=True)
    user = models.ForeignKey(user_model, on_delete=models.PROTECT)
    description = models.TextField(null=True, blank=True)
    priority = models.IntegerField(choices=[(i.value, i.name) for i in PRIORITIES], null=True)
    created_on = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return '#' + str(self.id)
