import ask from './config.js'
export default {
  login(params) {
    return ask.askGet('/user_info', params)
  },
  test_status_code(params) {
    return ask.askPost('/test_status_code', params)
  },
  getHotGame(params) {
    return ask.askPost('/game/game_info', params)
  }
}
