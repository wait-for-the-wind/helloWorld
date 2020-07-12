<template>
  <div class="home">
    <el-row style="height: 309px;">
      <el-col :span="17">
        <my-swper :imglist="img_list"></my-swper>
      </el-col>
      <el-col :span="6" class="my_info">
        <!-- 个人信息 -->
        <el-card class="box-card" body-style="background: #F7F9F9;height:258px;">
          <h2>盛·毅的名片</h2>
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
            <el-tab-pane :label="item.label" :name="item.name" v-for="item in card_list" :key="item.name">
              <!-- 卡片内容组件，切换不同的卡片时，传递不同的内容过去 -->
              <my-card :card_data="card_data"></my-card>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="6" class="rank">
        <!-- 这三个card也可以简化为一个 -->
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
import card from '@components/home_card.vue'
import { mapMutations, mapState } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      activeName: 'first',
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
          title: '从入门到吃土',
          title_href: 'javascript:;'
        },
        {
          title: '从吃土到绝地重生',
          title_href: 'javascript:;'
        },
        {
          title: '从吃土到绝地重生',
          title_href: 'javascript:;'
        },
        {
          title: '你会重新站起来的，加油',
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
      card_list: [
        {
          label: '博客日记',
          name: 'first'
        },
        {
          label: '码农生涯',
          name: 'second'
        },
        {
          label: '旅游计划',
          name: 'third'
        },
        {
          label: 'JS&Vue',
          name: 'fourth'
        }
      ],
      // 获取到的所有展示的数据
      card_info_list: [
        // 1
        {
          // 新闻列表
          news_list: [
            {
              new_title: ' 父组件如何修改子组件得dom',
              new_info: '当我点击手风琴时候，想让左侧图片得高度发生变化，但因为这是个子组件，我没办法直接获取子组件dom并加以修改，答：可以把这两个组件同时做成一个组件，这样就不存在子组件的问题了',
              new_id: 1
            },
            {
              new_title: ' 博客详情页怎么处理',
              new_info: '有段落，有图片，怎么随心插入图片，文字分段',
              new_id: 2
            },
            {
              new_title: ' 后台如何搭建',
              new_info: '选用 node.js 搭建后台',
              new_id: 3
            },
            {
              new_title: ' 深化交互效果',
              new_info: '简单的css可不能打动面试官，需要把vuex加入进来 axios加入进来 mock.js加入进来',
              new_id: 4
            },
            {
              new_title: ' 每个后台界面应该有编辑、删除、新增操作，增强交互性',
              new_info: '新增是否可以采用session',
              new_id: 5
            }
          ],
          // 图片
          img_data: [
            {
              img_title: '兴趣支撑梦想，兴趣是支撑我自己前行的动力',
              img_url: require('@images/swiperB_2.png')
            },
            {
              img_title: '乘风破浪会有时，直挂云帆济沧海',
              img_url: require('../assets/images/show1.jpg')
            }
          ]
        },
        // 2
        {
          // 新闻列表
          news_list: [
            {
              new_title: ' 缘起于2020-07-27的那本JAVA从入门到入土',
              new_info: '当我买了那本书后，我还不知道我得生活已经发生了惊天巨变',
              new_id: 1
            },
            {
              new_title: ' 应该还有评论、博客页面展示详情页面',
              new_info: '有段落，有图片，怎么随心插入图片，文字分段',
              new_id: 2
            },
            {
              new_title: ' CSS-flex',
              new_info: '选用 node.js 搭建后台',
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
              img_url: require('@images/swiperB_3.png')
            },
            {
              img_title: '乘风破浪会有时，直挂云帆济沧海',
              img_url: require('../assets/images/show1.jpg')
            }
          ]
        },
        // 3
        {
          // 新闻列表
          news_list: [
            {
              new_title: ' 父组件如何修改子组件得dom',
              new_info: '当我点击手风琴时候，想让左侧图片得高度发生变化，但因为这是个子组件，我没办法直接获取子组件dom并加以修改，暂时先放一放',
              new_id: 1
            },
            {
              new_title: ' 博客详情页怎么处理',
              new_info: '有段落，有图片，怎么随心插入图片，文字分段',
              new_id: 2
            },
            {
              new_title: ' 后台如何搭建',
              new_info: '选用 node.js 搭建后台',
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
              img_url: require('@images/swiperB_2.png')
            },
            {
              img_title: '乘风破浪会有时，直挂云帆济沧海',
              img_url: require('../assets/images/show1.jpg')
            }
          ]
        },
        // 4
        {
          // 新闻列表
          news_list: [
            {
              new_title: ' 父组件如何修改子组件得dom',
              new_info: '当我点击手风琴时候，想让左侧图片得高度发生变化，但因为这是个子组件，我没办法直接获取子组件dom并加以修改，暂时先放一放',
              new_id: 1
            },
            {
              new_title: ' 博客详情页怎么处理',
              new_info: '有段落，有图片，怎么随心插入图片，文字分段',
              new_id: 2
            },
            {
              new_title: ' 后台如何搭建',
              new_info: '选用 node.js 搭建后台',
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
              img_url: require('@images/swiperB_2.png')
            },
            {
              img_title: '乘风破浪会有时，直挂云帆济沧海',
              img_url: require('../assets/images/show1.jpg')
            }
          ]
        }
      ],
      // 传递给card的数据
      card_data: {
      }
    }
  },
  // 状态管理器中的数据映射在计算属性中
  computed: {
    ...mapState(['count'])
  },
  mounted () {
    var self = this
    this.checkUndefind()
    this.card_data = this.card_info_list[0]
    console.log('this.card_data', this.card_data)
  },
  components: {
    'my-rank': rank,
    'my-swper': swper,
    'my-card': card
  },
  methods: {
    ...mapMutations(['add', 'sub', 'subN']),
    handleClick (tab, event) {
      var blogArr = ['博客日记', '码农生涯', '旅游计划', 'JS&Vue']
      // bad
      // for (var i = 0; i < blog_arr.length; i++) {
      //   switch (tab.label) {
      //     case blog_arr[i]:
      //       this.card_data = this.card_info_list[i]
      //       break
      //   }
      // }
      // good
      blogArr.some((item, index) => {
        if (item === tab.label) this.card_data = this.card_info_list[index]
      })
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
</style>
