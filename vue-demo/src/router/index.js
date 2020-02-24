import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index')
    }
  ]
})
