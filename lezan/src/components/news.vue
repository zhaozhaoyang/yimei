<template>
    <div style="background:#f7f7f7;height:100vh;">
        <myheader tit="消息" bg='2'></myheader> 
        <div class="wrap" :style="{'top':positionTop}">           
            <img src="../assets/images/banner.jpg" alt style="width:100%;height:160px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>
            <div class="newslist">
                <ul>
                    <li class="li1" @click="godetail()" v-for="i in 5">
                        <div class="flex top">
                            <span class="font1">7月24日阿里看到啦！</span>
                            <span>
                                <span :class="[isread?'cgreen':'cred']">已读</span>
                                <span class="c9">7-24</span>
                            </span>
                        </div>
                        <p class="contt">{{content | formatc}}</p>
                    </li>
                </ul>
            </div>
         </div>
        <btmbar @goIndex="goto"  :actived='actnum'></btmbar>
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
            actnum:2,
            positionTop:'64px',
            isread:true,
            content:'立卡建档立卡健康来得及拉科技带来家里肯德基卡机大立科技奥克斯店里看到'
		}
    },
    created(){
       this.positionTop = this.$store.state.ipx ? '84px':'64px'
    },
    filters:{
        formatc(val){
            return val.substring(0,20)+'...'
        }
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
       godetail(){
           this.$router.push({
               name:"newsdetail",
               params:{
                   
               }
           })
       }
    }
}
</script>
<style scoped>
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.contt{font-size: 13px;color: #999;}
.font1{font-size: 15px;color: #333;}
.wrap{
    position: absolute;  
    bottom: 1.3333rem; 
    overflow-x: hidden;
    overflow-y: scroll;
}
.newslist{
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    
}
.li1{height: 75px;
    width: 100%;
    display: flex;
    flex-flow: column;
    background: #fff;
    justify-content: space-around;
    padding: 12px;
    box-shadow:0 0px 2px rgba(100, 100, 100, 0.3);
    border-radius: 4px;
    margin-bottom: 12px;
}
.top{
    justify-content: space-between;
}
.cgreen{
    color: #35bd1e;
    font-size: 13px;
}
.c9{
    color: #999;
    font-size: 13px;
    margin-left: 10px;
}
.cred{
    color: #ff4843;
    font-size: 13px;
}
</style>

