<template>
  <div class="card">
    <el-row class="tac">
      <el-col :span="8">
        <!-- 这是图片组件 -->
        <ul class="rbox" ref="img_list">
          <li v-for="(item, index) in card_data.img_data" :key="index">
            <a href>
              <img :src="item.img_url" alt />
            </a>
            <span>{{item.img_title}}</span>
          </li>
        </ul>
      </el-col>
      <el-col :span="16">
        <el-collapse v-model="activeName1" accordion class="news_list" @change="changeCollapse($event)">
          <el-collapse-item :title="item.new_title" :name="index" v-for="(item, index) in card_data.news_list" :key="item.id" class="news_part">
            <p>{{item.new_info}}</p>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      activeName1: '1'
    }
  },
  props: ['card_data'],
  mounted() {
  },
  methods: {
    // 新闻板块
    changeCollapse(e) {
      var $lis = this.$refs.img_list.getElementsByTagName('li')
      if (e !== '') {
        $lis.forEach(item => {
          item.style.height = '150px'
          item.style.transition = 'all 0.35s'
        })
        // this.$refs.img_list
      } else {
        $lis.forEach(item => {
          item.style.height = '115px'
        })
      }
    }
  }
}
</script>
<style lang='less' scoped>
.news_list {
  text-align: left;
  width: 500px;
  margin-left: 20px;
  .news_part {
    min-height: 32px;
    a:before {
      counter-increment:sectioncounter;
      content: counter(sectioncounter) " ";
      line-height: 20px;
      width: 20px;
      background: black;
      color: #fff;
      text-align: center;
      display: inline-block;
      font-weight: 500;
    }
    a {
      color: black;
      font-weight: 700;
      line-height: 24px;
      font-size: 14px;
    }
    p {
      margin: 0;
      text-align: left;
      text-indent: 1em;
      // 文字展示两行，多余省略号
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      height: 48px;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
.rbox {
  width: 100%;
  // margin-right: 199px;
  float: right;
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
        transition: all 1s;
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
