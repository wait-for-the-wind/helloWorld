<template>
  <div id="app">
    <div class="app">
      <div class="wrapper">
        <div class="logo fl">
          <!-- 盛静银个人博客 -->
          <router-link to='/'>**********</router-link> | <font>建于<time>2020年03月30日</time></font>
        </div>
        <nav class="nav fl">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            router
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/home">网站首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title">实验室</template>
              <el-menu-item index="/about">HTML</el-menu-item>
              <el-menu-item index="/earth">HTML5</el-menu-item>
              <el-menu-item index="2-3">CSS</el-menu-item>
              <el-menu-item index="2-4">CSS3</el-menu-item>
              <el-submenu index="2-5">
                <template slot="title">javascript</template>
                <el-menu-item index="dry_container">原生</el-menu-item>
                <el-menu-item index="2-5-2">ECMA5</el-menu-item>
                <el-menu-item index="2-5-3">ECMA6</el-menu-item>
              </el-submenu>
              <el-menu-item index="jquery">JQuery</el-menu-item>
            </el-submenu>
            <el-menu-item index="/tools">工具集锦</el-menu-item>
            <el-menu-item index="4"><a href="###">每日一文</a></el-menu-item>
            <el-menu-item index="5"><a href="###">成长历程</a></el-menu-item>
          </el-menu>
        </nav>
      </div>
    </div>

    <!-- 容器 -->
    <router-view/>

    <footer>
      <!-- <p>站长是一位比较佛性的程序猿，故本网站不兼容IE9以下（IE9查看也会有些问题）</p> -->
      <p>Copyright &copy; <a href="www.shengjingyin.com" target="_blank">www.shengjingyin.com</a> 备案号：<a href="www.shengjingyin.com" target="_blank">赣ICI：text678</a></p>
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
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted () {
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
body {background: #999;}
.app {
  width: 100%;
  background-color: rgb(84, 92, 100);
  height: 60px;
  line-height: 60px;
  overflow: hidden;
  a {
    color: white;
  }
  .logo{
    font:  22px/56px "Microsoft YaHei", Arial, Helvetica, sans-serif;display: inline-block;
    font {font-size: 15px;color: white;}
  }
  .nav {
    margin-left: 150px;
  }
}
footer {text-align: center;}
</style>
