from django.urls import path,include
from . import views


urlpatterns = [
  path('', views.movie_list),
  path('<int:movie_id>/', views.movie_detail),
  path('genres/', views.genre_list),
  path('reviews/', views.review_list),
  path('reviews/<int:review_id>/', views.review_detail),
  path('<int:movie_id>/<int:user_id>/likes/', views.likes),
  path('reviews/<int:review_id>/<int:user_id>/likes/',views.review_likes)
]