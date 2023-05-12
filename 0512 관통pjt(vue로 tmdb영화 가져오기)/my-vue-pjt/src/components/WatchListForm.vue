<template>

<div class="box">
  <div class="form rounded-top">
    <h1><h1 style="color:navy;">MOVIE IN MIND</h1></h1>
    <input type="text" v-model="movieInput" @keyup.enter="towatch">
    <button class="btn btn-sm btn-outline-primary ms-1" @click="towatch">ADD</button>
  </div>
</div>

</template>

<script>
export default {
  name: "WatchListForm",
  data () {
    return {
      movieInput : null,
    }
  },
  methods: {
    towatch() {
      const movie = { 'title' : this.movieInput, 'is_completed': false }
      this.$store.dispatch('toWatch', movie)
      this.movieInput = null
    }
  }


}
</script>

<style scoped>
.form {
  background-color: aliceblue;
  width: 80%;
  padding: 1rem;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>