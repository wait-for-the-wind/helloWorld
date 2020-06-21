<template>
  <div class="home">
    <el-row class="tac">
      <el-col :span="16">
        <el-card class="box-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">

              <el-row class="tac">
                <el-col :span="8">
                  <ul class="lbox">
                    <li>
                      <a href=""><img src="@images/show1.jpg" alt=""></a>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="16">
                  <div class="rbox">
                    313123
                  </div>
                </el-col>
              </el-row>

            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="8">
        123123
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
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
      activeName: 'first'
    }
  },
  // 状态管理器中的数据映射在计算属性中
  computed: {
    ...mapState(['count'])
  },
  mounted () {
    this.checkUndefind()
  },
  methods: {
    ...mapMutations(['add', 'sub', 'subN']),
    handleClick(tab, event) {
      console.log(tab, event)
    },
    checkUndefind() {
      var undefind = true;
      // 传入一个undefind，可以避免外界把undefind值更改过
      (function IIFE(undefind) {
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
    a {
      display: block;
      position: absolute;
      transform: translate(-50%);
      img {
        // width: 50%;
        transition: all 1s;
        opacity: .7;
        display: block;
      }
      img:hover {
        transform: scale(1.2);
        opacity: 1;
      }
    }
  }
}
</style>
