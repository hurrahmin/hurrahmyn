<template>
  <div>
    <div class="card me-5 mb-4" style="width: 20rem; height: 13rem">
      
        <h6 class="card-subtitle text-body-secondary mt-2 ms-2">
          <router-link :to="{name: 'profileview',  params:{ username  : article.username } }">{{ article.username }}</router-link>의 빼기
        </h6>
      <div class="card-body">
        <h5 class="card-title">{{ article.title }}</h5>
        <p class="card-text">{{ article.content }}</p>
        <div class="bottom">
          <h6 class="mt-2">{{ article.likecount }} 개의 좋아요</h6>
          <button
            class="btn btn-outline-danger ms-2"
            v-if="isLike"
            @click="dislikes"
          >
            ♡
          </button>
          <button class="btn btn-outline-danger ms-2" v-else @click="likes">
            ♥
          </button>

          <div class="middle" v-if="article.username == this.user.username">
            <router-link
              :to="{
                name: 'articleupdate',
                params: { id: article.id.toString() },
              }"
            >
              <button class="btn btn-outline-dark">✎수정</button>
            </router-link>
            <button class="btn btn-outline-dark" @click="deleteArticle">
              ✂삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleListItem",
  props: {
    article: Object,
  },
  data() {
    return {
      authenticated: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.userinfo;
    },
    isLike() {
      return this.article.like_user.includes(this.user.id);
    },
  },
  methods: {
    deleteArticle() {
      axios({
        method: "delete",
        url: `http://127.0.0.1:8000/articles/${this.article.id}`,
      })
        .then(() => {
          alert("삭제 완료");
          this.$store.dispatch("getArticles");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    likes() {
      axios({
        method: "post",
        url: `http://127.0.0.1:8000/articles/${this.user.id}/likes/${this.article.id}/`,
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.$store.dispatch("getArticles");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    dislikes() {
      axios({
        method: "post",
        url: `http://127.0.0.1:8000/articles/${this.user.id}/likes/${this.article.id}/`,
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then((res) => {
          // this.count -= 1;
          this.$store.dispatch("getArticles");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.card-subtitle{
  display: flex;
  font-size: 15px;
}
.middle {
  display: flex;
}
.btn-outline-dark {
  border: none;
  /* width: 60px; */
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.card {
  position: relative;
}
</style>


