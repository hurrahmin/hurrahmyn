<template>
<div class="d-flex">
  <div class="card w-50">
    <div class="left">
      <img :src="`https://image.tmdb.org/t/p/w500${randommovie.poster_path}`" class="card-img-top" />
    </div>
    <div class="card-body right" style="text-align:left;">
      <h2 style="color:navy;">{{randommovie.title}}</h2>
      <br>
      <p>RELEASE DATE : {{randommovie.release_date}}</p>
      <p>SCORE : {{randommovie.vote_average}}</p>
      <h6>{{randommovie.overview}}</h6>
    </div>    
  </div>
</div>
</template>

<script>

export default {
  name: 'RandomView',
  components: {
  },
  methods: {
    getRandomMovie() {
      this.$store.dispatch('getRandomMovie')
    }
  },
  computed: {
    randommovie() {
      return this.$store.state.randommovie
    }
  },
  created() {
    this.getRandomMovie()
  }
}
</script>

<style scoped>
img {
  width: 300px;
  height: auto;
}
.d-flex {
  justify-content: center;
}
.card {
  display: flex;
  flex-direction: row;
}
</style>