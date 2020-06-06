import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index')
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  try {
//条件
    next()
  } catch (e) {
    next()
  }
})
export default router
