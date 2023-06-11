<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary ms-2">
      <div class="container-fluid">
        <router-link
          class="navbar-brand ms-4"
          href="#"
          style="color: #00b969"
          :to="{ name: 'home' }"
          ><img src="@/assets/logo.png" style="width: 150px" alt=""
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'movie' }"
                >지구에 더하기</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'reviewview' }"
                >지구에 나누기</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'articleview' }"
                >지구에 빼기</router-link
              >
            </li>
          </ul>
          <div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="검색어를 입력하세요"
                aria-label="Search"
                v-model="inputData"
                @keyup.enter="searchMovie"
                trim
              />
              <button class="btn btn-outline-success" @click="searchMovie">
                ▶
              </button>
            </form>
          </div>
          <div>
            <ul class="navbar-nav me-5">
              <li class="nav-item mt-2 ms-2" @click="logout" v-if="isLogin">
                로그아웃
              </li>
              <li class="nav-item" v-else>
                <router-link
                  class="nav-link active"
                  aria-current="page"
                  :to="{ name: 'login' }"
                  >로그인</router-link
                >
              </li>
              <li class="nav-item" v-if="isLogin">
                <router-link
                  class="nav-link active"
                  aria-current="page"
                  :to="{
                    name: 'profileview',
                    params: { username: user.username },
                  }"
                  >프로필</router-link
                >
              </li>
              <li class="nav-item" v-else>
                <router-link
                  class="nav-link active"
                  aria-current="page"
                  :to="{ name: 'signup' }"
                  >회원가입</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import data from '@/assets/movie.json'
// const movieList= data;

export default {
  name: "App",
  data() {
    return {
      inputData: null,
    };
  },
  created() {
    this.$store.dispatch("getMovies");
    // console.log(this.$store.state.movies);
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    searchMovie(e) {
      e.preventDefault();
      // console.log(this.inputData);
      // console.log(this.$route.name)
      let input = this.inputData.split(" ").join("");

      const movie = this.$store.state.movies.filter((movie) =>
        movie.original_title
          .split(" ")
          .join("")
          .includes(this.$route.params.input)
      );
      this.$store.dispatch("getResults", movie);

      this.$router
        .push({
          name: "searchmovie",
          params: { input: input },
        })
        .catch(() => {});
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin; // 로그인 여부
    },
    user() {
      return this.$store.state.userinfo;
    },
  },
};
</script>


<style>
@font-face {
  font-family: "SEBANG_Gothic_Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}

.navbar-brand {
  font-family: "SEBANG_Gothic_Bold";
}

#app {
  font-family: "Pretendard-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

::-webkit-scrollbar {
  display: none; /* 스크롤바 숨기기 */
}
</style>