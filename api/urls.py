from django.urls import path
from .views import *

urlpatterns = [
    path('student', student.as_view(), name='student'),
    path('student/<str>', student.as_view()),
    path('store', store.as_view(), name='store'),
    path('store/<str>', store.as_view()),
]
