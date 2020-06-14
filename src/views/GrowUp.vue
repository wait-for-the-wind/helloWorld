<template>
  <div class="wrapper">
    1、时间线（事件记录）
    2、地图（走过哪些地方）
    以上可做成tab切换
    <div ref="main" style="width: 1200px;height: 800px;"></div>
    <div id="bar" style="width: 1200px;height: 800px;"></div>
  </div>
</template>

<script>
import China from '@js/china.js'
import json from './data1.json'
export default {
  data () {
    return {
      flag: false,
      json: []
    }
  },
  mounted () {
    this.json = json
    this.drawMap()
    this.drawBar()
  },
  methods: {
    drawMap () {
      this.$echart.registerMap('China', China)
      var myMap = this.$echart.init(this.$refs.main)
      myMap.setOption({
        title: {
          text: '疫情图',
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
    },
    drawBar () {
      var myBar = this.$echart.init(document.getElementById('bar'))
      myBar.setOption({
        title: {
          text: '柱状图',
          left: 'center'
        },
        backgroundColor: 'rgb(128, 128, 128, 0.5)',
        color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae'],
        legend: {
          right: 0
        },
        tooltip: {}, // 想要有提示，必须要有这个,可以自定义
        xAxis: {
          type: 'value',
          max: 100,
          axisLine: {
            lineStyle: {
              color: 'green'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            lineStyle: {
              color: 'green'
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '数据1',
            type: 'bar',
            label: {
              show: true,
              position: 'right',
              color: 'black',
              fontSize: 17,
              formatter(data) {
                return data.data
              }
            },
            data: [3, 5, 7, 34, 2, 2, 56]
          }
        ]
      })
    }
  }
}
</script>

<style>
</style>
