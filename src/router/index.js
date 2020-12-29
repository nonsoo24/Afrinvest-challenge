import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTour from 'vue-tour';
import Home from '../views/Home.vue';

require('vue-tour/dist/vue-tour.css')

Vue.use(VueRouter);
Vue.use(VueTour)

const ifAuthenticated = (to, from, next) => {
  // debugger
  const userToken = JSON.parse(window.localStorage.getItem('user-token'));
  if (userToken !== null) {
    next()
  } else {
    next('/')
  }
}

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/invest',
    name: 'Invest',
    component: () => import( /* webpackChunkName: "about" */ '../views/Invest.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import( /* webpackChunkName: "about" */ '../views/Settings.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import( /* webpackChunkName: "about" */ '../views/Wallet.vue'),
    beforeEnter: ifAuthenticated
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});

export default router;
