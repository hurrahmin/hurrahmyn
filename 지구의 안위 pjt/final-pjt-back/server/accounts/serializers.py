from rest_framework import serializers
from django.contrib.auth import get_user_model

class UserSerializer(serializers.ModelSerializer):
  followingcount = serializers.IntegerField(source='followings.count', read_only=True)
  followercount = serializers.IntegerField(source='followers.count', read_only=True)
  # followings = serializers.CharField(source='following')

  class Meta: 
    model = get_user_model()
    fields = ('id', 'username', 'followingcount', 'followercount', 'followings', 'followers', )