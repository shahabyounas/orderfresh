from django.contrib import admin

# Register your models here.

from .models.question import Question
from .models.choice import Choice

admin.site.register(Question)
admin.site.register(Choice)
