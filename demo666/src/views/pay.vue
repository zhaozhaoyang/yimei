<template>
  <div>
    <header>这是一个标题</header>   
    <div class="wrapper">
        <van-button type="primary" @click="pay">支付</van-button>
    </div>    
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    mounted(){
        document.addEventListener("plusready", function(){
            // 扩展API加载完毕，现在可以正常调用扩展API
            plus.payment.getChannels(function(s){
                channels = s;
            }, function(e){
                alert("获取支付通道列表失败："+e.message);
            });
        }, false);
    },
    methods: {
      pay(){

      }
    }
  }
</script>
<style scoped>
    header{background: #1989fa;height: 50px;width: 100%;color: #fff;line-height: 50px;text-align: center;box-sizing: border-box;position: fixed;top: 0;left: 0;z-index: 1000;}
    .wrapper{position: absolute;top: 50px;left: 0;bottom: 120px;width: 100%;padding: 100px;box-sizing: border-box;}
</style>
