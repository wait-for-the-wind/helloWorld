import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import api from './api/api'

// 引入全局样式
import '@/assets/global.css'
// 引入elementUI以及CSS样式
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false // 生产模式提醒
Vue.use(elementUI)
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// request({
//   url: 'get'
// }).then(res => {
//   console.log(res)
// })
