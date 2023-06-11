from rest_framework import serializers
from .models import Movie, Genre, Review

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"

class GenreListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"

class ReviewListSerializer(serializers.ModelSerializer):
    likecount = serializers.IntegerField(source='like_user.count',read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)
    movie_title = serializers.CharField(source='movie.original_title', read_only=True)
    movie_poster = serializers.CharField(source='movie.poster_path', read_only=True)

    class Meta:
        model = Review
        exclude = ("user",)