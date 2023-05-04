<template>
  <div id="forbox1">
    <button class="mt-2 btn btn-outline-success" :class="{selected: menu.selected}" @click="selectMenu" >
      <img :src = 'menu.image'>
      <span>{{ menu.title }}</span>
      <span>{{ menu.price }}원</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods: {
    selectMenu() {
      this.$store.commit('updateMenuList', this.menu);
    }
  }
}
</script>

<style scoped>
img {
  width : 40px;
  height: 40px;
}
button {
  display: flex !important;
  justify-content: space-between;
  width: 400px;
  align-items: center;
}
.selected{
  background-color: #3C763D;
  color: white
}
#forbox1 {
  display: flex ;
  justify-content: center;
}
</style>