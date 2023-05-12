# 09PJT : 위효선
<br>

## Vue를 활용한 SPA 구성

## 프로젝트 목표
- 영화 정보를 제공하는 SPA 제작
- AJAX 통신과 JSON 구조에 대한 이해
- Vue CLI, Vue Router 플러그인 활용


> ## 학습 내용, 어려웠던 부분, 새로 배운 것들
- Pair programming을 처음 해봤는데, 매우 재밌었습니다. 네비게이터와 드라이버가 되어 각각의 역할을 해보니, 개발에 대해 더 깊이 이해할 수 있었습니다. 주의사항을 숙지하여 페어 프로그래밍의 장점을 십분 활용할 수 있도록 하겠습니다!
- lodash 사용 방법과 img src 바인딩 방법을 잘 몰라 사용하는 것이 어려웠습니다.
- 폰트 크기와 색상을 자유자재로 변경하는 것이 어려웠습니다. 한 줄 내에서도 이를 각기 다르게 주는 방법이 있는지 찾아보겠습니다.
- 날씨에 따라 영화를 추천하는 과제는 도전하지 못했습니다. API 활용 방법을 익혀 관통 PJT 때에는 다양한 영화 추천 알고리즘을 구현할 수 있도록 노력하겠습니다.


> ## 느낀 점
- 관통 pjt에 대해 막연한 두려움을 갖고 있었는데, 페어와 함께라면 잘 해낼 수 있을 것 같다는 자신감이 생겼습니다. 누가 되지 않게 더 열심히 노력해야겠다는 생각도 들었습니다. 
모쪼록 남은 기간 열심히 노력하여 1학기를 잘 마무리할 수 있도록 하겠습니다. 파이팅!!

<br>
<br>

# 09PJT : 안민
다 적어보겠습니다.<br>

> ## 최고평점 영화 보기
1. App.vue 라우터 링크 통해 name이 movies인 곳(MovieView)으로 간다. (index.js 에서 정의함)
2. MovieCard 하나씩 보여주는 구조 이기 때문에 MovieCard import한다.
3. Movies를 받아야한다. MovieView methods에서 getMovies() 함수 정의해준다.store의 actions로 보내서 axios 실행하게끔 한다. actions에서는 바로 실행이 안되니, mutations로 넘겨주도록 영화 데이터들과 함께 싸서 commit한다.
4. state에서 movies는 null로 정의해주고, mutations함수가 실행되면 받은 movies를 state의 movies로 정의해준다.
5. 그리고 movies를 부를 곳!!! MovieView에서 computed에서 state의 movies를 불러온다! movie 하나하나씩을 MovieCard에 보낸다.
6. MovieCard에서 당연히 props로 받아야한다. 받고 {{}}에서 감싸서 표현한다. 이미지 표현 시 <br>
```<img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" class="card-img-top" />```<br>
라고 표현해야 한다. 바인딩 후, {} 하나만 써야한다. 헷갈린다.

> ## 랜덤 영화 보기
1. 라우터 링크 통해 RandomView로 이동
2. RandomView 에서 한번에 다 보여준다.
3. methods에서 getRandomMovie() 함수 정의해주고, dispatch로 store의 actions에 보내준다. .then을 통해 movies를 받는데, movies중 랜덤으로 하나씩 뽑아야 하니까 lodash의 sample을 이용한다.
<br>```const randommovie= _.sample(movies)```<br>
4. 위 코드처럼 randommovie로 정의해주고 난 후, mutations의 GET_RANDOM_MOVIE로 보낸다.
5. state에서 randommovie 빈 리스트로 정의해주고, state의 randommovie는 actions에서 보내는 movie라고 mutations에서 재정의한다.
6. RandomView computed를 통해 state의 movie 받는 함수 만든다. 창이 열릴 때마다 랜덤 영화 나와야 하니 created()로 computed()에서 정의한 함수 불러준다.

> ## 보고싶은 영화
1. WatchListView로 이동하는 라우터 생성
2. 텍스트 입력하면 toWatch 함수 실행
3. is_completed 추가해서 작성한 인풋값이랑 데이터 싸서 dispatch로 actions에 보내준다.
4. 또 mutations에서 처리한다
5. 클릭하면 isCompleted 함수 실행되게 한다.
6. 함수 내에서 지금 값과 반대로 만들어준다
7. is_completed가 true일 경우 style 적용되게 한다.

> ## 배운 것
1. css 더 깊게 알 수 있었다. ex) 폰트 적용, 밑줄 없애기, 텍스트 그림자
2. lodash를 활용하여 random 추출 하는 법
3. api 전용 파일 만들어 api 노출 하지 않는 방법
4. 팀원과의 협업. 2인 협업은 처음인데, 네비게이터와 드라이버 간 역할을 나누어 팀 업무를 수행하는 것이 굉장히 효과적인 방법이라고 생각했다. 일주일 간 프로젝트도 진행하게 될 텐데, 보다 더 나은 협업을 위해 더 열심히 공부해야 겠다고 느꼈다.
5. 전체적인 vue의 흐름을 보게 되었다. 어떻게 데이터를 넘기고, 받아 화면에 띄우는지 전체적인 흐름을 파악하게 되어 의미있는 프로젝트였다.