from django.urls import path,include
from . import views

# app_name = 'accounts'

urlpatterns = [
  path('userinfo/', views.userinfo),
  path('<int:requestuser_id>/<str:person_name>/follow/', views.follow),
  path('<str:person_name>/', views.get_target),
  path('<int:person_id>/following/', views.get_following),
] 