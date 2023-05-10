// import { forEach } from 'core-js/core/array'
import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

// const orderState = createPersistedState({
//   // key를 변경
//   key: "coffee-app",
//   // 저장 위치를 세션 스토리지로 변경
//   storage: window.sessionStorage,
//   // 상태중 일부만 저장 (사용 x)
//   // reducer: (state) => ({
//   //     message: state.message,
//   // }),
// });

export default new Vuex.Store({
  // plugins: [
  //   // orderState
  // ],
  state: {
    isFirst : true,
    isSecond: false,
    isThird: false,
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '라떼',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?mocha'
      },
      {
        title: '레몬에이드',
        price: 4500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?lemonade'
      },
    ],
    sizeList: [
      {
        name: 'small',
        price: 0,
        selected: false,
      },
      {
        name: 'medium',
        price: 500,
        selected: false,
      },
      {
        name: 'large',
        price: 1000,
        selected: false,
      },
    ],
    optionList: [
      {
        type: '샷',
        price: 500,
        count:0
      },
      {
        type: '바닐라 시럽',
        price: 500,
        count:0
      },
      {
        type: '카라멜 시럽',
        price: 500,
        count:0
      }
    ],
    selectedmenu: {},
    selectedsize: {},
    selectedoption: []

  },
  getters: {
    totalOrderCount: state => {
      return state.orderList.length;
    },
    totalOrderPrice: state => {
      return state.orderList.reduce((total, order) => {
        let option_sum=0
        order.option.forEach(opt => {
          option_sum+=opt.price * opt.count
        })
        return total+ order.menu.price + order.size.price + option_sum ;
      },0);
    }
  },
  mutations: {
    clearPay: function(state) {
      state.orderList=[]
      window.sessionStorage.clear()
      // console.log(window.localStorage.setItem('vuex',[]))
    },
    addOrder: function (state) {
      const option = JSON.parse(JSON.stringify(state.optionList))
      // console.log(state.selectedmenu)
      // console.log(state.selectedsize)
      if (state.selectedmenu.selected && state.selectedsize.selected) {
      state.orderList.push({
        menu: state.selectedmenu,
        size: state.selectedsize,
        option: option,
      })} else {
        alert('음료와 사이즈를 골라주세요!')
      }

      state.selectedmenu.selected=false
      state.selectedsize.selected=false
      state.selectedmenu={}
      state.selectedsize={}
      // console.log(state.menuList)
      // console.log(state.sizeList)

      state.optionList.forEach(opt => {
        opt.count=0
      })
    },
    updateMenuList: function (state, selectedMenu) {
      state.menuList.forEach(menu => {
        if (menu.title === selectedMenu.title) {
          menu.selected = true;
          state.selectedmenu=selectedMenu;
        } 
      })
    },
    updateSizeList: function (state, selectedSize) {
      state.sizeList.forEach(size => {
        if (size.name === selectedSize.name) {
          size.selected= true;
          state.selectedsize=selectedSize

        }
      })
    },
    updateOptionList: function(state, newOption) {
      state.optionList.forEach(option => {
        if (option.type === newOption.type) {
          option.count++;
          state.selectedoption.push(newOption)
          // console.log(state.selectedoption)
        }
      })
    },
    updateminusOptionList: function(state, newOption) {
      state.optionList.forEach(option => {
        if (option.type === newOption.type &&  option.count >0) {
          option.count--;
          state.selectedoption.push(newOption)
        }
      })
    },
  },
  actions: {
  },
  modules: {
  }
})