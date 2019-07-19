<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body{width: 100%;height: 100%;}
#app{width: 100%;height: 100%;}
*{margin: 0;padding: 0;}
.title{font-size: .45rem;text-align: center;box-shadow:0 .1rem .1rem 0 rgba(227,227,227,0.45);height: 1rem;line-height: 1rem;background: #fff;}
.menpiao{width: 5rem;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
</style>
