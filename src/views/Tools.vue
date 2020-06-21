<template>
  <div class="about wrapper">
    <el-row class="tac">
      <el-col :span="4">
        <h5 class="empty_box"></h5>
        <el-menu :default-active="default_active" class="el-menu-vertical-demo" router>
          <el-menu-item index="/tools/goodWeb">
            <i class="el-icon-menu"></i>
            <span slot="title">网站</span>
          </el-menu-item>
          <el-menu-item index="/tools/goodTool">
            <i class="el-icon-menu"></i>
            <span slot="title">工具</span>
          </el-menu-item>
          <el-menu-item index="/tools/fronted">
            <i class="el-icon-menu"></i>
            <span slot="title">前端</span>
          </el-menu-item>
          <el-menu-item index="/tools/backend">
            <i class="el-icon-menu"></i>
            <span slot="title">后端</span>
          </el-menu-item>
          <el-menu-item index="/tools/data">
            <i class="el-icon-menu"></i>
            <span slot="title">数据库</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: 1,
      default_active: ''
    }
  },
  mounted() {
    let route = this.$route.path
    if (route === '/tools') this.$router.push({ 'path' : '/tools/goodWeb' })
  },
  watch: {
    $route(to, from) {
      this.default_active = to.path
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
  .empty_box {
    height: 10px;
  }
</style>
