from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

from .models import item


def index(request):
    objs = item.objects.all()
    return render(request, 'polls/index.html', {"items": objs})

def detail(request, id):
    obj = item.objects.get(pk=id)
    return HttpResponse(obj.item_name)