// 路径别名
const path = require('path')
const { config } = require('process')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// webpack.config.js
module.exports = {
  // 1\路径别名
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@images', resolve('src/assets/images'))
      .set('@js', resolve('src/assets/js'))
      .set('@components', resolve('src/components'))
  },
  // 2\跨域
  devServer: {
    proxy: 'http://p.2217.com/'
  }
  // configureWebpack: () => {
  //   config.module.rules.push({
  //     // test: /.md$/,
  //     // use: 'text-loader'
  //   })
  // }
}
