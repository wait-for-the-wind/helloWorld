import { request } from './config'

export default {
  login (params) {
    return request({
      url: 'post',
      method: 'post',
      data: { params }
    })
  }
}
