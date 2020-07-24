<template>
  <div class="root">
    32312313
    <button>展示</button>
    <button>展示</button>
  </div>
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
    console.log('str.cha', this.str.charAt(0))
    console.log('this.hy(1, 2)', this.hy(2, 2))
  },
  methods: {
    hy(a, b) {
      function sq(x) {
        return x * x
      }
      console.log('sq(a)', sq(a))
      console.log('sq(b)', sq(b))
      return Math.pow(sq(a), sq(b))
    }
  }
}
</script>
<style lang='less' scoped>
body {
}
</style>
