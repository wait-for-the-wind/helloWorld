<template>
  <el-container>
    <el-button type="primary" plain>展示</el-button>
    <el-button type="primary" plain>展示2</el-button>
    <i class="el-icon-share"></i>
    <el-link type="info" href="http://www.baidu.com" target="_blank">baidu.com</el-link>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      str: 'qwe'
    }
  },
  mounted() {
    let son = new this.Father('aaaa')
    console.log('son', son)
  },
  methods: {
    Father(name) {
      this.name = name
    }
  }
}
</script>
<style lang='less' scoped>
body {
}
</style>
