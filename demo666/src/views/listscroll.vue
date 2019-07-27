<template>
  <div>
    <header>这是一个标题</header>   
    <scroll class="wrapper"
            :data="data"
            :pulldown="true"
            @scrollToEnd="loadData"
            @pulldown="refresh"
            :pullup="true">
        <ul class="content">
            <li v-for="(item,index) in data" :key="index" class="li">{{item.content}}</li>
        </ul>
        <Qloading v-if="qshow"/>
    </scroll>    
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import scroll from '@/components/scroll.vue'
import { Toast } from 'vant';
import { setTimeout } from 'timers';
  export default {
    components:{scroll,BScroll},
    data() {
      return {
        data: [],
        pulldown: true,
        nowPage:1,
        pageCount:10,
        totalPage:1,

        qshow:false
      }
    },
    created() {
        // uid:"872565d6103947fbbc7f5b6a7d0479be"
        this.loadData()
    },
    methods: {
      refresh(){
          this.nowPage = 1;
          this.data = []
          this.loadData()
      },
      loadData() {
        
        this.qshow = true;
        if(this.nowPage>this.totalPage &&this.nowPage !==1){
            Toast('没有更多数据')
            setTimeout(()=>{
              this.qshow = false;
            },1000)            
            return;
        }
        var params = {cmd:"messagelist",uid:"872565d6103947fbbc7f5b6a7d0479be",nowPage:this.nowPage,pageCount:this.pageCount}
        this.http.post(encodeURI('http://122.114.48.61:8080/garbage/api/service?json='+JSON.stringify(params)))   //不加encodeURI报跨域错误
        .then(res=>{
            console.log(res)
            setTimeout(()=>{
              this.qshow = false;
              this.data = res.data.dataList.concat(this.data)
            },1000)  
            this.totalPage = res.data.totalPage
            this.nowPage++          
        })
      }
    }
  }
</script>
<style scoped>
    header{background: #1989fa;height: 50px;width: 100%;color: #fff;line-height: 50px;text-align: center;box-sizing: border-box;position: fixed;top: 0;left: 0;z-index: 1000;}
    .li{height: 50px;line-height: 50px;text-align: center;border-bottom: 1px solid #ddd;background: #fff;box-sizing: border-box;}
    .wrapper{position: absolute;top: 50px;left: 0;bottom: 120px;width: 100%;}
</style>
