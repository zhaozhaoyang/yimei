<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'app',
  provide(){
    return {
      reload:this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
    }   
  },
  created(){
      console.log($('#app'));
  }
}
</script>

<style>
html,body{width: 100%;height: 100%;}
#app{width: 100%;height: 100%;}
</style>
