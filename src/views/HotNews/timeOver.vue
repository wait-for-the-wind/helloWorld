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
          sub_title: '人生像是一场修行',
          content: '人生一世、花草一秋，生而无悔！'
        },
        {
          list_number: 91,
          title_date: '2020-07-03',
          sub_title: '人生像是一场修行',
          content: '人生一世、花草一秋，生而无悔！'
        },
        {
          list_number: 9233,
          title_date: '2020-07-03',
          sub_title: '人生像是一场修行',
          content: '人生一世、花草一秋，生而无悔！'
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
.root {
  h1 {
    margin-bottom: 30px;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
