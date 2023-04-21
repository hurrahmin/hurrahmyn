<h1> 0421 pjt- API </h1>
<h3> 알게된 것들 </h3>

1. manytomanyfield 에 대한 이해

```
actors = models.ManyToManyField(Actor, related_name='movies')
```
의 의미는?
=>
movie에서도 actors를 쓰고 싶어서 movie랑 actor랑 이어줄거야. Actor에서 가져올거야
역참조할 때 이름은 movies야

2. serialize.py에서 내부 클래스 만들수 있다.
헷갈리니까 내부 클래스 만드는 편이 더 낫겠다.

3. rep 의 역할이 무엇일까 ? -이름 변경용이다.. <br>
actor detail에서 actor의 id와 연결된 movie의 타이틀을 가져오고싶다면?
=> actor detail용 serialize 만들고 (내부 클래스로) , related_name 만든거 그대로 받아옴
혹은, related_name 안만들고  rep 이용하면 된다.

<related_name 했을경우>
```
movies = actordetail_MovieListSerializer(many=True, read_only=True)
```

<related_name 안한경우>
```
movie_set = actordetail_MovieListSerializer(many=True, read_only=True)
def to_representation(self, instance):
    rep = super().to_representation(instance)
    rep['movies']=rep.pop('movie_set',[])
    return rep
```
-> movie_set . 역참조를 movies라는 이름으로 가져와줘 하는것!

4. post 할때 게시글과 댓글에서 다르게 해야한다.
리뷰(=코멘트)는 게시글에 해당하는 리뷰이므로 pk 받아야함.
게시글은 pk받을 필요 없음.