<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button @click="gocanvas">canvas</Button>
    <p>发送登录接口测试</p>
    <img src="/images/qxt.png" class="animate" alt="" style="width:822px;height:472px;">
  </div>
</template>
<script>
import Button from 'vant/lib/button';
export default {
  components:{Button},
  data(){
    return{

    }
  },
  created(){
    this.getdata();
  },
  methods:{
    getdata(){
      var self = this;      
      this.postRequest('api/member/member/login', {account: "19903888908",memberType: "0",password: "123321"}).then(res => {
        if (res.data.success == true) {
          console.log(res)
        }
      }).catch(res => {
        console.log(res)
      })
    },
    gocanvas(){
      this.$router.push('canvas')
    }
  }

}
</script>
<style scoped lang="scss">
  .animate:hover{
        /* transform: rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1); */
        transform:scale3d(1, 1 ,1) rotateX(5deg) rotateY(2deg);
  }
  .about{margin-top: 10px;}
</style>

