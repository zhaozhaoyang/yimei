<template>
  <div class="c1">
    <myheader tit="提交成功"></myheader>
    <div class="success">
        <img src="../assets/images/success.jpg">
        <span style="font-size:15px;">页面将在<font class="blue"> {{time}}s</font> 后 <font class="blue" @click="$router.back()">跳转</font></span>
    </div>
  </div>
</template>

<script>
import myheader  from './component/header.vue'
export default {
  components:{myheader},
  data() {
    return {
        time:3
    };
  },
  mounted(){
      var timer = setInterval(()=>{
          this.time--;
          console.log(this.time)
          if(this.time == -1){
            clearInterval(timer);
            this.$router.back()
          }
      },1000)

      var first = null
      var that = this
      mui.back = function() {
          if (!first) {
          that.$router.push('/my')
          first = new Date().getTime() 
          setTimeout(function() { 
              first = null
          }, 1000)
          } else {
          if (new Date().getTime() - first < 1000) { 
              plus.runtime.quit() 
          }
          }
      }
  },
  methods:{      
  }
};
</script>

<style scoped>
    .blue{color: blue;}
    .c1{height: 100vh;background: #fff;}
    .success{display: flex;flex-flow: column;align-items: center;margin: 2.4rem 0 1.3rem;}

    .success img{height:2.34rem;width: 2.34rem;}

    .success span{font-size: .3rem;margin-top: .5rem;color: #666;}
</style>