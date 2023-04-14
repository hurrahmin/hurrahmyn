from django.db import models
from django.conf import settings


class Movie(models.Model):
    movie_like_users=models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='movie_like_movies')
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=20)
    description = models.TextField()
    

    def __str__(self):
        return self.title

class Comment(models.Model):
    movie_id = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.CharField(max_length=100)