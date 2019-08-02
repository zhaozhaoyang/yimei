<template>
  <div class="c1">
    <myheader tit="提交成功"></myheader>
    <div class="success">
        <img src="../assets/images/chenggong.png">
        <span>提交成功</span>
    </div>
    <m-ybutton @click="doIt" text="确定"></m-ybutton>
  </div>
</template>

<script>
import myheader  from './component/header.vue'
export default {
  components:{myheader},
  data() {
    return {};
  },
  methods:{
      doIt(){
          this.$router.push('/index')
      }
  }
};
</script>

<style scoped>
    .c1{height: 100vh;background: #fff;}
    .success{display: flex;flex-flow: column;align-items: center;margin: 2.4rem 0 1.3rem;}

    .success img{height:2.34rem;width: 2.34rem;}

    .success span{font-size: .3rem;margin-top: .5rem;color: #666;}
</style>