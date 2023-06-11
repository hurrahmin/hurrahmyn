<template>
  <div>
    <div class="d-flex" style="flex-wrap:wrap">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
      <div v-if="!movies[0]" class="mt-5"><h3>찾으시는 영화가 없습니다! 검색어를 확인해주세요:)</h3></div>
    </div>

  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
export default {
  name: 'SearchMovieView',
  props: {
    input : {
      type: String,
      required: true,
    }
  },
  components: {
    MovieCard
  },
  computed: {
    movies() {
      return this.$store.state.searchresults
    }
  },
  // methods: {
  //   getMovie() {
  //     const movie = this.$store.state.movies.filter((movie) => movie.original_title.split(' ').join('').includes(this.$route.params.input))
  //     this.$store.dispatch('getResults', movie)
  //     // console.log(this.movies)
  //   }
  // },
  // mounted() {
  //   this.getMovie();
  // }
  created() {
    // console.log(this.movies)
  }
}
</script>

<style>

</style>