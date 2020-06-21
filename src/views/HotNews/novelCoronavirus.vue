<template>
  <div>
    <div ref="main" style="width: 1000px;height: 730px;"></div>
  </div>
</template>
<script>
import China from '@js/china.js'
import json from './data1.json'
export default {
  data() {
    return {
      flag: false,
      json: []
    }
  },
  mounted() {
    this.json = json
    this.drawMap()
  },
  methods: {
    drawMap () {
      this.$echart.registerMap('China', China)
      var myMap = this.$echart.init(this.$refs.main)
      myMap.setOption({
        title: {
          text: '疫情图 06-16',
          left: 'center'
        },
        tooltip: {
          formatter(data) {
            var res = data.data
            return `
              省份：${res.name}<br>
              当前确诊数量：${res.value}<br>
              确诊总数量：${res.totle}
            `
          }
        }, // 想要有提示，必须要有这个,可以自定义
        visualMap: {
          type: 'piecewise',
          pieces: [
            { min: 1500 }, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 1000, max: 1500 },
            { min: 310, max: 1000 },
            { min: 30, max: 310 },
            { min: 10, max: 30 },
            { min: 1, max: 9 } // 不指定 min，表示 min 为无限大（-Infinity）。
          ]
        },
        series: [{
          name: '地图',
          type: 'map',
          map: 'china',
          data: json.map(r => {
            return {
              name: r.provinceShortName,
              value: r.currentConfirmedCount,
              totle: r.confirmedCount
            }
          })
        }]
      })
    }
  }
}
</script>
<style lang='less' scoped>
  body{}
</style>
