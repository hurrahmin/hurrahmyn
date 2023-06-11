from rest_framework.response import Response
from rest_framework.decorators import api_view
# Authentication Decorators
# from rest_framework.decorators import authentication_classes

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import MovieListSerializer, GenreListSerializer, ReviewListSerializer
from .models import Movie, Genre, Review


@api_view(['GET'])
def movie_list(request):
    if request.method == 'GET':
        movies = get_list_or_404(Movie)
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def movie_detail(request, movie_id):
    if request.method == 'GET':
        movie = get_object_or_404(Movie, pk=movie_id)
        serializer = MovieListSerializer(movie)
        return Response(serializer.data)

@api_view(['GET'])
def genre_list(request):
    if request.method == 'GET':
        genres = get_list_or_404(Genre)
        serializer = GenreListSerializer(genres, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def review_list(request):
    if request.method == 'GET':
        reviews = Review.objects.all()
        serializer = ReviewListSerializer(reviews, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ReviewListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
@api_view(['GET', 'DELETE', 'PUT'])
def review_detail(request, review_id):
    review = Review.objects.get(pk=review_id)

    if request.method == 'GET':
        serializer = ReviewListSerializer(review)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = ReviewListSerializer(review, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    
    elif request.method == 'DELETE':
        review.delete()
        message = f'Review no.{id} is deleted'
        return Response(message, status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def likes(request, movie_id, user_id):
    movie = Movie.objects.get(pk=movie_id)

    if movie.like_user.filter(pk=user_id).exists():
        movie.like_user.remove(user_id)
    else:
        movie.like_user.add(user_id)
    
    movie.save()
    serializer = MovieListSerializer(movie)

    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def review_likes(request, review_id, user_id):
    review = Review.objects.get(pk=review_id)

    if review.like_user.filter(pk=user_id).exists():
        review.like_user.remove(user_id)
    else:
        review.like_user.add(user_id)
    
    review.save()
    serializer = ReviewListSerializer(review)

    return Response(serializer.data)