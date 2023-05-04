<template>
  <div id="app">
    <h1 style="color:green">Coffee Order App</h1>
    <div style="display: flex; direction: row; justify-content: center;">
      <MenuList/>
      <SizeList/>
    </div>
  <OrderList></OrderList>

  </div>
</template>

<script>
import MenuList from '@/components/MenuList.vue'
import SizeList from '@/components/SizeList.vue'
import OrderList from '@/components/OrderList.vue'


export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OrderList,
  },
  }
</script>

<style>
@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
/* * {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
} */
#app {
  font-family: 'SUITE-Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
}

.box {
  width: 450px;
  height: auto;
  padding: 15px;
  box-shadow: 10px 5px 5px rgb(206, 202, 202);
}
.box2 {
  width: 450px;
  height: auto;
  padding: 15px;
  background-color: rgb(255, 255, 255);
  box-shadow: 10px 5px 5px rgb(206, 202, 202);
}
</style>
