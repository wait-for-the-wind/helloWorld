<template>
  <div class="about wrapper">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu :default-active="default_active" class="el-menu-vertical-demo" router>
          <el-menu-item index="/tools/goodWeb">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">导航四</span>
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
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">导航四</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: 1
    }
  }
}
</script>
<style lang="less" scoped>
</style>
