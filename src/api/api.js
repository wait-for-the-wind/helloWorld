import ask from './config.js'
console.log('ask', ask)
export default {
  login (params) {
    return ask.askGet(
      '/user_info',
      params
    )
  },
  test_status_code (params) {
    return ask.askGet(
      '/test_status_code',
      params
    )
  }
}
