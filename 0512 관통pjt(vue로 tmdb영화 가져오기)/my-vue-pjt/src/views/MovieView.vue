<template>
  <div class="d-flex">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue"
export default {
  name: "MovieView",
  components: {
    MovieCard
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies");
    },
  },
  created() {
    this.getMovies();
  },
}
</script>

<style>
.d-flex {
  flex-wrap: wrap;
  justify-content: center;
}
</style>
