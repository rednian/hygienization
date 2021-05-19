import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:location',
    name: 'location.index',
    props: true,
    component: () => import(/* webpackChunkName: "location.index" */ '../views/location.vue')
  },
  {
    path: '*',
    name: 'notfound',
    redirect: {name: 'home'}
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});


export default router;