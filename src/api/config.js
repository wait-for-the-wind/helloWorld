import axios from 'axios'
import route from '../router/index.js'
var baseURL = ''
// 使用axios时  需要进行函数封装 有利于模块化开发
if (process.env.NODE_ENV === 'development') {
  //  测试地址
  // baseURL = process.env.VUE_APP_BASE_URL
} else {
  //  正式地址
  baseURL = process.env.VUE_APP_BASE_URL
}

// 创建实例 是为了将来如果有多个域名得话 可以设置多个axios实例来对应
const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 设置请求拦截器：发送数据之前可以对数据进行统一包装,开启loading
instance.interceptors.request.use(
  requestConfig => {
    // 登录页面不要token 可如下设置
    if (route.currentRoute.name === 'home') {
      return requestConfig
    }
    // 其它页面时，如果有token，则写入token
    if (localStorage.getItem('token')) {
      requestConfig.headers.common['jwt-token'] = `${localStorage.getItem('token')}`
    }
    return requestConfig
  },
  err => {
    return Promise.reject(err)
  }
)
// 设置响应拦截器：对响应得数据进行统一处理
instance.interceptors.response.use(
  responseConfig => {
    // 响应失败得时候可以统一返回一个弹窗
    if (!responseConfig.data.status) {
      alert('请求失败')
    }
    return responseConfig
  },
  err => {
    return Promise.reject(err)
  }
)

export default {
  askGet(url, queryParams) {
    return new Promise((resolve, reject) => {
      instance.get(url, { params: queryParams })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  askPost(url, params) {
    return new Promise((resolve, reject) => {
      instance.post(url, params)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  // 并发请求
  askAll() {
  }
}
