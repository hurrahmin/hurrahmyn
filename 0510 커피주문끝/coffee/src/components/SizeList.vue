<template>
  <div class="box2" >
    <h2 :class="{'step' : isSecond }">PICK SIZE!</h2>
    <br>
    <SizeListItem v-for="(size, index) in sizeList" :key="index" :size="size"></SizeListItem>
  </div>
</template>

<script>
import SizeListItem from '@/components/SizeListItem';

export default {
  name: 'SizeList',
  components: {
    SizeListItem
  },
  methods: {
    // onSelectMenu: function () {},
  },
  computed: {
    sizeList() {
      return this.$store.state.sizeList
    },
    isSecond() {
      return this.$store.state.isSecond
    }
  },
}
</script>

<style>
.step{
  background-color: #3767A6;
  color:white;
}
</style>