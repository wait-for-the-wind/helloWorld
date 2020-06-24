<template>
  <div class="blog">
    <ul>
      <li>
        <h5><a href="javascript:;">Jquery初步学习</a></h5>
        <dl>
          <dt><a href="javascript:;"><img src="@images/avatar_2.jpg" alt=""></a></dt>
          <dd><a href="javascript:;">wait-for-the-wind</a></dd>
          <div>
                        1. 什么是SQL注入SQL注入是web应用程序对用户输入的数据没有严格进行合法校验和过滤，导致前端传入到后端的数据是可以恶意修改的，攻击者通过构造不同的SQL语句来实现对数据库的任意操作，这就是SQL注入漏洞的原理。2. 为什么会有SQL注入研发人员在开发过程中代码逻辑不严谨造成的，例如没有对SQL参数进行严格过滤	未启用框架的安全配置，例如PHP的magic_quotes...                    </div>
          <div>
            <dd>
              <a href="javascript:;">
                <span>
                  <svg></svg>
                </span>
                <span>32</span>
              </a>
            </dd>
          </div>
        </dl>
      </li>
    </ul>
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
  .blog{
    width: 950px;
    height: 84px;
    padding: 18px 24px 13px;
    margin: 0 auto;
    box-sizing: border-box;
    background: skyblue;
    dl {
      display: flex;
    }
  }
</style>
