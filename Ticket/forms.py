from django import forms
from .models import Ticket, Category, Department
import validators as vals


class TicketForm(forms.ModelForm):
    subject = forms.CharField(max_length=500, required=True,
                              strip=True, min_length=3)

    description = forms.CharField(max_length=1000, strip=True, required=False)
    lab_url = forms.URLField(required=False)
    category = forms.ModelChoiceField(queryset=Category.objects.all(), required=True)
    department = forms.ModelChoiceField(queryset=Department.objects.all(), required=True)

    class Meta:
        model = Ticket
        exclude = ('user','priority',)
