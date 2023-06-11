<template>
  <div class="container mt-4">
    <div class="top d-flex" style="width: 100%;">
      <div class="left mt-5">
        <h1>{{ username }}님의 여정</h1>
      </div>
      <div class="right mt-5">
        <div class="d-flex align-items-center">
          <div v-if="followingpersonid !== user.username">
            <button class="btn btn-outline-primary me-3" v-if="isFollowing" @click="follow">언팔로우</button>
            <button class="btn btn-outline-primary me-3" v-else @click="follow">팔로우</button>
          </div>
          팔로잉: {{ followingcount }} | 팔로워: {{ followercount }}
        </div>
      </div>
    </div>
    <div class="line mb-3" v-if="movies.length"></div>
    <div class="zzim" style="display: flex; flex-direction: column; align-items: flex-start" v-if="movies.length">
      <h4>{{ username }}님이 찜한 영화목록</h4>
      <div v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'moviedetail', params: { id: movie.id.toString() } }">
          <h6>⦁ {{ movie.original_title }}</h6>
        </router-link>
      </div>
    </div>
    <div class="line mb-3" v-if="reviews.length"></div>
    <div style="display: flex; flex-direction: column; align-items: flex-start" v-if="reviews.length">
      <h4>{{ username }}님이 작성한 리뷰목록</h4>
      <div v-for="review in reviews" :key="review.id">
        <router-link :to="{ name: 'reviewdetail', params: { id: review.id.toString() } }">
          <h6>⦁ {{ review.title }} - {{ review.movie_title }}</h6>
        </router-link>
      </div>
    </div>
    <div class="line mb-3" v-if="articles.length"></div>
    <div style="display: flex; flex-direction: column; align-items: flex-start" v-if="articles.length">
      <h4>{{ username }}님이 작성한 게시글</h4>
      <div v-for="article in articles" :key="article.id">
        <h6>⦁ {{ article.title }} - {{ article.content }}</h6>
      </div>
    </div>
    <div class="line mb-3" v-if="following_users[0]"></div>
    <div class="followinglist" v-if="following_users[0]">
      <h4>{{ username }}님의 팔로잉 목록</h4>
      <div v-for="following_user in following_users" :key="following_user.id">
        <router-link :to="{name: 'profileview',  params:{ username  : following_user.username } }"><h6>⦁ {{ following_user.username }}</h6></router-link>  
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfileView",
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      followingpersonid: null,
      articles: [],
      reviews: [],
      movies: [],
      followingcount: null,
      followercount: null,
      followercheck: null,
      followings: [],
      following_users: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.userinfo;
    },
    isFollowing() {
      if (!this.followercheck || !this.user) {
        return false;
      }
      return this.followercheck.includes(this.user.id);
    },
  },
  methods: {
    getArticle() {
      const articles = this.$store.state.articles.filter((article) => article.username === this.username);
      this.articles = articles;
    },
    getReview() {
      const reviews = this.$store.state.reviews.filter((review) => review.username === this.username);
      this.reviews = reviews;
    },
    getZzims() {
      const movies = this.$store.state.movies.filter((movie) => movie.like_user.includes(this.user.id));
      this.movies = movies;
    },
    getTarget() {
      return new Promise((resolve, reject) => {
        axios({
          method: "get",
          url: `http://127.0.0.1:8000/accounts/${this.username}/`,
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
          .then((res) => {
            this.followingpersonid = res.data.username;
            this.followingcount = res.data.followingcount;
            this.followercount = res.data.followercount;
            this.followercheck = res.data.followers;
            this.followings = res.data.followings;
            resolve();
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    },
    fetchFollowingUsers() {
      const followings = this.followings;
      const requests = followings.map((following) => {
        return axios({
          method: "get",
          url: `http://127.0.0.1:8000/accounts/${following}/following/`,
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        });
      });
      Promise.all(requests)
        .then((responses) => {
          this.following_users = responses.map((res) => res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    follow() {
      axios({
        method: "post",
        url: `http://127.0.0.1:8000/accounts/${this.user.id}/${this.username}/follow/`,
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then(() => {
          this.getTarget();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    username() {
      this.getArticle();
      this.getReview();
      this.getZzims();
      this.getTarget()
        .then(() => {
          this.fetchFollowingUsers();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getArticle();
    this.getReview();
    this.getZzims();
    this.getTarget()
      .then(() => {
        this.fetchFollowingUsers();
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.line {
  height: 3px;
  background-color: rgb(14, 82, 0);
  width: 100%;
}

a {
  text-decoration-line: none;
  color: black;
}

h4 {
  color: #0477bf;
}

.right {
  display: flex;
  align-items: center;
}

.top {
  display: flex;
  justify-content: space-between;
}

.followinglist{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
