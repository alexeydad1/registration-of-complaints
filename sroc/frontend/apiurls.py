from django.urls import path
from . import views

urlpatterns =[
    path('auth/permissions/', views.permissions, name='permissions'),
]