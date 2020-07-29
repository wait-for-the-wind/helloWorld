<template>
  <div>
    <button @click="loadRes">下载</button>
    <!-- <button @click="getUrl">生成网站链接</button> -->
  </div>
</template>
<script>
import dataJson from './data2.json'
export default {
  data() {
    return {
      flag: false,
      smallImg: [],
      dataJson: []
    }
  },
  created() {
    this.dataJson = dataJson
  },
  mounted() {
    this.imgLoad()
  },
  methods: {
    getUrl() {
      for (let name in this.img_name) {
        this.url_list.push(
          `http://p.2217.com/tg/myyh/${this.img_name[name]}/adp_new/ccid/?fy=no`
        )
      }
      this.loadFnc1(this.url_list)
    },
    imgLoad() {
      for (let i = 0; i < this.dataJson.length; i++) {
        var _this = this
        let img = new Image()
        let id = this.dataJson[i].imgId
        let name = this.dataJson[i].urlName
        img.src =
          'https://sstatic.tonnn.com/generalpage/' + id + '/pic_small.jpg'
        img.setAttribute('crossorigin', 'anonymous')
        // if (img.complete) {
        //   let w = img.width
        //   let h = img.height
        // }
        img.onload = function (e) {
          let w = img.width
          let h = img.height
          if (w < 1000 && h < 200) {
            _this.smallImg[_this.smallImg.length] = {
              width: w,
              height: h,
              id: id,
              name: name
            }
          }
        }
      }
      console.log('this.smallImg', this.smallImg)
      return this.smallImg
    },
    async loadRes() {
      this.loadFnc(this.smallImg)
    },
    // 下载excell
    loadFnc(list) {
      let excel = '<table>'
      // console.log('list', list)
      let rowTitle =
        '<tr>' +
        '<td>序号</td>' +
        '<td>宽度</td>' +
        '<td>高度</td>' +
        '<td>图片id</td>' +
        '<td>图片url</td>' +
        '<td>注册页name</td>' +
        '<td>注册页url</td>' +
        '</tr>'
      excel += rowTitle
      let row = list.map((o, i) => {
        if (o) {
          return `<tr><td>${i + 1}</td><td>${o.width}</td><td>${
            o.height
          }</td><td>${o.id}</td><td>https://sstatic.tonnn.com/generalpage/${
            o.id
          }/pic_small.jpg</td><td>${o.name}</td><td>http://p.2217.com/tg/myyh/${
            o.name
          }/adp_new/ccid/?fy=no</td></tr>`
        } else {
          console.log('err', o)
        }
      })

      excel += row.join('')
      excel += '<table>'

      // 利用时间取名
      let date = new Date()
      var fileName =
        '小图注册页信息' +
        date.getFullYear() +
        '年' +
        (date.getMonth() + 1) +
        '月' +
        date.getDate() +
        '号' +
        date.getHours() +
        '点' +
        date.getMinutes() +
        '分'
      this.tableToExcel(excel, fileName)
    },
    loadFnc1(list) {
      let excel = '<table>'
      // console.log('list', list)
      let rowTitle = '<tr>' + '<td>序号</td>' + '<td>url</td>' + '</tr>'
      excel += rowTitle
      let row = list.map((o, i) => {
        if (o) {
          return `<tr><td>${i + 1}</td><td>${o}</td></tr>`
        } else {
          console.log('err', o)
        }
      })

      excel += row.join('')
      excel += '<table>'

      // 利用时间取名
      let date = new Date()
      var fileName =
        '小图注册页信息' +
        date.getFullYear() +
        '年' +
        (date.getMonth() + 1) +
        '月' +
        date.getDate() +
        '号' +
        date.getHours() +
        '点' +
        date.getMinutes() +
        '分'
      this.tableToExcel(excel, fileName)
    }
  }
}
</script>
<style lang='less' scoped>
body {
  iframe {
    width: 100%;
    height: 500px;
  }
}
</style>
