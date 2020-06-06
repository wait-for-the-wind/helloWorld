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
          <td><a href="">移除</a></td>
        </tr>
      </tbody>
    </table>
    <hr>
    <button @click="addCooike">添加cooike</button>
    <button @click="remove">删除cooike</button>
    <span class="white--text">Lorem ipsum</span>
    <!-- <button @click="sort">排序</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      name: 'sjy',
      obj: { name: 'sjy', age: 18 },
      list: []
    }
  },
  // 状态管理器中的数据映射在计算属性中
  computed: {
    ...mapState(['count'])
  },
  mounted() {
    this.login()
    this.sum()
  },
  methods: {
    ...mapMutations(['add', 'sub', 'subN']),
    addCooike() {
      document.cookie = 'name="shengjingyin"'
      alert('添加了')
      setTimeout(function () {
        window.location.reload()
      }, 0)
    },
    remove() {
      document.cookie = 'name="";expires=-1'
      alert('删除了')
      setTimeout(function () {
        window.location.reload()
      }, 0)
    },
    sum() {
      let a = 3
      console.log(a)
    },
    addN(n) {
      this.$store.commit('addN', n)
    },
    func1() {
      this.$store.commit('add')
    },
    // 获取图片尺寸
    getImageInfo(url, callback) {
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
    login() {
      var params = {
        name: 'shengjingyin123'
      }
      this.$api.login(params).then(res => {
        if (res.success) {
          console.log('res.', res.data.projects)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .home{
    width: 1200px;
    margin: 0 auto;
  }
  p {
    text-align: center;
    margin: 50px;
  }
</style>
