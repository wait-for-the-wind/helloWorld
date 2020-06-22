<template>
  <div class="home">
    <el-row style="height: 309px;">
      <el-col :span="17">
        <my-swper :imglist="img_list"></my-swper>
      </el-col>
      <el-col :span="6" class="my_info">
        <!-- 个人信息 -->
        <el-card class="box-card" body-style="background: #d3d3d3;height:258px;">
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
            <el-tab-pane label="用户管理" name="first">
              <el-row class="tac">
                <el-col :span="8">
                  <ul class="lbox">
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
                <el-col :span="16">
                  <div class="rbox">313123</div>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
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
export default {
  data () {
    return {
      name: 'sjy',
      obj: { name: 'sjy', age: 18 },
      list: [],
      img_width: 0,
      img_height: 0,
      activeName: 'first',
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
      ]
    }
  },
  // 状态管理器中的数据映射在计算属性中
  computed: {
    ...mapState(['count'])
  },
  mounted () {
    this.checkUndefind()
  },
  components: {
    'my-rank': rank,
    'my-swper': swper
  },
  methods: {
    ...mapMutations(['add', 'sub', 'subN']),
    // showBigImg(event) {
    //   // console.log('event', event)
    //   var $img = event.target
    //   // console.log('$img', $img)
    //   // console.log('$img', $img.innerHtml)
    //   if ($img.tagName.indexOf('IMG') > -1) {
    //     $img.style.transform = 'scale(1.2)'
    //   }
    // },
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
}
p {
  text-align: center;
  margin: 50px;
}
.lbox {
  width: 100%;
  li {
    height: 100px;
    width: 275px;
    overflow: hidden;
    position: relative;
    margin-bottom: 15px;
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
.box-card {
  margin-bottom: 10px;
}
.my_info {
  height: 300px;
  background: pink;
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
</style>
