<template>
  <div class="wrapper clearfix">
    <div class="lbox fl" ref="console">
      <input type="text" name="user" id="user" ref="name" v-model="name" @[event]="input">
      <div class="text" ref="text">{{name}}</div>
      <p>original-message: {{message}}</p>
      <p>reveser-message: {{reveserMessage}}</p>
    </div>
    <div class="rbox fl annimate">
      <h1>文章分类</h1>
      <h2>变量类型</h2>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      event: 'keyup',
      message: '我是盛静银aaaaaa'
    }
  },
  created () {
    // console.log('this.$refs', this.$refs.console) // ref 此时不能查找
  },
  mounted () {
    // this.$refs.console.style.background = 'blue'
    this.name = this.$refs.name.value
  },
  methods: {
    input (e) {
      console.log('e', e)
      e.preventDefault()
      if (e.keyCode == 13) { // eslint-disable-line
        var confirm = window.confirm('你按了回车键')
        if (confirm) {
          this.$refs.console.style.background = 'red'
        }
      }
    }
  },
  computed: {
    reveserMessage() {
      console.log(this.message.split(''))

      return this.message.split('').reverse().join('')
    }
  }
}
</script>
<style lang="less" scoped>
  .lbox{background-color: pink;height: 100px;
    .text {
      color: #fff;
    }
  }
  .rbox{
    box-shadow: 3px 3px 10px #999;
    h1 {
      text-align: left;
      text-indent: 1em;
      font-size: 18px;
    }
    h2 {
      text-align: left;
      text-indent: 2em;
      font-size: 16px;
      cursor: pointer;
    }
  }
</style>
