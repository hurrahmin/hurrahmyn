// import { forEach } from 'core-js/core/array'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '금가루 아메리카노',
        price: 30000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '금가루 카페모카',
        price: 32000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?mocha'
      },
      {
        title: '금가루 레몬에이드',
        price: 35000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?lemonade'
      },
    ],
    sizeList: [
      {
        name: 'small',
        price: 500,
        selected: false,
      },
      {
        name: 'medium',
        price: 1000,
        selected: false,
      },
      {
        name: 'large',
        price: 1500,
        selected: false,
      },
    ],
  },
  getters: {
  },
  mutations: {
    addOrder: function (state) {
      const selectedMenuList = state.menuList.filter(menu => menu.selected)
      const selectedSizeList = state.sizeList.filter(size => size.selected)

      const orderList = []
      selectedMenuList.forEach(menu => {
        selectedSizeList.forEach(size => {
          orderList.push({
            menu: {
              'title': menu.title,
              'price': menu.price,
              'selected': menu.selected,
              'image': menu.image
            },
            size: {
              'name': size.name,
              'price': size.price,
              'selected': size.selected
            }
          })
        })
      })
      state.orderList = state.orderList.concat(orderList)
    },
    updateMenuList: function (state, selectedMenu) {
      state.menuList.forEach(menu => {
        if (menu.title === selectedMenu.title) {
          menu.selected = true;
        } 
      })
    },
    updateSizeList: function (state, selectedSize) {
      state.sizeList.forEach(size => {
        if (size.name === selectedSize.name) {
          size.selected= true;
        }
      })
    },
  },
  actions: {
  },
  modules: {
  }
})