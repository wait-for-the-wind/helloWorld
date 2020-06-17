<template>
  <div>
    <h1>文档时间线</h1>
    <div class="cards">
      <section class="card">
        <header>
          <div class="header_number"><span>1</span></div>
          <h2><span class="title_date">2020-06-17</span><span class="title_sub">副标题</span></h2>
        </header>
        <article class="card_article">
          <p>今天是个好日子</p>
        </article>
      </section>
    </div>
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
<style lang="less" scoped>
  body{
    .cards{
      .card{
        position: relative;
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
        border: 1px solid #000;
        header{
          .header_number {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 20px;
            padding: 6px 14px;
            font-size: 2rem;
            background: rgba(0,0,0,0.17);
          }
          .title_date {
            display: flex;
            margin-left: 10px;
            flex-direction: column;
            font-size: 1rem;
          }
          .title_sub {
            padding-top: 6px;
            font-size: 1.2rem;
          }
        }
        .card_article{
          width: 100%;
          height: 65%;
          background: #fff;
          border: 1px solid rgba(200,200,200,0.5);
          border-top: none;
          padding: 10px;
        }
      }
    }
  }
</style>
