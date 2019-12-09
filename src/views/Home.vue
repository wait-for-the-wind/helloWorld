<template>
  <div class="home">
    <router-link to='/about'>关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
