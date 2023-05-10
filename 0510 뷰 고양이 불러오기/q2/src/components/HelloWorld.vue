<template>
  <div>
    <h1> cat image </h1>
    <img id='cute' v-if="imgSrc" :src="imgSrc"  alt="">
    <br>
    <button @click="getcat">GET CAT</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      imgSrc: null,
    }
  },
  methods: {
    getCatImage() {
      const URL = 'https://api.thecatapi.com/v1/images/search'

      axios({
        methods: 'get',
        url: URL,
      })
      .then((response) => {
        const CatImg = response.data[0].url
        this.imgSrc = CatImg
      })
    },
    getcat() {
      this.getCatImage()
    }
  },
  created() {
    this.getCatImage()
  },
  updated() {
    console.log(this.imgSrc)
  }
}
</script>

<style>
#cute{
  width: 400px;
  height: auto;
}

</style>