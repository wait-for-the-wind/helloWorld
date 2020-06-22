import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import api from './api/api'
import Echarts from 'echarts'

// 引入 babel-polyfill 防止ie7、8出现白屏
// -> vue 根本不支持 ie 7 8 ,所以引入也是白引入了
import 'babel-polyfill'
// 引入全局样式
import '@/assets/global.less'
// 引入elementUI以及CSS样式
import elementUI from 'element-ui'
// 这种导入相同与直接可以使用了
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false // 生产模式提醒
Vue.config.devtools = false
Vue.use(elementUI)
Vue.prototype.$echart = Echarts
// 全局调用 this.$api.login()
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
