import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import api from './api/api'
import echarts from 'echarts'
import mixins from './mixins/mixins'
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'
// 引入 babel-polyfill 防止ie7、8出现白屏
// -> vue 根本不支持 ie 7 8
import 'babel-polyfill'
// 引入全局样式
import '@/assets/global.less'
import '@/assets/css/special.less'
// 引入elementUI以及CSS样式
import elementUI from 'element-ui'
// 这种导入相同与直接可以使用了
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
// 使用混入mixins
Vue.mixin(mixins)
Vue.config.productionTip = false // 生产模式提醒
Vue.config.devtools = false
Vue.use(elementUI)
Vue.use(vuescroll)
// 全局调用 this.$api.login()
Vue.prototype.$api = api
Vue.prototype.$echart = echarts

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
