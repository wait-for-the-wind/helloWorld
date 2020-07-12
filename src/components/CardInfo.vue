<template>
  <div @click="transmitFunc">
      <slot :data="Language"><button>123</button></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      Language: ['javascript', 'go', 'c++', 'python', 'c']
    }
  },
  props: ['data'],
  mounted() {},
  methods: {
    transmitFunc() {
      var childrenData = {
        name: 'chrildren'
      }
      this.$emit('transimitFunc', childrenData)
    }
  }
}
</script>
<style lang='less' scoped>
  // div{ position: absolute;}
</style>
