from rest_framework.response import Response
from rest_framework.decorators import api_view
# Authentication Decorators
# from rest_framework.decorators import authentication_classes

# permission Decorators
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import ArticleListSerializer
from .models import Article

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def article_list(request):
    if request.method == 'GET':
        articles = Article.objects.all()
        serializer = ArticleListSerializer(articles, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ArticleListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@permission_classes([IsAuthenticated])
@api_view(['GET', 'DELETE', 'PUT'])
def article_detail(request, article_id):
    article = Article.objects.get(pk=article_id)

    if request.method == 'GET':
        serializer = ArticleListSerializer(article)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = ArticleListSerializer(article, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
    
    elif request.method == 'DELETE':
        article.delete()
        message = f'article no.{id} is deleted'
        return Response(message, status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def likes(request, article_id, user_id):
    article = Article.objects.get(pk=article_id)

    if article.like_user.filter(pk=user_id).exists():
        article.like_user.remove(user_id)
    else:
        article.like_user.add(user_id)
    
    article.save()
    serializer = ArticleListSerializer(article)

    return Response(serializer.data)