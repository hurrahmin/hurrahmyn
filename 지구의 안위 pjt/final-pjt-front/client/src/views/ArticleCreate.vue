<!-- views/CreateView.vue -->
<template>
  <b-container role="group" class="p-5 article-form">
    <h2>지구의 안위를 위해 실천합니다.</h2>
    <b-row class="m-4">
      <label style="text-align: start" for="input-title">실천명</label>
      <b-form-input
        id="input-title"
        placeholder="빈칸을 채워주세요"
        v-model="title"
        trim
      >
      </b-form-input>
    </b-row>
    <b-row class="m-4">
      <label style="text-align: start" for="input-content">실천 내용</label>
      <b-form-input
        id="input-content"
        placeholder="내용을 입력하세요"
        v-model="content"
        trim
      >
      </b-form-input>
    </b-row>
    <b-button variant="outline-success" @click="createArticle">빼기</b-button>
  </b-container>
</template>

<script>
import axios from "axios";
// const API_URL = "http://127.0.0.1:8000";

export default {
  name: "ArticleCreate",
  data() {
    return {
      title: null,
      content: null,
    };
  },
  methods: {
    createArticle() {
      const title = this.title;
      const content = this.content

      if (!title) {
        alert("제목을 입력해주세요");
        return;
      } else if (!content) {
        alert("내용을 입력해주세요");
        return;
      } 
      axios({
        method: "post",
        url: 'http://127.0.0.1:8000/articles/',
        data: { title, content } ,
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
        .then((res) => {
          console.log(res)
          this.$router.push({ name: "articleview" });
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