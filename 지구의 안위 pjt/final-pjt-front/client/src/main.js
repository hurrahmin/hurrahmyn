import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'bootstrap';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // 페이지 이동 시 항상 맨 위로 스크롤하도록 설정
  window.scrollTo(0, 0);
  next();
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
