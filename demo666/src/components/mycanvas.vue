<template>
  <div>
      <van-tabs v-model="active" swipeable sticky>
        <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
  data () {
    return {
      screenHeight: window.innerHeight, // 屏幕高度
      active: 2
    }
  }
}
</script>

<style lang="scss" scoped>

</style>