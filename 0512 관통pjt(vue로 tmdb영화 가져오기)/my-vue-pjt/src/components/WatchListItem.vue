<template>
  <div class="box">
    <div class="movie" 
    v-for="(movie, idx) in movielst" :key="idx"
    :class="{'is-completed' : movie.is_completed }" @click="isCompleted(movie)"
    >
      <h4 class="m-1">{{movie.title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchListItem",
  computed : {
    movielst () {
      return this.$store.state.moviesToWatch
    }
  },
  methods: {
    isCompleted (movie) {
      const temp = !movie.is_completed
      movie.is_completed = temp
    }
  }
}


</script>

<style>
.box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
.movie {
  background-color : #F2F2F2;
  width: 80%;
}
.is-completed {
  text-decoration: line-through;
  background-color : #d4cfcf;
  
}
</style>