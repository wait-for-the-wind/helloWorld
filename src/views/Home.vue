<template>
  <div class="home">
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      name: 'sjy',
      obj: { name: 'sjy', age: 18 }
    }
  },
  mounted() {
    this.sum()
  },
  methods: {
    sum() {
      let a = 3
      console.log(a)
    }
  }
}
</script>
