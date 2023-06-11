<!-- views/CreateView.vue -->
<template>
  <b-container role="group" class="p-5 article-form">
    <h1>게시글 작성</h1>
    <b-row class="m-1">
      <label style="text-align: start" for="input-title">TITLE</label>
      <b-form-input
        id="input-title"
        placeholder="제목을 입력하세요"
        v-model="title"
        trim
      >
      </b-form-input>
    </b-row>
    <b-row class="m-1">
      <label style="text-align: start" for="input-content">CONTENT</label>
      <b-form-input
        id="input-content"
        placeholder="내용을 입력하세요"
        v-model="content"
        trim
      >
      </b-form-input>
    </b-row>
    <b-button variant="primary" @click="createArticle">작성</b-button>
  </b-container>
</template>

<script>
import axios from "axios";
const API_URL = "http://127.0.0.1:8000";

export default {
  name: "CreateView",
  components: {},
  data() {
    return {
      title: null,
      content: null,
    };
  },
  methods: {
    getRate(e) {
      console.log(e.target.title)
    },
    createArticle() {
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
        method: "post",
        url: `${API_URL}/articles/`,
        data: { title, content },
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then(() => {
          // console.log(res)
          this.$router.push({ name: "ArticleView" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>

</style>