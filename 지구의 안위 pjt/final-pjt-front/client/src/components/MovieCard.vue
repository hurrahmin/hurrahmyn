<template>
<div>
  <!-- <div class="card m-1" style=" height: auto; width: 18rem; "> -->
    <div class="movie mt-3">
      <router-link :to="{name: 'moviedetail', params: { id:movie.id.toString() }}">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" class="card-img-top m-2" :class="{'active': isActive}" />
      </router-link>
      <h5 class="card-title ms-3" style="text-align:start; font-weight:bold;" :class="{'text_active': isActive}">{{movie.original_title}}</h5>
      <!-- <h6 class="card-title ms-3" style="text-align:start;" :class="{'text_active': isActive}">{{movie.release_date}}</h6> -->
    </div>
    <!-- </div> -->
  <!-- </div> -->
</div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie : Object,
  },
  data () {
    return {
      isActive : false,
    }
  },
  methods : {
    doMouseOver () {
      this.isActive = true;
    },
    doMouseLeave () {
      this.isActive = false;
    }
  }
};
</script>

<style scoped>
img {
  height: 450px;
  width: 320px;
}
.movie:hover {
  transform: scale(1.1);
  /* border: 2px solid #F288AF; */
  color: #00B969;
}

</style>
