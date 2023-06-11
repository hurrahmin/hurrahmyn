<!-- views/CreateView.vue -->
<template>
  <b-container v-if="article" role="group" class="p-5 article-form">
    <h1>게시글 작성</h1>
    <b-row class="m-1">
      <label style="text-align: start" for="input-title">TITLE</label>
      <b-form-input
        id="input-title"
        :placeholder="article.title"
        v-model="title"
        trim
      >
      </b-form-input>
    </b-row>
    <b-row class="m-1">
      <label style="text-align: start" for="input-content">CONTENT</label>
      <b-form-input
        id="input-content"
        :placeholder="article.content"
        v-model="content"
        trim
      >
      </b-form-input>
    </b-row>
    <b-button variant="primary" @click="updateArticle">수정</b-button>
  </b-container>
</template>

<script>
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "ArticleUpdate",
  components: {},
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      title: null,
      content: null,
      article: null,
    };
  },
  methods: {
    updateArticle() {
      const title = this.title;
      const content = this.content;

      if (!title) {
        alert("제목을 입력해주세요");
        return;
      } else if (!content) {
        alert("내용을 입력해주세요");
        return;
      }
      axios({
        method: "put",
        url: `${API_URL}/articles/${this.id}/`,
        data: { title, content },
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then(() => {
          // console.log(res)
          this.$router.push({ name: "articleview" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getArticle() {
      axios
        .get(`http://127.0.0.1:8000/articles/${this.id}/`)
        .then((response) => {
          this.article = response.data;
          // console.log(this.review)
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getArticle();
  },
};
</script>

<style>

</style>