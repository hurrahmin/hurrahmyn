<template>
  <div>
    <div>
      <br>
      <h2 style="text-align: left;"> 주문 내역 </h2>
      <!-- <h1> {{ orderList }}</h1> -->
      <p style="text-align: left;"> 총 {{ totalOrderCount }} 건: {{ totalOrderPrice }} 원 </p>
      
    <OrderListItem v-for="(order, index) in orderList" :key="index" :order="order"></OrderListItem>

    </div>

  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem.vue'


export default {
  name: 'OrderList',
  components: {
    OrderListItem
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice: function () {
      return this.$store.getters.totalOrderPrice
    },
  },
}
</script>

<style>

</style>