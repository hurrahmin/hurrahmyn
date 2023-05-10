<template>
  <div id="forbox2">
    <button class="mt-2 btn btn-outline-success" :class="{selected: size.selected}" @click="selectSize">
      <span>{{ size.name }}</span>
      <span>{{ size.price }}원</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods: {
    selectSize() {
      this.$store.commit('updateSizeList', this.size)
      this.$store.state.isSecond = false
      this.$store.state.isThird = true
    }
  }
}
</script>

<style scoped>
#forbox2 {
  display: flex ;
  justify-content: center;
}
.selected{
  background-color: #3C763D;
  color: white
}
button {
  display: flex ;
  justify-content: space-between;
  width: 300px;
  align-items: center;
  height: 54px;
}
</style>