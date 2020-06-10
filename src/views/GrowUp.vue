<template>
  <div class="wrapper">
    <div class="lbox fl">8</div>
    <div class="rbox fr">9</div>
    <p>{{count}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style>

</style>
