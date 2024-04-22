from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .question_view import QuestionAppView
from ..serializers.todo_serializer import TodoSerializer


# from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here.

# def index(request):
#     return HttpResponse("Hello, this the backend of the order fresh")

class TodoListAppView(viewsets.ModelViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request, *args, **kwargs):
        
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        
        data = {
            'task': request.data.get('task'),
            'completed': request.data.get('completed'),
            'user': request.user.id
        }
        
        serializer = TodoSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
