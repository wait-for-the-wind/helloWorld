import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import api from './api/api'

// 引入 babel-polyfill 防止ie7、8出现白屏
import 'babel-polyfill'
// 引入全局样式
import '@/assets/global.css'
// 引入elementUI以及CSS样式
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// 导入 mock 模拟数据
import './mock/mock.js'

Vue.config.productionTip = false // 生产模式提醒
Vue.use(elementUI)
// 全局调用 this.$api.login()
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
