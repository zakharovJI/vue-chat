import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store/index.js"

Vue.use(VueRouter)


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['user/getAuthorizationInfo']) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters['user/getAuthorizationInfo']) {
    next()
    return
  }
  next('/authorization')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: () => import('../views/Authorization.vue'),
    beforeEnter: ifNotAuthenticated,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
