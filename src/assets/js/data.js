let request = require('request')
let cheerio = require('cheerio')
let fs = require('fs')
request('https://ncov.dxy.cn/ncovh5/view/pneumonia', (a, b, c) => {
  const $ = cheerio.load(c)
  let window = {}
  eval($('#getAreaStat').html())
  console.log('window', window)
  fs.writeFileSync(__dirname + '/data1.json', JSON.stringify(window.getAreaStat))
})

// 使用 cheerio 解析接口获取过来的信息 npm i cheerio (node端的 jQuery)
