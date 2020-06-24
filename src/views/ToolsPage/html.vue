<template>
  <div>
    <el-rpw>
      <el-col :span="16">
        <!-- 轮播图 -->
        <my-swperB></my-swperB>
      </el-col>
      <el-col :span="8">
        <!-- 这是图片组件 -->
        <ul class="lbox" ref="img_list">
          <li>
            <a href>
              <img src="@images/show1.jpg" alt />
            </a>
            <span>兴趣支撑梦想，兴趣是支撑我自己前行的动力</span>
          </li>
          <li>
            <a href>
              <img src="@images/show1.jpg" alt />
            </a>
            <span>忙碌是自由活着的一种底气</span>
          </li>
        </ul>
      </el-col>
    </el-rpw>
    <el-row>
      <el-col :span="24" style="background:pink;">
        <!-- 博客 -->
        <my-blog></my-blog>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import swperB from '@components/swperB.vue'
import blog from '@components/blog/blog_fronted.vue'
export default {
  data() {
    return {
      flag: false
    }
  },
  components: {
    'my-swperB': swperB,
    'my-blog': blog
  }
}
</script>
<style lang="less" scoped>
  div {
    // height: 800px;
    // background: pink;
  }
  .lbox {
  width: 100%;
  li {
    // 正常情况 115 合适 展开时候 150合适
    height: 115px;
    width: 275px;
    overflow: hidden;
    position: relative;
    margin-bottom: 5px;
    a {
      display: block;
      // position: absolute;
      // transform: translate(-50%);
      img {
        width: 275px;
        transition: all 0.5s;
        opacity: 0.7;
        filter: blur(2px);
        // filter: grayscale(0.5);
        display: block;
      }
      img:hover {
        transform: scale(1.2);
        filter: blur(0px);
        opacity: 1;
      }
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 195px;
      height: 44px;
      transform: translate(-50%, -50%);
      display: block;
      color: #ff0000;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
