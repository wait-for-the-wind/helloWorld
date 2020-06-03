import ask from './config.js'
console.log('ask', ask)
export default {
  login (params) {
    return ask.askGet(
      'https://www.easy-mock.com/mock/5e1c113c59fdf1258ed824a0/example/mock',
      params
    )
  }
}
