<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>      
    </div> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
  margin: 0;padding: 0;box-sizing: border-box;height: 100%;width: 100%;
}
</style>
