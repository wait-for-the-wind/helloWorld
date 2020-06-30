<template>
  <div class="blog_content">
    <!-- 博客详情页(进入这里得时候应该根据id来获取相应得详情内容) -->
    <h2>忙碌是自由活着的一种底气</h2>
    <p>
      <span>
        作者：<strong>盛迎风</strong>
      </span>
      <span>
        日期：<strong>2020-06-29</strong>
      </span>
      <span>
        点击：<strong>1089</strong>
      </span>
    </p>
    <hr>
    <section class="article_content">

    </section>
    <footer>

    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
.blog_content {
  h2 {
    font-size: 22px;
    font-weight: 700;
    margin: 15px auto;
  }
  p {
    color: #999;
    strong {
      margin-right: 10px;
    }
    span:last-child strong {
      margin-right: 0px;
    }
  }
}
</style>
