from django.urls import path, include
from . import views



urlpatterns = [
    path('actors/', views.actor_list, name='actor_list'),
    path('actors/<int:pk>/', views.actor_detail, name='actor_detail'),
    path('movies/', views.movie_list, name='movie_list'),
    path('movies/<int:pk>/', views.movie_detail, name='movie_detail'),
    path('reviews/', views.review_list, name='review_list'),
    path('reviews/<int:pk>/', views.review_detail, name='review_detail'),
    path('movies/<int:pk>/reviews/', views.create_review, name='create_review')
]
