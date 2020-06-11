<template>
  <div class="wrapper">
    1、时间线（事件记录）
    2、地图（走过哪些地方）
    <div id="main" style="width: 1200px;height: 800px;"></div>
  </div>
</template>

<script>
import China from '@js/china.js'
export default {
  data() {
    return {
      flag: false
    }
  },
  mounted() {
    this.drawMap()
  },
  methods: {
    drawMap() {
      this.$echart.registerMap('China', China)
      var myMap = this.$echart.init(document.getElementById('main'))
      myMap.setOption({
        title: {
          text: '盛·迎风',
          left: 'center'
        },
        tooltip: {}, // 想要有提示，必须要有这个
        visualMap: {
          type: 'piecewise',
          pieces: [
            { min: 1500 }, // 不指定 max，表示 max 为无限大（Infinity）。
            {min: 900, max: 1500},
            {min: 310, max: 1000},
            {min: 200, max: 300},
            { min: 10, max: 200 },
            {max: 5} // 不指定 min，表示 min 为无限大（-Infinity）。
          ]
        },
        series: [{
          name: '地图',
          type: 'map',
          map: 'china',
          data: [
            {
              name: '浙江',
              value: 50
            },
            {
              name: '上海',
              value: 1
            },
            {
              name: '江苏',
              value: 1
            },
            {
              name: '江西',
              value: 2000
            }
          ]
        }]
      })
    }
  }
}
</script>

<style>
</style>
