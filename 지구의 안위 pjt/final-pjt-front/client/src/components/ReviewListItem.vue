<template>
<div>
  <router-link :to="{name: 'profileview',  params:{ username  : review.username } }"><h6>{{ review.username }}</h6></router-link>
  <router-link :to="{name: 'reviewdetail', params: { id:review.id.toString() } }"><h6>{{ review.movie_title }} - {{ review.title }}</h6></router-link>
  <h6>{{ review.score }} / 5.0</h6>
</div>
</template>

<script>
export default {
  name: "ReviewListItem",
  props: {
    review: Object,
  },

};
</script>

<style>
</style>


