<template>
  <div class="wrapper clearfix">
    <div class="lbox fl" ref="console">

    </div>
    <div class="rbox fl">
      <h1>文章分类</h1>
      <h2>变量类型</h2>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
    // console.log('this.$refs', this.$refs.console) // ref 此时不能查找
  },
  mounted () {
    this.$refs.console.style.background = 'blue'

    console.log('typeOf(this.$refs)', typeof (this.$refs.console))
    console.log('this.$refs', this.$refs.console)

    console.log([5, 4] == '5,4', ['5'] == 5) //eslint-disable-line
    console.log({name:'10'}=='[object Object]') //eslint-disable-line
    console.log({name:'10'}.ToPrimitive()) //eslint-disable-line
  }
}
</script>
<style lang="less" scoped>
  .lbox{background-color: pink;height: 100px;}
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
