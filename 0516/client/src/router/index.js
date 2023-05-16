import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleView from '../views/ArticleView.vue'
import CreateView from '@/views/CreateView'
import SignupView from '@/views/SignupView'
import LoginView from '@/views/LoginView'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },

  {
    path: '/signup',
    name: 'SignupView',
    component: SignupView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
