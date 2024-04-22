from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from ..serializers.user_serializer import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    
    def list(self, request, *args, **kwargs):
        queryset = User.objects.all()
        serialize = UserSerializer(queryset, many=True, context={'request': request})
        return Response(serialize.data, status=status.HTTP_200_OK)
    
    def _get_user(self, username):
        user_exist = User.objects.get_by_natural_key(username)
        
        if user_exist:
            return True
        raise ResourceWarning()
    
    
    def create(self, request, *args, **kwargs):
        
        serializer = UserSerializer(data =request.data,  context={'request': request})
        
        if serializer.is_valid():
            _user = self._get_user(serializer.data)
            if _user:
                return Response({ 'message': 'User name already exists, try different user name'}, status=status.HTTP_208_ALREADY_REPORTED )
            user = serializer.save()
            return Response({'message': 'User created successfully', 'user_id': user.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
            