해시태그 할일

1. 앱의 모델에 간다.
class Hashtag(models.Model):
    content=models.TextField(unique=True)

    def __str__(self):
        return self.content

작성해준다.
콘텐츠만 받아온다.

2. 앱의 url 경로를 고쳐준다.
path('<int:hash_pk>/hashtag/', views.hashtag, name='hashtag'),

3. 앱의 views에 간다.
def hashtag(request, hash_pk):
    hashtag = get_object_or_404(Hashtag, pk=hash_pk)
    movies= hashtag.movie_set.order_by("-pk")
    context={
        'hashtag': hashtag,
        'movies': movies,
    }
    return render(request, 'movies/hashtag.html', context)

views의 맨 위에서
from .models import Movie, Comment, Hashtag
해쉬태그 불러오는거 잊지마라.

또, views의 create 함수 가서
#으로 시작하는거 검사하는거 추가해라.

            for word in movie.content.split():
                if word.startswith("#"):
                    hashtag, created = Hashtag.objects.get_or_create(content=word)
                    movie.hashtags.add(hashtag)
            return redirect("movies:detail", movie.pk)

4. 앱 밑에 templatetag 만들고 그 안에 make_link.py 만들기
from django import template

register=template.Library()

@register.filter
def hashtag_link(movie):
    content=movie.content
    hashtags=movie.hashtags.all()

    for hashtag in hashtags:
        content=content.replace(hashtag.content, f"<a href='/movies/{hashtag.pk}/hashtag'>{hashtag.content}</a>")
    
    return content

5. detail.html 같은 곳에서 수정해줌
  <hr>
  <h3>{{ movie.pk }} 번째 영화 : {{ movie.title }}</h3>
  <br>
  <p>{{ movie|hashtag_link|safe }}</p>
  <br>
  <p>{{ movie.created_at }} 작성</p>
  <p>{{ movie.updated_at }} 최종 수정</p>

이런식으로 해시태그 링크 껴줌.


