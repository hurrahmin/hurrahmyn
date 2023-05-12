<template>
  <div id="app">
    <nav>
      <router-link :to="{name : 'movies'}">MOVIE</router-link> |
      <router-link :to="{name : 'random'}">RANDOM</router-link> |
      <router-link :to="{name : 'watch-list'}">WATCH-LIST</router-link>
    </nav> 
    <router-view/>
  </div>
</template>

<script>

export default({
  name: 'App',
  data () {
    return {
      isApp: true,
    }
  },

})
</script>


<style>
@font-face {
    font-family: 'BookkMyungjo-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/BookkMyungjo-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

#app {
  font-family: 'BookkMyungjo-Bd';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: navy; 
  text-decoration: underline;
  text-underline-position: under;
}
</style>

<style scoped>
img {
  display: flex;
}
</style>