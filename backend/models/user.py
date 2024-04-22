from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    user_name = models.CharField(max_length=100, verbose_name= 'User Name')
    first_name = models.CharField(max_length=100, verbose_name= 'first Name')
    last_name = models.CharField(max_length=100, verbose_name= 'Last Name')
    is_superuser =models.BooleanField(default=False)
    is_verified =models.BooleanField(default=False)
    is_active =models.BooleanField(default=True)
    date_joined =models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    
    
    USERNAME_FIELDS = 'email'
    
    REQUIRED_FIELDS = ['first_name', 'last_name']
    
    def __str__(self) -> str:
        return self.email
    
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    @property
    def token(self):
        pass