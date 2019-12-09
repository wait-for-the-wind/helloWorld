import axios from 'axios'

export function request (config) {
  // 1、创建实例
  const instance1 = axios.create({
    baseURL: 'http://httpbin.org/',
    timeout: 5000
  })
  // 2、设置拦截器
  // 3、发送网络请求
  return instance1(config)
}

// export function request (config) {
//   const instance1 = axios.create({
//     baseURL: 'http://httpbin.org/',
//     timeout: 5000
//   })
//   instance1(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     }).catch(err => {
//       config.failed(err)
//     })
// }

// export function request (config, success, failed) {
//   const instance1 = axios.create({
//     baseURL: 'http://httpbin.org/',
//     timeout: 5000
//   })
//   instance1(config)
//     .then(res => {
//       success(res)
//     }).catch(err => {
//       failed(err)
//     })
// }
