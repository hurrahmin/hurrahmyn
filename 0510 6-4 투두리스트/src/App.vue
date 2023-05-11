<template>
  <div id="app">
    <SideBar/>
    <div id="box2">
      <router-view/>
    </div>
  
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  },
  methods: {
    // gopay() {
    //   this.$store.commit('addOrder');
    // },
  }
  }

</script>

<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#box2 {
  /* display: inline-block; */
  width: 450px;
  height: auto;
  padding: 15px;
  border: 1px solid black;
  border-radius: 1rem;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
