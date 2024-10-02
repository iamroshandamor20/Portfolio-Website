from django.shortcuts import render
from django.shortcuts import HttpResponse

def landing_page(request):
    return render(request, 'index.html')