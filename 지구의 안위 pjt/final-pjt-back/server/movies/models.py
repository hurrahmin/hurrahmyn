from django.db import models
from django.conf import settings


class Genre(models.Model):
    name = models.CharField(max_length=50)

class Movie(models.Model):
    like_user = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_movies', blank=True)
    original_title = models.CharField(max_length=100)
    release_date = models.DateField()
    popularity = models.FloatField()
    vote_count = models.IntegerField()
    vote_average = models.FloatField()
    overview = models.TextField()
    poster_path = models.CharField(max_length=200)
    genres = models.ManyToManyField(Genre)
    backdrop_path = models.CharField(max_length=200, blank=True)
    trailer_path = models.CharField(max_length=200, blank=True)

class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    like_user = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_reviews', blank=True)

    title = models.CharField(max_length=100)
    question1 = models.TextField()
    question2 = models.TextField()
    content1 = models.TextField()
    content2 = models.TextField()
    content3 = models.TextField(blank=True)
    score = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)