import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.VUE_APP_MOVIE_API_KEY}&language=en-US&page=1`
import _ from 'lodash'

export default new Vuex.Store({
  state: {
    movies : null,
    randommovie: [],
    moviesToWatch: []
  },
  getters: {
  },
  mutations: {
    GET_MOVIES(state, movies) {
      state.movies = movies
      console.log(movies)
    },
    GET_RANDOM_MOVIE(state, movie){
      state.randommovie = movie
      // console.log(movie)
    },
    TO_WATCH(state, movie) {
      state.moviesToWatch.push(movie)
    }
  },
  actions: {
    getMovies(context) {
      axios({
        method: 'get',
        url: API_URL,
      })
      .then((res) => {
        context.commit('GET_MOVIES', res.data.results)
      })
    },
    getRandomMovie(context) {
      axios({
        method: 'get',
        url: API_URL,
      })
      .then((res) => {
        const movies = res.data.results
        const randommovie= _.sample(movies)
        context.commit('GET_RANDOM_MOVIE', randommovie)
      })
    },
    toWatch(context, movie) {
      context.commit('TO_WATCH', movie)
    }
  },
  modules: {
  }
})
