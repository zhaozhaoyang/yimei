<template>
    <div style="width:100%;height:100vh">
        <myheader tit="消息详情" showL="true"></myheader>
        <iframe :src="src" frameborder="0" height="90%"  width="100%" class="ifram"></iframe>
        <!-- <p class="ptitle">快乐哈流口水的老客户</p>
        <p class="time">2018-11-22 12:44:44</p>
        <p class="pcontent">卡掉了卡拉卡仕达流口水来的卡号卡了家里拉科技的拉科技拉科技的拉卡机三大路口家阿卡 咖科技的垃圾死了的阿卡角度看京 </p> -->
    </div>
</template>
<script>
import myheader  from './component/header.vue'
export default {
    components:{myheader},
    data(){
        return{
            src:''
        }        
    },
    mounted(){
        var first = null
        var that =this
		mui.back = function() {
			if (!first) {
				first = new Date().getTime() 
                // mui.toast('再按一次退出应用')
                that.$router.back()
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
    created(){
       var msgId = this.$route.query.msgId
       this.postRequest({ cmd: "msgDetail",msgId:msgId}).then(res => {
            console.log(res)
            this.src = res.data.url
        });
    },
    methods:{

    }
}
</script>
<style scoped>
.c1{border-top:1px solid #fff;padding: 15px;}
.ptitle{
    font-size: 16px;color: #000;height: 30px;line-height: 30px;
}
.time{
    font-size: 12px;
    color: #999;
    height: 20px;
    line-height: 20px;

}
.pcontent{
    font-size: 14px;
    margin-top: 15px;
    line-height: 20px;
}
</style>
