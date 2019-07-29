<template>
    <div>
        <myheader tit="排行榜" bg='2'></myheader>   
        <div class="wrap" :style="{'top':positionTop}">       
            <img src="../assets/images/banner.jpg" alt style="width:100%;height:160px;display:block;"/>
            <div class="plist">
                <p class="flex">
                    <span>排行</span><span>用户名</span><span>账号</span><span>今日佣金</span>
                </p>
                <ul>
                    <li class="flex" v-for="(item,index) in 10" :class="[index<3?'corg':'']" :key="index">
                        <span v-if="index<3"><img :src="require('@/assets/images/'+(index+1)+'.jpg')" alt="" style="height:30px;width:30px;"></span>
                        <span class="bold"  v-if="index>2">{{index+1}}</span>
                        <span>asda</span>
                        <span>5622662</span>
                        <span class="corg">35331</span>
                    </li>
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
            uid:this.$store.state.uid || window.sessionStorage.getItem("uid"),			
            actnum:1,
            positionTop:'1.70333rem',
		}
    },
    created(){
       this.positionTop = this.$store.state.ipx ? '84px':'1.703rem'
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
    position: absolute;  
    bottom: 1.3333rem; 
    overflow-x: hidden;
    overflow-y: scroll;
}
.plist{
    width:99.2%;
    margin: 30px auto 0;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    background: #fff;
    padding: 20px 10px 0;
    box-shadow:0 0px 6px rgba(100, 100, 100, 0.3);
    color: #666;
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

