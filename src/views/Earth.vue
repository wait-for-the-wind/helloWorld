<template>
  <div>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <router-link to='/'>其它</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      'radio': 1
    }
  }
}
</script>
<style lang="less">

</style>
