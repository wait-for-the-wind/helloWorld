import axios from 'axios'
// 使用axios时  需要进行函数封装 有利于模块化开发

// 创建实例 是为了将来如果有多个域名得话 可以设置多个axios实例来对应
const instance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/',
  timeout: 5000
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default {
  askGet(url, params) {
    return new Promise((resolve, reject) => {
      instance.get(url, params).then(res => {
        resolve(res.date)
      },
      err => {
        reject(err)
      })
        .catch(err => {
          reject(err)
        })
    })
  }
}
