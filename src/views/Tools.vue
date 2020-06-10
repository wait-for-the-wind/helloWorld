<template>
  <div class="about wrapper">
    <el-row class="tac">
      <el-col :span="4">
        <h5 class="empty_box"></h5>
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item index="/tools/goodWeb">
            <i class="el-icon-menu"></i>
            <span slot="title">常用网站</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
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
  data () {
    return {
      data: 1
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
