import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// const token = localStorage.getItem('user-token')
// if (token) {
//   axios.defaults.headers.common['Authorization'] = token
// }
const userToken = JSON.parse(localStorage.getItem('user-token'));
// axios.defaults.headers.get['Accepts'] = 'application/json';
axios.defaults.baseURL = 'https://tranquil-bayou-87162.herokuapp.com';
// axios.defaults.headers.post['Accepts'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
// axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.interceptors.request.use((config) => config);
axios.interceptors.response.use((response) => response);

// const { $toast } = this;


export const eventBus = new Vue({
  methods: {
    closeBtn() {
      this.$emit('close');
    },
    // closeModal() {
    //   this.$emit('cancel');
    // }
  }
});

Vue.use(VueIziToast);
Vue.config.productionTip = false;
// router.beforeEach((to, from, next) => {
//   const accessToken = JSON.parse(localStorage.getItem('token'));
//   if(accessToken != null) {
//     next()
//   }else{
//     next(false)
//   }
// })
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
