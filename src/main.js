import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

axios.defaults.headers.get['Accepts'] = 'application/json';
axios.defaults.baseURL = 'https://tranquil-bayou-87162.herokuapp.com';
axios.interceptors.request.use((config) => config);
axios.interceptors.response.use((response) => response);

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  const accessToken = JSON.parse(localStorage.getItem('token'));
  if(accessToken != null || accessToken != undefined || accessToken != '' ) {
    next()
  }else{
    next(false)
  }
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
