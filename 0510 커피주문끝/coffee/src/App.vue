<template>
  <div id="app">
    <img id='image' src="@/assets/fritz_logo-03.png">
    <!-- <h1 style="color:green">Coffee Order App</h1> -->
    <div id="container" style="display: flex; direction: row; justify-content: center;">
      <MenuList/>
      <SizeList/>
      <OptionList/>

      
    </div>
    <hr>
    <button class="btn btn-outline-success" type="button" id="gopay" @click="gopay">장바구니 담기</button>
    <button class="btn btn-outline-success" type="button" id="clearpay" @click="clearpay">장바구니 초기화</button>
    <div style="display: flex; direction: row; justify-content: center">

      <div class="box3">
        <OrderList/>
      </div>
    </div>

  </div>
</template>

<script>
import MenuList from '@/components/MenuList.vue'
import SizeList from '@/components/SizeList.vue'
import OrderList from '@/components/OrderList.vue'
import OptionList from '@/components/OptionList.vue'


export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OrderList,
    OptionList,
  },
  methods: {
    gopay() {
      this.$store.commit('addOrder');
      this.$store.state.isFirst = true;
      this.$store.state.isThird = false;
    },
    clearpay() {
      this.$store.commit('clearPay');
      // window.localStorage.clear()
    }
  }
  }
</script>

<style>
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#image {
  width: 80%;
  height: auto;
  margin-bottom: 20px;
}
#app {
  font-family:'GmarketSansMedium';
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
  width: 400px;
  height: auto;
  padding: 15px;
  /* background-color: blanchedalmond; */
  /* border */
}
.box2 {
  width: 400px;
  height: auto;
  padding: 15px;
  /* background-color: blanchedalmond; */
  /* box-shadow: 10px 5px 5px rgb(206, 202, 202); */
}
#gopay{
  width: 450px;
}
#clearpay{
  width: 150px;
  margin-left: 20px;
}
.box3 {
  width: 900px;
  height: auto;
  padding: 15px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  /* box-shadow: 10px 5px 5px rgb(206, 202, 202); */
}
.box4 {
  width: 400px;
  height: auto;
  padding: 15px;
  background-color: rgb(255, 255, 255);
  /* box-shadow: 10px 5px 5px rgb(206, 202, 202); */
}

</style>

<style scoped>
img {
  width :400px;
  height: 400px;
}


</style>