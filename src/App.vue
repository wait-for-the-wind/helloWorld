<template>
  <div id="app">
    <div class="app">
      <div class="wrapper">
        <div class="logo fl">
          <!-- 盛静银个人博客 -->
          <router-link to="/">**********</router-link>|
          <font>
            建于
            <time>2020 年 03 月 30 日</time>
          </font>
        </div>
        <nav class="nav fl">
          <el-menu
            :default-active="activeIndex1"
            class="el-menu-demo"
            router
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/home">网站首页</el-menu-item>
            <el-menu-item index="/tools">工具集锦</el-menu-item>
            <el-menu-item index="/blog">每日一文</el-menu-item>
            <el-menu-item index="/growUp">个人经历</el-menu-item>
            <el-menu-item index="/admin">后台</el-menu-item>
          </el-menu>
        </nav>
        <!-- 容器 -->
      </div>
    </div>
    <div class="wrapper">
      <el-breadcrumb separator="/" class="path">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <router-view />

    <footer>
      <!-- <p>站长是一位比较佛性的程序猿，故本网站不兼容IE9以下（IE9查看也会有些问题）</p> -->
      <p>
        Copyright &copy;
        <a href="www.shengjingyin.com" target="_blank">www.shengjingyin.com</a>
        <!-- 备案号：<a href="www.shengjingyin.com" target="_blank">赣ICI：text678</a> -->
      </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'app',
  data () {
    return {
      name: '21313',
      activeIndex1: '' // 动态tab切换
    }
  },
  mounted () {
    this.activeIndex1 = this.$router.currentRoute.fullPath
  },
  watch: {
    $route (to, from) {
      this.activeIndex1 = to.path === '/' ? '/home' : to.path
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
body {
  background: #999;
  .app::before {
    background: #000
      linear-gradient(
        to left,
        #4cd964,
        #5ac8fa,
        #007aff,
        #34aadc,
        #5856d6,
        #ff2d55
      );
    height: 5px;
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
  }
}
.path {
  height: 40px;
  line-height: 40px;
}
.app {
  width: 100%;
  background-color: rgb(84, 92, 100);
  height: 60px;
  line-height: 60px;
  overflow: hidden;
  margin-top: 5px;
  a {
    color: white;
  }
  .logo {
    font: 22px/56px 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    display: inline-block;
    font {
      font-size: 15px;
      color: white;
    }
  }
  .nav {
    margin-left: 380px;
  }
}
footer {
  text-align: center;
  height: 40px;
  line-height: 10px;
}
</style>
