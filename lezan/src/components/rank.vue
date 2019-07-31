<template>
    <div>
        <myheader tit="排行榜" bg='2'></myheader>   
        <div class="wrap" :style="{'top':positionTop}">       
            <img :src="image" alt style="width:100%;height:160px;display:block;"/>
            <!-- 可做动画效果 -->
            <div class="plist">
                <p class="flex">
                    <span>排行</span><span>用户名</span><span>账号</span><span>今日佣金</span>
                </p>
                <ul>
                    <li class="flex" v-for="(item,index) in dataList" :class="[index<3?'corg':'']" :key="index">
                        <span v-if="index<3"><img :src="require('@/assets/images/'+(index+1)+'.jpg')" alt="" style="height:30px;width:30px;"></span>
                        <span class="bold"  v-if="index>2">{{index+1}}</span>
                        <span>{{item.nickname}}</span>
                        <span>{{item.account}}</span>
                        <span class="corg">{{item.fee}}</span>
                    </li>
                    <div class="nodata">暂无数据...</div>
                </ul>
            </div>  
         </div>
        <btmbar @goIndex="goto" :actived='actnum'></btmbar>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import btmbar  from './component/btmbar.vue'
import { Toast } from 'vant'
export default {
    components:{btmbar,myheader},
	data() {
		return {
            uid:this.$store.state.uid || window.localStorage.getItem("uid"),			
            actnum:1,
            positionTop:'1.70333rem',
            pageNo:1,
            totalPage:1,
            image:'',
            dataList:[]

		}
    },
    created(){
       this.positionTop = this.$store.state.ipx ? '84px':'1.703rem'
       this.getList()
    },
    mounted(){
        var first = null
		mui.back = function() {
			if (!first) {
				first = new Date().getTime() 
				mui.toast('再按一次退出应用')
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
       getList(){
           this.postRequest({ cmd: "rankList",pageNo:this.pageNo}).then(res => {
                console.log(res)
                if(res.dataList){
                    this.dataList = res.dataList
                }
            });
       },
    }
}
</script>
<style scoped>
.bold{font-weight: bold;}
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.corg{color: #face15;}
.wrap{
    width: 100%;
    position: absolute;  
    bottom: 1.3333rem; 
    overflow-x: hidden;
    overflow-y: scroll;
}
.nodata{width: 100%;height: 100px;line-height: 100px;text-align: center;font-size: 13px;color: #999;}
.plist{
    width:99.2%;   
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background: #fff;
    padding: 20px 10px 0;
    box-shadow:0 0px 6px rgba(100, 100, 100, 0.3);
    color: #666;
    position: absolute;
    margin-left:1px;
    top: 190px;
    bottom: 0;
}
.plist p{
    display: flex;flex-flow: row;
}
.plist p span{
    font-size: 16px;
}
.plist ul span{
    font-size: 15px;
}
.plist span{
    flex: 1;
    text-align: center;
}
.plist ul li{
    border-bottom: 1px solid #E6E6E6;
    height: 58px;
    line-height: 58px;
}
</style>

