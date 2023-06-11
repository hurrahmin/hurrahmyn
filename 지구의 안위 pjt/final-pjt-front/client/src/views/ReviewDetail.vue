<template>
  <div v-if="review">
    <hr class="mt-5" />
    <div class="container">
      <div class="left me-5">
        <h3>{{ review.username }}</h3>
        <h2>{{ review.movie_title }}</h2>
        <p class="wannaborder">★ {{ review.score }} / 5.0</p>
        <h5>
          {{ review.username }}에게 이 영화란
          <u style="color: navy" class="m-2">{{ review.title }}</u
          >이다.
        </h5>
        <h5>{{ review.question1 }}</h5>
        <p>- {{ review.content1 }}</p>
        <h5>{{ review.question2 }}</h5>
        <p>- {{ review.content2 }}</p>
        <h5 v-if="review.content3">그 외 하고 싶은 말이 있다면?</h5>
        <p v-if="review.content3">- {{ review.content3 }}</p>
        <div class="realright">
            <span class="me-2">{{ review.likecount }} 개의 좋아요</span>
            <button
              class="btn btn-outline-danger"
              v-if="isLike"
              @click="likeReview"
            >
              ♡
            </button>
            <button class="btn btn-outline-danger" v-else @click="likeReview">
              ♥
            </button>
          <div class="right_right ms-5" v-if="authenticated">
            <router-link
              :to="{
                name: 'reviewupdate',
                params: { id: review.id.toString() },
              }"
            >
              <button class="btn btn-outline-dark">✎수정</button>
            </router-link>
            <button class="btn btn-outline-dark" @click="deleteReview">
              ✂삭제
            </button>
          </div>
        </div>
      </div>
      <div class="right ms-5 mt-5">
        <img
          class="ms-5 w-50"
          :src="getMoviePosterUrl(review.movie_poster)"
          alt="Movie Poster"
        />
      </div>
    </div>

    <!-- <h5>{{ review }}</h5> -->

    <br />
    <hr />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReviewDetail",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      review: null,
      authenticated: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.userinfo;
    },
    isLike() {
      return this.review.like_user.includes(this.user.id);
    },
  },
  methods: {
    getMoviePosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    getReview() {
      axios({
        method: "get",
        url: `http://127.0.0.1:8000/movies/reviews/${this.id}`,
      })
        .then((res) => {
          this.review = res.data;
          if (this.review.username === this.user.username) {
            this.authenticated = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteReview() {
      axios({
        method: "delete",
        url: `http://127.0.0.1:8000/movies/reviews/${this.id}`,
      })
        .then(() => {
          alert("리뷰 삭제 완료");
          this.$router.push({ name: "reviewview" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    likeReview() {
      axios({
        method: "post",
        url: `http://127.0.0.1:8000/movies/reviews/${this.id}/${this.user.id}/likes/`,
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then(() => {
          this.getReview();
          // console.log(res.data)
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.getReview();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.realright {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

}
.btn-outline-dark {
  border: none;
}
.wannaborder {
  border: 1px solid rgb(185, 159, 126);
  border-radius: 10px;
  width: 80px;
}
</style>