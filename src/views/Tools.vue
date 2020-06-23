<template>
  <div class="about wrapper">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu :default-active="default_active" class="el-menu-vertical-demo" router>
          <el-menu-item index="/tools/goodWeb">
            <i class="el-icon-menu"></i>
            <span slot="title">网站</span>
          </el-menu-item>
          <el-menu-item index="/tools/goodTool">
            <i class="el-icon-menu"></i>
            <span slot="title">工具</span>
          </el-menu-item>
          <!-- 前端 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">前端</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/tools/fronted">HTML</el-menu-item>
              <el-menu-item index="1-3">CSS</el-menu-item>
              <el-menu-item index="1-3">JavaScript</el-menu-item>
              <el-menu-item index="1-3">Vue</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 后端 -->
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
</style>
