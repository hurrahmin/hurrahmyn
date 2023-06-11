from rest_framework import serializers
from .models import Article

class ArticleListSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    likecount = serializers.IntegerField(source='like_user.count', read_only=True)
    
    class Meta:
        model = Article
        # fields = ('id', 'title', 'content')
        exclude = ("user",)