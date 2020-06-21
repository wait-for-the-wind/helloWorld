<template>
  <div class="cards_list">
    <div class="cards" v-for="(item, index) in card_data" :key="item.list_number">
      <section class="card">
        <header>
          <div class="header_number"><span>{{index + 1}}</span></div>
          <h2><span class="title_date">{{item.title_date}}</span><span class="title_sub">{{item.sub_title}}</span></h2>
        </header>
        <article class="card_article">
          <p @mousemove="showDetail($event)">{{item.content}}</p>
        </article>
      </section>
      <span class="ico1"></span>
      <i class="ico2"></i>
    </div>
  </div>
</template>
<script>
import cardInfo from '@components/CardInfo.vue'
export default {
  data() {
    return {
      flag: false,
      detail: {
        $x: Number,
        $y: Number,
        $text: String,
        info_flag: true
      }
    }
  },
  props: ['card_data'],
  mounted() {
    console.log('card_data', this.card_data)
  },
  methods: {
    showDetail(e) {
      this.detail.$x = e.clientX
      this.detail.$y = e.clientY
      this.detail.$text = e.toElement.innerText
      // this.$emit('showContentDetail', this.detail)
    },
    parentFunc(data) {
      console.log('data', data)
    }
  },
  components: {
    'my-cardInfo': cardInfo
  }
}
</script>
<style lang="less" scoped>
  body{
    .cards_list{
      display: flex;
      flex-direction: column;
      height: 720px;
      overflow-y: scroll;
      padding: 0 30px;
      .cards{
        position: relative;
        .card{
          width: 350px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
          header{
            display: flex;
            padding: 10px;
            box-sizing: border-box;
            background: rgb(240, 240, 42);
            color: white;
            .header_number {
              align-items: center;
              justify-content: center;
              margin: 0 20px;
              padding: 6px 14px;
              font-size: 1.4rem;
              background: rgb(202, 202, 36);
            }
            h2 {
              flex-direction: column;
              .title_date {
                display: flex;
                // margin-left: 10px;
                font-size: 1rem;
                font-weight: bold;
              }
              .title_sub {
                padding-top: 6px;
                font-size: 1.2rem;
                text-align: left;
                display: block;
              }
            }
          }
          .card_article{
            width: 100%;
            height: 65%;
            background: #fff;
            border: 1px solid rgba(200,200,200,0.5);
            border-top: none;
            padding: 9px;
            box-sizing: border-box;
            text-align: left;
            text-indent: 2em;
            cursor: pointer;
            overflow: hidden;
            p {
              // display: block;
              overflow:hidden;
              text-overflow:ellipsis;
              display:-webkit-box;
              -webkit-line-clamp:5;    /*定义的数字为显示的行数*/
              -webkit-box-orient:vertical;
              color: #999;
            }
          }
        }
        .card_info {
          // display: none;
          position: absolute;
        }
        span.ico1 {
          width: 10px;
          height: 10px;
          border-radius: 10px;
          background-color: #bdbdbd;
          box-shadow: 0 0 2px 6px #fff;
          display: block;
          position: absolute;
          left: 50%;
          top: 35px;
          transform: translate(-50%, -50%);
        }
        i.ico2 {
          display: block;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 10px 0 10px 10px;
          border-color: transparent transparent transparent #134857;
          top: 25px;
          left: 350px;
          position: absolute;
        }
      }
      .cards:nth-child(even) {
          flex-direction: row-reverse;
          display: flex;
          i {
            display: block;
            border-style: solid;
            border-width: 10px 10px 10px 0;
            border-color: transparent #134857 transparent transparent;
            left: 570px;
          }
      }
      .cards:nth-child(4n + 1){
        header {
          background: #009ad6;
          .header_number {
            background: #145b7d;
          }
        }
        i.ico2{
          border-color: transparent transparent transparent #009ad6;
        }
      }
      .cards:nth-child(4n + 2){
        header {
          background: #faa755;
          .header_number {
            background: #f58220;
          }
        }
        i.ico2{
          border-color: transparent #faa755 transparent transparent;
        }
      }
      .cards:nth-child(4n + 3){
        header {
          background: #EF4136;
          .header_number {
            background: #ed1941;
          }
        }
        i.ico2{
          border-color: transparent transparent transparent #EF4136;
        }
      }
      .cards:nth-child(4n + 4){
        header {
          background: #b2d235;
          .header_number {
            background: #7fb80e;
          }
        }
        i.ico2{
          border-color: transparent #b2d235 transparent transparent;
        }
      }
      .cards::after {
        position: absolute;
        content: "";
        z-index: 9;
        top: 0;
        bottom: 0;
        left: 50%;
        border-left: 2px solid rgba(200,200,200,0.5);
      }
    }
    // 滚动条样式
    .cards_list::-webkit-scrollbar {
      width: 10px;
    }
    .cards_list::-webkit-scrollbar-track-piece {
      background-color: #999;
      border-radius: 10px;
    } /* 滚动条的内层滑轨背景颜色 */
    .cards_list::-webkit-scrollbar-track {
        // background-color: pink;
    } /* 滚动条的外层滑轨背景颜色 */
    .cards_list::-webkit-scrollbar-thumb {
        background-color: rgba(255,255,255,.6);
        border-radius: 10px;
    } /* 滚动条的内层滑块颜色 */
    .cards_list::-webkit-scrollbar-button {
        display: none;
    } /* 滑轨两头的监听按钮颜色 */
  }
</style>
