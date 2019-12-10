<template>
  <div class="home">
    <header>

    </header>
    <router-link to='/about'>关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
  .home {
    header {
      height: 66px;
      width: 100%;
      background-color: pink;
    }
  }
</style>
