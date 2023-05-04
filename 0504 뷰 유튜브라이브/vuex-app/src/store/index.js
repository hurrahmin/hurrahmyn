import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'message in store'
  },
  getters: {
    messageLength(state) {
      return state.message.length
    },
    doubleLength(state, getters) {
      return getters.messageLength * 2
    }
  },
  mutations: {
    CHANGE_MESSAGE(state, message) {
      // console.log(state)
      // state안에 있는 메시지를 들어오는 메시지로 바꿔줄겨
      state.message = message
    },
  },
  actions: {
    changeMessage(context, message) {
      context.commit('CHANGE_MESSAGE', message)
    }
  },
  modules: {
  }
})
