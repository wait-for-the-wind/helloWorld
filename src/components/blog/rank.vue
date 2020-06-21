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
  data() {
    return {
      flag: false
    }
  },
  props: ['rank'],
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
  body{
    .rank {
      margin-left: 30px;
      .el-card__header {
        padding: 18px 20px;
        position: relative;
      }
      .el-card__header:after {
        position: absolute;
        width: 100px;
        height: 2px;
        bottom: 0px;
        left: 0px;
        content: "";
        display: inline-block;
        background: violet;
      }
      ul li{
        height: 30px;
        line-height: 30px;
        margin-bottom: 10px;
        i {
          width: 16px;
          height: 16px;
          text-align: center;
          line-height: 16px;
          color: white;
          background: #FF6600;
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
