<template>
  <div>
    <div class="paylist" >
      <div class="left">
        <img :src = 'order.menu.image'>
        <p class="m-2"> {{ order.menu.title }} ({{ order.size.name }}) </p>
        <p class="mt-2" v-for="(option, index) in order.option" :key="index"> [{{ option.type }} {{ option.count }}개 추가]</p>
      </div>
      <div class="right">
        <!-- <p class="m-2"> {{ order.menu.price + order.size.price }} 원 </p> -->
        <p class="m-2"> {{ totalPrice }} 원 </p>

      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  computed: {
    totalPrice: function () {
      let option_sum=0
        this.order.option.forEach(opt => {
          option_sum+=opt.price * opt.count
      })
      return option_sum+this.order.menu.price+ this.order.size.price
    },
    
  },
}
</script>

<style>
img {
  width : 40px;
  height: 40px;
}
.paylist {
  display: flex !important;
  justify-content: space-between;
  width: 800px;
  /* align-items: center; */
}
.left {
  display: flex
}
</style>