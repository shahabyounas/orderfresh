from django.http import HttpResponseNotFound

def not_found(request, *args, **kwargs):
    return HttpResponseNotFound("Resource not found")
