from django.forms import ModelForm
from .models import File
from django import forms

class Files(ModelForm):
    class Meta:
        model = File
        fields = ('zip_file', 'text')

        widgets = {
            'zip_file': forms.FileInput(attrs={'class': 'form-contro m-2 form-control form-control-file', 'id': 'zip'}),
            'text': forms.TextInput(attrs={'class': 'form-contro m-2 form-control', 'placeholder': 'Username/Appname'}),
        }
