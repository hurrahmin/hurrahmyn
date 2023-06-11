<template>
  <div>
    <h1 class="mt-5">지구를 위한 빼기 습관</h1>
    <router-link :to="{ name: 'articlecreate' }">
      <button class="btn btn-outline-success mt-2 mb-4">게시글 작성하러 가기</button>
    </router-link>
    <div class="big">
      <div class="articlelist">
        <ArticleListItem
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
  </div>
  </div>
</template>

<script>
import ArticleListItem from "@/components/ArticleListItem.vue";

export default {
  name: "ArticleView",
  components: {
    ArticleListItem,
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    articles() {
      return this.$store.state.articles;
    },
  },
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      if (this.isLogin) {
        this.$store.dispatch("getArticles");
      } else {
        alert("로그인이 필요한 페이지입니다...");
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>

<style>
.articlelist {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: flex-start; /* 세로 위쪽 정렬 */
}

.articlelist .article-item {
  margin-right: 10px; /* 개별 게시글 간의 오른쪽 여백 조정 */
}



</style>