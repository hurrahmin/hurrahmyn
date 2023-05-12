<template>
  <div>
    <img style='width:1100px; height:500px' src="@/assets/main2.gif" class="mb-4">
    <h2>영화가 당신의 일상이 되는 곳</h2>
    <h1>Movie in Mind</h1>
  </div>
</template>

<script>
// import _ from 'lodash'

export default {
  name: 'HomeView',
  // data() {
  //   return {
  //     srcList : [
  //       '/img/main1.0fca8853.gif',
  //       '/img/main2.25b4e709.gif',
  //       '/img/main3.c825a654.gif',
  //       '/img/main4.9d64d51c.gif',
  //       '/img/main5.6b1a6b00.gif',
  //       '/img/main6.2e47809d.gif',
  //     ],
  //     selectedSrc : '',
  //   }
  // },
  // methods: {
  //   selectSrc() {
  //     this.selectedSrc = _.sample(this.srcList)
  //   }
  // },
  // created() {
  //   this.selectedSrc = _.sample(this.srcList)
  //   console.log(this.selectedSrc)
  // }
}
</script>

<style scoped>
h2 {
  color: gray;
}
h1 {
  color: black;
  text-shadow: 5px 5px 7px pink;
}
</style>