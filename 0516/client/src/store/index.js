import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
import router from '../router'


export default new Vuex.Store({
  state: {
    articles:[],
    access: null,
    token : null,

  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({name: 'article'})
    },
    GET_ARTICLES(state, token) {
      state.token = token
      router.push({name: 'article'})
    }
  },
  actions: {
    login(context, payload) {
      const username = payload.username
      const password = payload.password

      axios({
        method: 'POST',
        url : 'http://127.0.0.1:8000/auth/login/',
        data: {
          username, password
        }
      })
        .then((res)=> {
          // console.log(res.data.access)
          context.commit('SAVE_TOKEN', res.data.access)
        })
        .catch((err)=> console.log(err))
    },
    signup(context, payload) {
      const username = payload.username
      const password1 = payload.password1
      const password2 = payload.password2
      // console.log(username, password, password2)

      axios({
        method: 'POST',
        url : 'http://127.0.0.1:8000/auth/signup/',
        data : {
          username, password1, password2
        }
      })
      .then((res)=> {
        // console.log(res)
        context.commit('SAVE_TOKEN', res.data.access)

      })
      .catch((err)=>{
        console.log(err)
      })
    },
    getArticles(context) {
      axios({
        method : 'GET',
        url: 'http://127.0.0.1:8000/api/v1/articles/',
        headers: {
          Authorization: `Bearer ${context.state.token}`
        }
      })
      .then((res)=> {
        context.commit('GET_ARTICLES',res.data)
      })
      .catch((err)=> {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
