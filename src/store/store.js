import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import testVuex from './modules/testVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInfo,
    testVuex
  }
})
