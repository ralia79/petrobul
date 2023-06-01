import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../core/home/home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({x: 0, y: 0}),
  routes
})

export default router
