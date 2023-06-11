from django.urls import path,include
from . import views


urlpatterns = [
  path('', views.article_list),
  path('<int:article_id>/', views.article_detail),
  path('<int:user_id>/likes/<int:article_id>/', views.likes),
]