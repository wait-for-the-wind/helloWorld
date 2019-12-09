import axios from 'axios'

export function request (config) {
  const instance1 = axios.create({
    baseURL: 'http://httpbin.org/',
    timeout: 5000
  })

  instance1.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

  return instance1(config)
}

//  export default {
//    askPost (url, params) {
//     return new Promise((resolve, reject) => {
//       axios.post(url, params).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//    }
//  }

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
