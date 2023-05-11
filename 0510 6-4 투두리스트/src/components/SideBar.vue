<template>
  <div id="app">
    <div id="box1" class="me-2">
      <nav>
        <h3><router-link to="/">모든 할 일 페이지</router-link></h3>
        <h3><router-link to="/today">오늘 할 일 페이지</router-link></h3>
        <h3><router-link to="/important">중요 할 일 페이지</router-link></h3>

      </nav>
    </div>

  </div>

</template>
<script>
export default {

}
</script>

<style>
#box1 {
  width: auto;
  height: auto;
  padding: 15px;
  border: 1px solid black;
  border-radius: 1rem;
}

/* #box2 {
  border: 1px solid black;
  width: 400px;
  height: 800px
} */
</style>