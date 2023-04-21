from rest_framework import serializers
from .models import Actor, Movie, Review

class ActorListSerializer(serializers.ModelSerializer):
    # 만약 id말고 pk로 받고싶다면? rep은 그냥 이름바꾸기요
    # def to_representation(self, instance):
    #     rep = super().to_representation(instance)
    #     rep['pk']=rep.pop('id',[])
    #     return rep
    class Meta:
        model = Actor
        fields = '__all__'

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = 'title','overview'


class ActorSerializer(serializers.ModelSerializer):
    #액터디테일용 - 타이틀만 보여줘
    class actordetail_MovieListSerializer(serializers.ModelSerializer):
        class Meta:
            model = Movie
            fields = ('title',)

    #related_name했을경우
    movies = actordetail_MovieListSerializer(many=True, read_only=True)

    #안한경우
    # movie_set = actordetail_MovieListSerializer(many=True, read_only=True)
    # def to_representation(self, instance):
    #     rep = super().to_representation(instance)
    #     rep['movies']=rep.pop('movie_set',[])
    #     return rep

    class Meta:
        model = Actor
        fields = '__all__'



class MovieSerializer(serializers.ModelSerializer):
    class ActornameSerializer(serializers.ModelSerializer):
        class Meta:
            model = Actor
            fields= ('name',)

    actors = ActornameSerializer(many=True, read_only=True)
    class Meta:
        model = Movie
        fields = '__all__'
    

class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('title','content')

class ReviewSerializer(serializers.ModelSerializer):
    class reviewdetail_MovieListSerializer(serializers.ModelSerializer):
        class Meta:
            model = Movie
            fields = ('title',)

    movie= reviewdetail_MovieListSerializer(read_only=True)
    class Meta:
        model = Review
        fields = '__all__'
