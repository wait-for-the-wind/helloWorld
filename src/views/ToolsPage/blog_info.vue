<template>
  <div class="blog_content">
    <!-- 博客详情页(进入这里得时候应该根据id来获取相应得详情内容) -->
    <h2>小撒哲言 - 共勉</h2>
    <p class="auth_info">
      <span>
        作者：<strong>盛毅</strong>
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
      人生如一场修行，得意时，“一日看尽长安花”，艰难时，“潦倒新停浊酒杯”，但生命的跋涉不能回头，哪怕，“畏途巉岩不可攀”，也要会当凌绝顶，哪怕，“无人会，登临意”，也要猛志固常在，从经典中汲取 九万里风鹏正举得力量，历练也无风雨也无晴的豁然，待到重阳日，我们还来就菊花 -- 撒贝宁
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
  p.auth_info {
    color: #999;
    strong {
      margin-right: 10px;
    }
    span:last-child strong {
      margin-right: 0px;
    }
  }
  .article_content {
    text-align: left;
    text-indent: 2em;
  }
}
</style>
