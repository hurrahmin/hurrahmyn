<template>
  <div class="box" >
    <h1>1. 음료를 고르세요.</h1>
    <br>
    <MenuListItem v-for="(menu, index) in menuList" :key="index" :menu="menu" @click="selectMenu"></MenuListItem>
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem.vue'

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList() {
      return this.$store.state.menuList
    },
  },
  methods: {
    selectMenu: function (e) {
      console.log(e.target)
    },
  },
}
</script>

<style>

</style>