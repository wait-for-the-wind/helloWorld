<template>
  <div class="root">
    <el-row class="tac">
      <el-col :span="4">
        <my-toolCard :toolData="data"></my-toolCard>
      </el-col>
    </el-row>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="24"
      layout="total, prev, pager, next"
      :total="data.length"
    ></el-pagination>
  </div>
</template>
<script>
import toolCard from '@components/toolCard.vue'
export default {
  data () {
    return {
      flag: false,
      currentPage1: 1,
      data: [
        {
          web_url: 'https://c.runoob.com/compile/5577',
          img_src: 'https://c.runoob.com/wp-content/uploads/2019/05/typescript.png',
          title: 'TS 在线工具',
          info: '在线编译、运行 TS 代码'
        }
      ]
    }
  },
  components: {
    'my-toolCard': toolCard
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="less" scoped>
div.root {
  height: 700px;
  margin-top: 10px;
  ul.tool_list {
    width: 999px;
    .tool_part {
      width: 293px;
      float: left;
      background: WhiteSmoke;
      border-radius: 5px;
      padding: 5px;
      margin: 15px;
      box-shadow: 0px 5px 15px Gainsboro;
      transition: all 0.3s;
      img {
        width: 48px;
        height: 48px;
        float: left;
      }
      aside {
        float: left;
        margin-left: 10px;
        a {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #64854c;
          font-size: 16px;
          text-align: left;
        }
        p {
          font-weight: bold;
          color: #666;
          font-size: 14px;
          line-height: 28px;
          height: 28px;
        }
      }
    }
    .tool_part:hover {
      // margin-top: 1px;
      // overflow: hidden;
    }
  }
}
</style>
