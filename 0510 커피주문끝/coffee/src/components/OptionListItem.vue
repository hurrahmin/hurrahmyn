<template>
  <div id="forbox2">
    <button class="mt-2 btn btn-outline-success" >
      <span> {{ option.type }} </span>
      <input type='button' @click="increase" value='+'/>
      <span> {{ option.count }} </span>
      <input type='button' @click="decrease" value='-'/>
    </button>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.commit('updateOptionList', this.option);
    },
    decrease() {
      this.$store.commit('updateminusOptionList', this.option);
    },
  },
}
</script>

<style>
button {
  display: flex ;
  justify-content: space-between;
  width: 300px;
  align-items: center;
  height: 52px;
}
</style>