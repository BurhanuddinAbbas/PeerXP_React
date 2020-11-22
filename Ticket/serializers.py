# serializers.py
from model_utils import Choices
from rest_framework import serializers

from constants import PRIORITIES
from .models import Ticket, Category, Department
from django.utils.translation import ugettext_lazy as _


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class _CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['name']


class _DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class TicketSerializer(serializers.ModelSerializer):
    PRIORITIES = Choices(
        (1, 'HIGH', _('HIGH - Production System Down')),
        (2, 'MED', _('MED - System Impaired')),
        (3, 'LOW', _('LOW - General Guidence')),
    )

    def get_priority_name(self, obj):
        return TicketSerializer.PRIORITIES.__dict__.get('_display_map').get(obj.priority)

    department = _DepartmentSerializer()
    category = _CategorySerializer()
    priority = serializers.ChoiceField(choices=PRIORITIES)
    priority_name = serializers.SerializerMethodField(read_only=True, source='get_priority_name')

    class Meta:
        model = Ticket
        fields = list(map(lambda x: x.name, list(Ticket._meta.fields))) + ['priority_name']
