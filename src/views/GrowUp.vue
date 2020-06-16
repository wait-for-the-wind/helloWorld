<template>
  <div class="wrapper">
    <el-row class="tac">
      <el-col :span="4">
        <h5 class="empty_box"></h5>
        <el-menu :default-active="default_active" class="el-menu-vertical-demo" router>
          <el-menu-item index="/growUp/novelCoronavirus">
            <i class="el-icon-menu"></i>
            <span slot="title">中国疫情图</span>
          </el-menu-item>
          <el-menu-item index="/growUp/timeOver">
            <i class="el-icon-menu"></i>
            <span slot="title">时间流水线</span>
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
      flag: false,
      default_active: ''
    }
  },
  watch: {
    $route(to, from) {
      this.default_active = to.path
    }
  },
  mounted () {
    let route = this.$route.path
    if (route === '/growUp') this.$router.push({ 'path' : '/growUp/novelCoronavirus' })
  },
  methods: {}
}
</script>

<style>
</style>
