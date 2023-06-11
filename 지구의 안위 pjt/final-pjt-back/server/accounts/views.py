from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model

from .serializers import UserSerializer

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def userinfo(request):
  serializer = UserSerializer(request.user)
  return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def follow(request, requestuser_id, person_name):
    person = get_user_model().objects.get(username=person_name)

    if person.followers.filter(pk=request.user.pk).exists():
        person.followers.remove(request.user)
    else:
        person.followers.add(request.user)
    
    person.save()
    serializer = UserSerializer(person)

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_target(request, person_name):
    person = get_user_model().objects.get(username=person_name)
    serializer = UserSerializer(person)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_following(request, person_id):
    person = get_user_model().objects.get(pk=person_id)
    serializer = UserSerializer(person)
    return Response(serializer.data)