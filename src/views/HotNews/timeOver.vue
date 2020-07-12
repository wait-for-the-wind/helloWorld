<template>
  <div class="root">
    <h1>生·而活着</h1>
    <my-card class="cards_item" :card_data="card"></my-card>
  </div>
</template>
<script>
import card from '@components/Card.vue'
export default {
  data() {
    return {
      flag: false,
      card: [
        {
          list_number: 921,
          title_date: '2020-07-03',
          sub_title: '你要向前走！无论路有多黑！',
          content: '人生一世、花草一秋，生而无悔！'
        },
        {
          list_number: 921,
          title_date: '2020-07-01',
          sub_title: '彻底闹翻了',
          content: '微信，手机都拉黑了，你还会去杭州吗？'
        },
        {
          list_number: 92,
          title_date: '2020-06-21',
          sub_title: '干巴得',
          content: '加油，还有两个月，我应该就能去杭州了'
        },
        {
          list_number: 77,
          title_date: '2020-06-09',
          sub_title: '偶然发现她有男朋友了',
          content: '我很伤心，直到21号正在打字的我仍然反胃、不舒服'
        },
        {
          list_number: 1,
          title_date: '2020-03-26',
          sub_title: '我给她定了个蛋糕',
          content: '居然和她自己买的一模一样，太巧了'
        },
        {
          list_number: 2,
          title_date: '2018-2019',
          sub_title: '很平淡的过日子',
          content: '这一年我对外界充满了向往，早已厌倦了工厂，我们虽然都很开心，但是我还是想着出去，但那时还是太幼稚，我都快遗忘了这一年'
        },
        {
          list_number: 3,
          title_date: '2018-01-01',
          sub_title: '第一次出去跨年',
          content: '我们去了宁波，我很傻，带了相机，结果又没拍到好照片，我们很开心'
        },
        {
          list_number: 4,
          title_date: '2017-06',
          sub_title: '6月份我们毕业了',
          content: '她来南昌了，我们一起在南昌、九江、宁波、西塘玩了一个遍，那也是她唯一一次来江西，我也没带回家，遗憾'
        },
        {
          list_number: 5,
          title_date: '2017-04-03',
          sub_title: '清明回家了',
          content: '这天她送我去火车站了，我吻了她，那也是我的初吻，感觉很奇妙，现在仍有余味'
        },
        {
          list_number: 6,
          title_date: '2017-03-28',
          sub_title: '那晚我勇敢了一次',
          content: '我打电话喊她出来，沿着马路走着走着，我向她表白了，当时我真的喜欢她码？可能是因为外表吧'
        },
        {
          list_number: 7,
          title_date: '2017-03-26',
          sub_title: '瓶子生日',
          content: '这是我们第一次聚餐'
        }
      ]
    }
  },
  mounted() {
    console.log('123', 123)
  },
  methods: {},
  components: {
    'my-card': card
  }
}
</script>
<style lang="less" scoped>
.root{
  h1 {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
