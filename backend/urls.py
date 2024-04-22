# from django.conf.urls import url
from django.urls import path, include

from .views.todo_view import TodoListAppView
from .views.question_view import QuestionAppView



urlpatterns = [
    path('', QuestionAppView.as_view()),
]
