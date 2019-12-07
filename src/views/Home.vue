<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-if="indexFind(components, 'andy') >= 0">
      {{components.indexOf(18)}}
      66666666666啊老哥
    </div>
    <router-link to='/about'>关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      components: [
        { name: 'andy', age: 18, sexl: 'man' },
        { name: 'ui', age: 546, sexl: 'trt' },
        { name: 'hgfh', age: 67, sexl: 'gd' },
        { name: 'wrewr', age: 8768, sexl: 'ytu' },
        { name: 'gdfg', age: 5345, sexl: 'gfg' }
      ]
    }
  },
  mounted () {
    this.index()
    this.promise()
  },
  methods: {
    indexFind (str, findV) {
      return JSON.stringify(str).indexOf(findV)
    },
    index () {
      console.log(JSON.stringify(this.components).indexOf('andy'))
      console.log('--------------------')
    },
    promise () {
      Promise.all([
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('resolve1')
          }, 1000)
        }),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('lve2')
          }, 2000)
        })
      ]).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
