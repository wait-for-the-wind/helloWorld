const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// webpack.config.js
module.exports = {
  devServer: {
    proxy: 'http://api.2217.com'
  }
}
