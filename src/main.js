import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import api from './api/api'
import vuetify from '@/plugins/vuetify' // path to vuetify export

// 引入 babel-polyfill 防止ie7、8出现白屏
// -> vue 根本不支持 ie 7 8
import 'babel-polyfill'
// 引入全局样式
import '@/assets/global.css'
// 引入elementUI以及CSS样式
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false // 生产模式提醒
Vue.use(elementUI)
// 全局调用 this.$api.login()
Vue.prototype.$api = api

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
