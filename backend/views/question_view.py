from rest_framework.views import APIView
from rest_framework import viewsets
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from ..models.question import Question
from ..serializers.question_serializer import QuestionSerializer

class QuestionAppView(viewsets.ModelViewSet):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    
    def get_object(self, td):
        try:
            return Question.objects.get(td= td)
        except Question.DoesNotExist:
            raise Http404
    
    def get(self, request, *args, **kwargs):
        
        todos = Question.objects.all()
        serializer = QuestionSerializer(todos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kwargs):
        
        data = {
            'task': request.data.get('task'),
            'completed': request.data.get('completed'),
            'user': request.user.id
        }
        
        serializer = QuestionSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)