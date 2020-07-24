let request = require('request')
let cheerio = require('cheerio')
let fs = require('fs')

// 这是获取疫情统计图的部分
request('https://ncov.dxy.cn/ncovh5/view/pneumonia', (a, b, c) => {
  const $ = cheerio.load(c)
  let window = {}
  eval($('#getAreaStat').html())
  console.log('window', window)
  fs.writeFileSync(
    __dirname + '/data1.json',
    JSON.stringify(window.getAreaStat)
  )
})
