const webpack = require('webpack')

// 路径别名
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// webpack.config.js
module.exports = {
  // 路径别名
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@images', resolve('src/assets/images'))
      .set('@js', resolve('src/assets/js'))
  },
  // 跨域
  devServer: {
    proxy: 'http://api.2217.com'
  }
}
