<template>
    <div class="container">
        <header>这是一个标题</header>  
        <ul class="content">
            <li v-for="(item,index) in data" :key="index" class="li">{{item.content}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    mounted(){
        window.addEventListener('scroll',this.scrollLoad,true)
    },
    data() {
      return {
        data: [],
        pulldown: true,
        nowPage:1,
        pageCount:20,
        totalPage:1,

      }
    },
    created(){
        this.loadData()
    },
    methods:{
        loadData() {
            console.log(22)     
            if(this.nowPage>this.totalPage &&this.nowPage !==1){
                Toast('没有更多数据')
                setTimeout(()=>{
                this.qshow = false;
                },1000)            
                return;
            }
            var params = {cmd:"messagelist",uid:"32a88cc60da04a8ab905a7aa930bfb9c",nowPage:this.nowPage,pageCount:this.pageCount}
            this.http.post(encodeURI('http://112.126.98.64/garbage/api/service?json='+JSON.stringify(params)))   //不加encodeURI报跨域错误
            .then(res=>{
                console.log(res)                
                this.data = res.data.dataList.concat(this.data)
                this.totalPage = res.data.totalPage
                this.nowPage++          
            })
        },
        scrollLoad(){
            this.$nextTick(() => {
            var scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
            var clientHeight=document.compatMode == "CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;
            var scrollHeight=document.body.scrollHeight|| document.documentElement.scrollHeight;
            //滚动的距离（动态） +  页面可视高度 （固定） 》= 页面总高度 （固定）
                if(scrollTop + (clientHeight - 0) >=scrollHeight - 0){ 
                console.log('底部...'+scrollTop)      
                            
                }                
            })
            
        },
    },      
    destroyed() {
      window.removeEventListener('scroll',this.scrollLoad,true)
    }
}
</script>
<style scoped>
    header{background: #1989fa;height: 50px;width: 100%;color: #fff;line-height: 50px;text-align: center;box-sizing: border-box;position: fixed;top: 0;left: 0;z-index: 1000;}
    .li{height: 50px;line-height: 50px;text-align: center;border-bottom: 1px solid #ddd;background: #fff;box-sizing: border-box;}
    .wrapper{position: absolute;top: 50px;left: 0;bottom: 120px;width: 100%;}
    .container{
        position: absolute;
        width: 100%;
        /* top: 0;
        bottom: 1.333rem;  一旦设置高度 scrolltop就一直为0 */
        /* height: 500px; */

    }
</style>
