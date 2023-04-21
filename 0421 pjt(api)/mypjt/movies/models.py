from django.db import models
from django.conf import settings

# Create your models here.
class Actor(models.Model):
    name = models.CharField(max_length=100)

class Movie(models.Model):
    title = models.CharField(max_length=100)
    actors = models.ManyToManyField(Actor, related_name='movies') #movies의 movie에서 actors를 만들어줄건데 actor을 보고만들거야
    overview =models.TextField()
    release_date = models.DateTimeField()
    poster_path = models.TextField()

class Review(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
