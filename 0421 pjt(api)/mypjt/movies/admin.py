from django.contrib import admin
from .models import Actor
from .models import Movie
from .models import Review

# Register your models here.
admin.site.register(Actor)
admin.site.register(Movie)
admin.site.register(Review)