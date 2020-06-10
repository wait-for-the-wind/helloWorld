<template>
  <div class="home">
    <p>当前的count值为：{{$store.state.testVuex.count}}</p>
    <button @click="func1">+ 1</button>
    <button @click="addN(3)">+ N</button>
    <button @click="sub">- 1</button>
    <button @click="subN(5)">- N</button>
    <h5>{{count}}</h5>
    <hr>
    <table>
      <thead>
        <tr>
          <th>事件</th>
          <th>时间</th>
          <th>编辑</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.time}}</td>
          <td>
            <a href>移除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <img
      src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg"
      alt
    />
    <span>这张图片得尺寸是：{{img_width}} * {{img_height}}</span>
    <button @click="addCooike">添加cooike</button>
    <button @click="remove">删除cooike</button>
    <input type="number" name id />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      name: 'sjy',
      obj: { name: 'sjy', age: 18 },
      list: [],
      img_width: 0,
      img_height: 0
    }
  },
  // 状态管理器中的数据映射在计算属性中
  computed: {
    ...mapState(['count'])
  },
  mounted () {
    var self = this
    this.test()
    // this.axiosAll()
    this.sum()
    this.getImageInfo('http://static.tonnn.com/generalpage/4868/pic_small.jpg?v=4', (width, height) => {
      // 1、箭头函数内部得 this 指向与外部得 this 指向相同
      this.img_width = width
      self.img_height = height
    })
    this.checkUndefind()
  },
  methods: {
    ...mapMutations(['add', 'sub', 'subN']),
    test_let() {
      var foo = 2
      if (foo) {
        let bar = foo * 2
      }
    },
    test_try() {
      try {
        undefined()
      } catch (err) {
        // console.log('err', err)
      }
    },
    addCooike () {
      document.cookie = 'name="shengjingyin"'
      alert('添加了')
      setTimeout(function () {
      }, 0)
    },
    remove () {
      document.cookie = 'name="";expires=-1'
      alert('删除了')
      setTimeout(function () {
      }, 0)
      console.log('document.cookie', document.cookie)
    },
    sum () {
      let a = 3
    },
    addN (n) {
      this.$store.commit('addN', n)
    },
    func1 () {
      this.$store.commit('add')
    },
    // 获取图片尺寸
    getImageInfo (url, callback) {
      var img = new Image()
      img.src = url
      if (img.complete) {
        callback(img.width, img.height)
      } else {
        img.onload = function () {
          callback(img.width, img.height)
        }
      }
    },
    login () {
      this.$api.login({
        'name': 'shengjingyin'
      })
        .then(res => {
          console.log('login', res)
        })
        .catch(err => {
          console.log('err', err)
        })
    },
    test() {
      this.$api.getHotGame({ 'name': 'shengjingy' })
        .then(res => {
          console.log('test_status_code', res)
        })
    },
    axiosAll() {
      axios.all([this.login(), this.test()])
        .then(axios.spread(function(allSearchTopic, allSearchs) {
        }))
        .catch(err => {
          console.log('err', err)
        })
    },
    checkUndefind() {
      var undefind = true;
      // 传入一个undefind，可以避免外界把undefind值更改过
      (function IIFE(undefind) {
        var a
        if (a === undefind) {
          // 这时候使用 undefined 没有问题
        } else {
        }
      }())
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
}
p {
  text-align: center;
  margin: 50px;
}
</style>
