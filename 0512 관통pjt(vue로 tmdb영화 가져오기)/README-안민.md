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