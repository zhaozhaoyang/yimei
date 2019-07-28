<template>
    <div>
        <myheader tit="乐赞热门"></myheader>   
        <img src="../assets/images/banner.jpg" alt style="width:100%;height:160px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>
        <div class="newslist">
            <ul>
                <li class="li1" @click="godetail()">
                    <div class="flex top">
                        <span class="font1">7月24日阿里看到啦！</span>
                        <span>
                            <span>已读</span>
                            <span>7-24</span>
                        </span>
                    </div>
                    <p class="contt">{{content | formatc}}</p>
                </li>
            </ul>
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
            content:'立卡建档立卡健康来得及拉科技带来家里肯德基卡机大立科技奥克斯店里看到'
		}
    },
    created(){
       
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
.contt{font-size: 12px;color: #999;margin-top: 8px;}
.font1{font-size: 15px;color: #333;}
.newslist{
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
}
.li1{height: 45px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-flow: column;
}
.top{
    justify-content: space-between;
}

</style>

