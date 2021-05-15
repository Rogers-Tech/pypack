from django.forms import ModelForm
from .models import Rate
from django import forms

class Rater(ModelForm):
    class Meta:
        model = Rate
        fields = ('comment', 'stars')

        widgets = {
            'comment': forms.Textarea(attrs={'class': 'form-control form-text m-0 mb-3', 'placeholder': 'Comment', 'id': 'texter'}),
            'stars': forms.TextInput(attrs={'class': 'form-control text-dark d-none', 'type': 'text', 'id': 'ratedme'}),
        }
