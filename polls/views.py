from django.shortcuts import render
from .rating import Rater
from .file import Files
from .models import File

# Create your views here.
def main(request):
    our = Rater()
    fil = Files()

    uploads = File.objects.all()

    if request.method == 'POST':
        form = Rater(request.POST)
        if form.is_valid():
            form.save()
            print('done successfully')
        else:
            print('Failed the task')

    if request.method == 'POST':
        form = Files(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            print('done successfully')
        else:
            print('Failed the task')

    context = {
        'rate': our,
        'file': fil,
        'load': uploads,
    }

    return render(request, 'index.html', context)
