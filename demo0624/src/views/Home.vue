<template>
  <div class="home">
    <Header title="首页" ref="header" showRt="true" :showbd='showbd' showLf="true" @onClickRight="work" >
    <template v-slot:sss>
        <span >1111</span>
    </template>      
    </Header>
    <van-row type="flex" justify="center">
      <van-col><van-button type="primary">goAbout</van-button></van-col>
     </van-row>    
    <Upload msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Upload from '@/components/upload.vue'
export default {
  name: 'home',
  components: {
    Upload,Header
  },
  data(){
    return{
      showbd:true
    }
  },
  mounted(){
    // this.$refs.header.$on('onClickLeft',this.ddd)  //监听当前实例上的对象
    // console.log(this.$refs.header)   //在created中还未渲染无法获取
    this.$root.$on('onClickLeft',this.ddd)
  },
  methods:{
    work(data){
      console.log(data)
    },
    ddd(data){
      console.log(data)
    },
    test(){
      console.log(222)
    }
  }
}
</script>
