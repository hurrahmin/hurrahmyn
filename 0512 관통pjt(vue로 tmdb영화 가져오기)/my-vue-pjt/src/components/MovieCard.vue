<template>
<div >
  <div class="card m-1" style=" height: 35rem; width: 18rem; ">
    <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title" style="color: navy;">{{movie.title}}</h5>
      <p class="card-text">
        {{movie.overview}} 
      </p>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie : Object,
  }
};
</script>

<style scoped>

p {
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
img {
  height: 450px;
}
</style>