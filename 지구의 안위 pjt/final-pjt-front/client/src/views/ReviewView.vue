<template>
  <div>
    <h1 class="mt-5">지구에 나누기</h1>
    <ReviewList />
    <!-- <h2>{{movie}}</h2> -->
  </div>
</template>

<script>
import ReviewList from '@/components/ReviewList.vue'

export default {
  name: 'ReviewView',
  components: {
    ReviewList,
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin // 로그인 여부
    },
    // movie() {
    //   return this.$store.state.movies
    // }
  },
  created() {
    this.getReviews()
  },
  methods: {
    getReviews() {
      if (this.isLogin) {
        this.$store.dispatch('getReviews')
      } else {
        alert('로그인이 필요한 페이지입니다...')
        this.$router.push({ name: 'login' })
      }


      // 로그인이 되어 있으면 getArticles action 실행
      // 로그인 X라면 login 페이지로 이동

    }
  }
}
</script>

<style>

</style>
