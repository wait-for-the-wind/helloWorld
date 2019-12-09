import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import api from './api/api'

Vue.config.productionTip = false

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

// request({
//   baseConfig: {
//     url: 'get'
//   },
//   success (res) {
//     console.log('res', res)
//   }
// })

// request({
//   url: 'get'
// }, (res) => {
//   console.log(res)
// })
