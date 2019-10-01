from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'home.html')


def trainer(request):
    return render(request, 'trainer.html')
