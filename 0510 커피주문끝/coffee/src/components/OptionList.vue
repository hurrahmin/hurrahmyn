<template>
  <div class="box4" >
    <h2 :class="{'step' : isThird }">OPTION</h2>
    <!-- <ul class="option-list">
    </ul> -->
    <br>
    <OptionListItem v-for="(option, index) in optionList" :key="index" :option="option"></OptionListItem>
  </div>
</template>

<script>
import OptionListItem from './OptionListItem.vue';


export default {
  name: 'OptionList',
  components: {
    OptionListItem
},
  computed: {
    optionList() {
      return this.$store.state.optionList
    },
    isThird() {
      return this.$store.state.isThird
    },

  },
  methods: {
    increase: function () {
    },
    decrease: function () {
    },
  },
}
</script>

<style>
.step{
  background-color: #3767A6;
  color:white;
}
</style>