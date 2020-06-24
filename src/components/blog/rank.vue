<template>
  <div>
    <ul>
      <li v-for="(item, index) in rank" :key="index">
        <i>{{index + 1}}</i>
        <a :href="item.title_href">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  props: ['rank'],
  mounted () { },
  methods: {}
}
</script>
<style lang='less' scoped>
body {
  .rank {
    margin-left: 30px;
    ul li {
      height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
      text-align: left;
      i {
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        color: white;
        background: #ff6600;
        display: inline-block;
        margin-right: 10px;
      }
      a {
        max-width: 230px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: -29%;
      }
    }
  }
}
</style>
