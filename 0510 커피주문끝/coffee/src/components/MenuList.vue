<template>
  <div class="box" >
    <h2 :class="{'step' : isFirst }">PICK BEVERAGE!</h2>
    <br>
    <MenuListItem v-for="(menu, index) in menuList" :key="index" :menu="menu" ></MenuListItem>
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
    isFirst () {
      return this.$store.state.isFirst
    }
  },
  methods: {
    // selectMenu: function (e) {
    //   console.log(e.target)
    //   console.log(this.$store.state.isFirst)
    //   this.$store.state.isFirst = false
    //   console.log(this.$store.state.isFirst)
    //   this.$store.state.isSecond = true
    // },
  },
}
</script>

<style>
.step{
  background-color: #3767A6;
  color:white;
}
</style>