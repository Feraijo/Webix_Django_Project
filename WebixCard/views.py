from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
# def index(request):
#     output = "<h2>SDFSDFSDF</h2>"
#     return HttpResponse(output)

def index(request):
    return render(request, "index.html")
    
def index1(request):
    return render(request, "index1.html")

def bs(request):
    return render(request, "bs.html")