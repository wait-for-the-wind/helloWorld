import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // to 目标地址
  // from 从哪里来
  // next 函数
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
  next()
})
export default router
