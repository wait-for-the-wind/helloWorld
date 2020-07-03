<template>
  <div class="about wrapper">
    <el-row class="tac">
      <el-col :span="4">
        <!-- <h5 class="empty_box"></h5> -->
        <el-menu :default-active="default_active" class="el-menu-vertical-demo" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页管理</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title"></template> -->
              <el-menu-item index="1-3">点击排行</el-menu-item>
              <el-menu-item index="1-3">站长推荐</el-menu-item>
              <el-menu-item index="1-3">歌曲推荐</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-link"></i>
              <span slot="title">工具管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/tool">添加工具</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/admin/blog">
            <i class="el-icon-edit"></i>
            <span slot="title">博客管理</span>
          </el-menu-item>
          <el-menu-item index="/admin/growUp">
            <i class="el-icon-loading"></i>
            <span slot="title">经历管理</span>
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
  }
}
</script>
<style lang="less" scoped>
div {
  // background: pink;
}
</style>
