<template>
  <div>
    <el-row>
      <el-col :span="15" class="lbox">
        <!-- 轮播图 -->
        <my-swperB></my-swperB>
      </el-col>
      <el-col :span="8">
        <!-- 这是图片组件 -->
        <my-img :data="img_data"></my-img>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <!-- 博客 -->
        <my-blog></my-blog>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import swperB from '@components/swperB.vue'
import blog from '@components/blog/blog_fronted.vue'
import img from '@components/blog/img_list.vue'
export default {
  data() {
    return {
      flag: false,
      img_data: [
        {
          img_title: '兴趣支撑梦想，兴趣是支撑我自己前行的动力',
          img_url: require('../../assets/images/show1.jpg')
        },
        {
          img_title: '负重前行，无所畏惧',
          img_url: require('../../assets/images/show1.jpg')
        }
      ]
    }
  },
  components: {
    'my-swperB': swperB,
    'my-blog': blog,
    'my-img': img
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
  div {
    // height: 800px;
    // background: pink;
  }
  .el-col-15 {
    width: 67%;
  }
  .el-col-8 {
    width: 1%;
    margin-left: 3px;
  }
  .lbox {
    margin-left: 26px;
  }
  
</style>
