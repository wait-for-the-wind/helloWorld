<template>
  <div class="home">
    <el-row style="height: 309px;">
      <el-col :span="17">
        <my-swper :imglist="img_list"></my-swper>
      </el-col>
      <el-col :span="6" class="my_info">
        <!-- 个人信息 -->
        <el-card class="box-card" body-style="background: #F7F9F9;height:258px;">
          <h2>盛·迎风的名片</h2>
          <p>职业：web前端开发</p>
          <p>现居：江西省-南昌市</p>
          <p>公司：江西中至科技有限公司</p>
          <p>Email：739178270@qq.com</p>
          <p>tel：18368490621</p>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="tac">
      <el-col :span="17">
        <el-card class="box-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="博客日记" name="first">
              <el-row class="tac">
                <el-col :span="8">
                  <!-- 这是图片组件 -->
                  <my-img :data="img_data"></my-img>
                </el-col>
                <el-col :span="16">
                  <el-collapse v-model="activeName1" accordion class="news_list" @change="changeCollapse($event)">
                    <el-collapse-item :title="item.new_title" :name="index" v-for="(item, index) in news_list" :key="item.id" class="news_part">
                      <p>{{item.new_info}}</p>
                    </el-collapse-item>
                  </el-collapse>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="码农生涯" name="second">
              
            </el-tab-pane>
            <el-tab-pane label="旅游计划" name="third">我是个爱出去的人儿啊</el-tab-pane>
            <el-tab-pane label="JS&Vue" name="fourth">技术补充站</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="6" class="rank">
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>点击排行</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <my-rank :rank="click_rank"></my-rank>
        </el-card>

        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>站长推荐</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <my-rank :rank="recommend_rank"></my-rank>
        </el-card>
        <el-card class="box-card" shadow="always">
          <div slot="header" class="clearfix">
            <span>来首安静得歌曲吧</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <my-rank :rank="music_rank"></my-rank>
        </el-card>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
import rank from '@components/blog/rank.vue'
import swper from '@components/swper.vue'
import { mapMutations, mapState } from 'vuex'
import axios from 'axios'
import img from '@components/blog/img_list.vue'
export default {
  data () {
    return {
      name: 'sjy',
      obj: { name: 'sjy', age: 18 },
      list: [],
      img_width: 0,
      img_height: 0,
      activeName: 'first',
      activeName1: '1',
      // 点击排行
      click_rank: [
        {
          title: 'JS讲解',
          title_href: 'javascript:;'
        },
        {
          title: 'CSS讲解',
          title_href: 'javascript:;'
        }
      ],
      // 推荐排行
      recommend_rank: [
        {
          title: 'XXXXXX',
          title_href: 'javascript:;'
        },
        {
          title: 'YYYYYYY',
          title_href: 'javascript:;'
        }
      ],
      // 音乐推荐
      music_rank: [
        {
          title: '等你下课',
          title_href: 'javascript:;'
        },
        {
          title: '世界美好与你环环相扣',
          title_href: 'javascript:;'
        },
        {
          title: '推开世界的门',
          title_href: 'javascript:;'
        }
      ],
      // 轮播图
      img_list: [
        {
          id: 0,
          img_url: require('../assets/images/swper/1.jpg')
        },
        {
          id: 1,
          img_url: require('../assets/images/swper/2.jpg')
        },
        {
          id: 2,
          img_url: require('../assets/images/swper/3.jpg')
        },
        {
          id: 3,
          img_url: require('../assets/images/swper/4.jpg')
        },
        {
          id: 4,
          img_url: require('../assets/images/swper/5.jpg')
        }
      ],
      // 新闻列表
      news_list: [
        {
          new_title: ' 父组件如何修改子组件得dom',
          new_info: '当我点击手风琴时候，想让左侧图片得高度发生变化，但因为这是个子组件，我没办法直接获取子组件dom并加以修改，暂时先放一放',
          new_id: 1
        },
        {
          new_title: ' 我仅仅是一个“草根站长”',
          new_info: '虽然也经历了被人质疑、嘲笑和不屑。但是我始终坚信自己的选择是正确的。并把他们的这些不屑变成更强的动力，去追逐成功。网上很多说个人博客末落了，说的是第',
          new_id: 2
        },
        {
          new_title: ' 我仅仅是一个“草根站长”',
          new_info: '虽然也经历了被人质疑、嘲笑和不屑。但是我始终坚信自己的选择是正确的。并把他们的这些不屑变成更强的动力，去追逐成功。网上很多说个人博客末落了，说的是第',
          new_id: 3
        },
        {
          new_title: ' 我仅仅是一个“草根站长”',
          new_info: '虽然也经历了被人质疑、嘲笑和不屑。但是我始终坚信自己的选择是正确的。并把他们的这些不屑变成更强的动力，去追逐成功。网上很多说个人博客末落了，说的是第',
          new_id: 4
        },
        {
          new_title: ' 我仅仅是一个“草根站长”',
          new_info: '虽然也经历了被人质疑、嘲笑和不屑。但是我始终坚信自己的选择是正确的。并把他们的这些不屑变成更强的动力，去追逐成功。网上很多说个人博客末落了，说的是第',
          new_id: 5
        }
      ],
      // 图片
      img_data: [
        {
          img_title: '兴趣支撑梦想，兴趣是支撑我自己前行的动力',
          img_url: require('../assets/images/show1.jpg')
        },
        {
          img_title: '乘风破浪会有时，直挂云帆济沧海',
          img_url: require('../assets/images/show1.jpg')
        }
      ]
    }
  },
  // 状态管理器中的数据映射在计算属性中
  computed: {
    ...mapState(['count'])
  },
  mounted () {
    this.checkUndefind()
    // this.changeCollapse()
  },
  components: {
    'my-rank': rank,
    'my-swper': swper,
    'my-img': img
  },
  methods: {
    ...mapMutations(['add', 'sub', 'subN']),
    // 新闻板块
    changeCollapse(e) {
      console.log('this.$refs', this.$refs)
      var $lis = this.$refs.img_list.getElementsByTagName('li')
      if (e !== '') {
        $lis.forEach(item => {
          item.style.height = '150px'
          item.style.transition = 'all 0.3s'
        })
        // this.$refs.img_list
      } else {
        $lis.forEach(item => {
          item.style.height = '115px'
        })
      }
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    checkUndefind () {
      var undefind = true;
      // 传入一个undefind，可以避免外界把undefind值更改过
      (function IIFE (undefind) {
        var a
        if (a === undefind) {
          // 这时候使用 undefined 没有问题
        } else {
        }
      }())
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  counter-reset:sectioncounter; // 自动增加序号的这个需要写在根标签下
}
p {
  text-align: center;
  margin: 50px;
}
.box-card {
  margin-bottom: 10px;
}
.my_info {
  height: 300px;
  h2{
    // margin: 0px;
    color: #333;
    font-size: 18px;
    font-weight: 600;
  }
  p {
    margin: 25px 0;
    text-align: left;
    text-indent: 1em;
  }
}
.rank,.my_info {
  margin-left: 30px;
  .clearfix {
    text-align: left;
  }
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
    content: '';
    display: inline-block;
    background: violet;
  }
  ul li {
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
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
</style>
