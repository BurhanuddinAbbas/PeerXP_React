from django import forms
from django.contrib.auth import get_user_model


class LoginForm(forms.ModelForm):
    email = forms.CharField(max_length=30, required=True)
    password = forms.CharField(max_length=30, required=True)

    class Meta:
        model = get_user_model()
        fields = ['password']
