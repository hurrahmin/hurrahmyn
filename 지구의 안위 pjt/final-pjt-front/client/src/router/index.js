import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ReviewCreate from '../views/ReviewCreate.vue'
import MovieView from '../views/MovieView.vue'
import ArticleView from '../views/ArticleView.vue'
import MovieDetail from '../views/MovieDetail.vue'
import ReviewView from '../views/ReviewView.vue'
import ReviewDetail from '../views/ReviewDetail.vue'
import ReviewUpdate from '../views/ReviewUpdate.vue'
import ArticleCreate from '../views/ArticleCreate.vue'
// import ArticleDetail from '../views/ArticleDetail.vue'
import ArticleUpdate from '../views/ArticleUpdate.vue'
import ProfileView from '../views/ProfileView.vue'
import SearchMovieView from '../views/SearchMovieView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  },
  {
    path: '/movies/:id',
    name: 'moviedetail',
    component: MovieDetail,
    props: true,
  },
  {
    path: '/movie/:id/create',
    name: 'reviewcreate',
    component: ReviewCreate,
    props: true,
  },
  {
    path: '/movie/review',
    name: 'reviewview',
    component: ReviewView,
  },
  {
    path: '/login',
    name: 'login',
    component : LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/article',
    name: 'articleview',
    component: ArticleView
  },
  {
    path: '/article/create',
    name: 'articlecreate',
    component: ArticleCreate
  },
  {
    path: '/review/:id',
    name: 'reviewdetail',
    component: ReviewDetail,
    props: true,
  },
  // {
  //   path: '/article/detail/:id',
  //   name: 'articledetail',
  //   component: ArticleDetail,
  //   props: true,
  // },
  {
    path: '/review/:id/update',
    name: 'reviewupdate',
    component: ReviewUpdate,
    props: true,
  },
  {
    path: '/article/:id/update',
    name: 'articleupdate',
    component: ArticleUpdate,
    props: true,
  },
  {
    path:'/profile/:username',
    name: 'profileview',
    component: ProfileView,
    props: true,
  },
  {
    path:'/search/:input',
    name: 'searchmovie',
    component: SearchMovieView,
    props: true,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


