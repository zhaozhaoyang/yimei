<template>
    <div style="background:#f7f7f7;height:100vh;">
        <myheader tit="乐赞APP"></myheader> 
        <div class="wrap" :style="{'top':positionTop}">           
            <img src="@/assets/images/banner.png" alt style="width:100%;height:180px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>
            <div class="newslist">
                <ul>
                    <li class="li1" @click="godetail(i.msgId)" v-for="(i,index) in dataList" :key="index">
                        <div class="flex top">
                            <span class="font1">{{i.title}}</span>
                            <span>
                                <span :class="[i.state==0?'cgreen':'cred']">{{i.state==0?'未读':'已读'}}</span>
                                <!-- <span class="c9">{{i.createDate | ftime}}</span> -->
                            </span>
                        </div>
                        <p class="contt">{{i.createDate | ftime}}</p>
                    </li>
                    <p class="nodata" v-if="dataList.length==0">暂无数据..</p>
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
            uid:this.$store.state.uid || window.localStorage.getItem("uid"),			
            actnum:2,
            positionTop:'64px',
            content:'立卡建档立卡健康来得及拉科技带来家里肯德基卡机大立科技奥克斯店里看到',

            pageNo:1,
            totalPage:1,
            dataList:[],
            image:'',

		}
    },
    created(){
       this.positionTop = this.$store.state.ipx ? '84px':'64px'
       this.getList()
    },
    filters:{
        formatc(val){
            return val.substring(0,20)+'...'
        },
        ftime(val){
            return val
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
        getList(){
           this.postRequest({ cmd: "msgList",uid:this.uid}).then(res => {
                console.log(res)
                if(res.data.dataList){
                    this.dataList = res.data.dataList
                    this.image = res.data.image
                }
            });
       },
       godetail(msgId){
           this.$router.push("/newsdetail?msgId="+msgId)
       },
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
    width: 100%;
    bottom: 1.3333rem; 
    overflow-x: hidden;
    overflow-y: scroll;
}
.newslist{
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    
}
.nodata{width: 100%;height: 50px;line-height: 50px;text-align: center;font-size: 13px;color: #999;}
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

