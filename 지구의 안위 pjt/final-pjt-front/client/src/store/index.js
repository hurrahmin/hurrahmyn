import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

import createPersistedState from 'vuex-persistedstate'
import _ from 'lodash'


// const MOVIE_API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f421a03f8d7402a5ff6f00dd423f4a84&language=ko-KR&page=2'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage:window.sessionStorage,
  }),
  ],
  state: {
    articles: [],
    reviews: [],
    userinfo: {},
    token: null,
    movies: null,
    genres: null, 
    questions: [
      "영화를 보기 전, 후로 달라진 것이 있나요?",
      "오늘 당장 무엇을 할 수 있을까요?",
      "영화를 보여주고 싶은 사람이 있나요? 누구에게, 왜 보여주고 싶은가요?",
      "과거에 했던 일들 중 반성하게 되는 행동이 있나요?",
      "사회에 바라게 된 것이 있나요?",
      "영화를 보며 어떤 감정을 가장 크게 느꼈나요?",
      "영화를 관통하는 한마디 적어주시겠어요?"
    ],
    selectedQuestions: [],
    searchresults: [],
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    GET_ARTICLES(state, articles) {
      state.articles = articles
    },
    GET_REVIEWS(state, reviews) {
      state.reviews = reviews
    },
    SAVE_USERINFO(state, userinfo) {
      state.userinfo = userinfo
      console.log(userinfo)
    },
    // signup & login -> 완료하면 토큰 발급
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({name : 'home'}) // store/index.js $router 접근 불가 -> import를 해야함
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/accounts/userinfo/',
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      })
      .then((res) => {
        // console.log(res)
        this.commit('SAVE_USERINFO', res.data)
      })
      .catch((err) => {console.log(err)})
    },
    SAVE_USERNAME(state, name) {
      state.username = name
    },
    GET_MOVIES(state, movies) {
      state.movies = movies
      // console.log(state.movies)
    },
    GET_GENRES(state, genres) {
      state.genres = genres
      // console.log(state.genres)
    },
    LOGOUT(state) {
      state.token = null
      state.username = null
      router.push('/').catch(()=>{});
    },
    GET_QUESTIONS(state, questions) {
      state.selectedQuestions = questions
      // console.log(state.selectedQuestions)
    },
    GET_RESULTS(state, results) {
      state.searchresults = results
    },
  },
  actions: {
    getArticles(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/articles/',
        headers: {
          Authorization: `Bearer ${context.state.token}`
        }
      })
      .then((res) => {
        // console.log(res)
        context.commit('GET_ARTICLES', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    getReviews(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/reviews/',
        headers: {
          Authorization: `Bearer ${context.state.token}`
        }
      })
      .then((res) => {
        // console.log(res, context)
        context.commit('GET_REVIEWS', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    signUp(context, payload) {
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
      .catch(()=>{
        // console.log(err.response.data)
        alert('입력하신 계정 정보는 이미 존재하는 정보입니다.')
        router.push({name : 'login'})
      })
    },
    login(context, payload) {
      const username = payload.username
      const password = payload.password
      
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/auth/login/',
        data: {
          username, password
        }
      })
      .then((res) => {
        // console.log(res.data.access)
        context.commit('SAVE_TOKEN', res.data.access)
      })
      .catch((err) => {
        console.log(err)
        alert('입력하신 정보가 올바르지 않습니다')
      })
      
    },
    getMovies(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/'

      })
      .then((res) => {
        // console.log(res)
        context.commit('GET_MOVIES', res.data)
      })
    },
    getGenres(context) {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/movies/genres/'
      })
      .then((res) => {
        // console.log(res)
        context.commit('GET_GENRES', res.data)
      })
      .catch((err) => console.log(err))
    },
    logout(context) {
      context.commit('LOGOUT')
    },
    getQuestions(context) {
      let selected_questions = _.sampleSize(context.state.questions, 2)
      context.commit('GET_QUESTIONS', selected_questions)
    },
    getResults(context, movie) {
      context.commit('GET_RESULTS', movie)
    }
  },
  modules: {
  }
})

