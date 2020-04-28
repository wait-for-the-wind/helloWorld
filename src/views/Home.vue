<template>
  <div>
    <div class="home">
      <div class="wrapper">
        <!-- 左边 -->
        <div class="lbox fl">
          <el-row class="showImg">
            <el-col :span="12">
              <div class="block fl">
                <el-carousel height="240px">
                  <el-carousel-item v-for="item in imgList" :key="item.id">
                    <el-row>
                      <el-col :span="12"><img :src="item.idView" alt=""></el-col>
                    </el-row>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>
            <el-col :span="6" class="headline">
              <ul>
                <li>
                  <a href="###">
                    <img src="../assets/images/timg.jpg" alt=""><span>个人博客，属于我的小世界!</span>
                  </a>
                </li>
                <li>
                  <a href="###">
                    <img src="../assets/images/timg2.jpg" alt=""><span>个人博客，属于我的小世界~</span>
                  </a>
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
        <!-- 右边 -->
        <div class="rbox fr">
          <div class="card">
            <h3>站长名片</h3>
            <p>职业：web前端开发</p>
            <p>现居：江西省南昌市</p>
            <p>工作：就职****企业</p>
            <p>Email：739178270@qq.com</p>
            <ul>
              <li><a href="#"><img src="../assets/images/message.png" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      name: '21313',
      activeIndex: '1',
      activeIndex2: '1',
      imgList: [
        { id: 0, idView: require('../assets/images/timg.jpg') },
        { id: 1, idView: require('../assets/images/timg1.jpg') },
        { id: 2, idView: require('../assets/images/timg2.jpg') }
      ],
      showImg: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      ]
    }
  },
  mounted () {
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  height: 1000px;
  .lbox{
    width: 75%;
    .showImg {
      margin-top: 20px;
      .block {
        height: 240px;
        width: 600px;
        .el-carousel__item h3 {
          color: #475669;
          font-size: 14px;
          opacity: 0.75;
          line-height: 240px;
          margin: 0;
        }
      }
      // 两篇独立文档
      .headline {
        margin-left: 170px;
        ul {
          text-align: center;
          width: 280px;
          li {
            position: relative;
            overflow: hidden;
            img {
              width: 100%;
              height: 110px;
              opacity: 0.7;
              transition: all 0.5s;
            }
            span {
              position: absolute;
              color: white;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
          li:nth-child(1) {
            margin-bottom: 20px;
          }
          li:hover img {
            transform: scale(1.1);
            opacity: 1;
          }
        }
      }
    }
  }
  .rbox{
    width: 23.5%;
    .card {
      margin-top: 20px;
      background: rgba(42,42,42,1);
      color: rgba(255, 255, 255, 0.5);
      height: 240px;
      box-sizing: border-box;
      padding: 25px 15px 15px;
      h3 {
        font-size: 22px;
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 5px;
      }
      ul {
        margin-top: 25px;
        li img {
          width: 30px;
        }
      }
    }
  }
}
</style>
