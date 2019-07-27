<template>
    <div class="c1">
        <myheader tit="设置" showL="true"></myheader>
        <div>
             <van-cell title="意见反馈" is-link to="suggest"/>
             <van-cell title="关于我们" is-link to="aboutUs"/>
             <van-cell title="" />
        </div>   
        <div style="margin-top:1.8rem;">    
            <m-ybutton @click="logout" text="退出登录"></m-ybutton>
        </div>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import { Toast,Button ,Notify} from 'vant'
export default {
    components:{myheader},
    data() {
		return {			
		}
    },
    methods:{
        logout(){
            this.$store.commit('setuid',"");
            this.$store.commit('setuserInfo',"");
            window.sessionStorage.setItem("uid",{})
            window.sessionStorage.setItem("youke",'');
            window.sessionStorage.setItem("userInfo",{})
            Toast.success('退出登录');
            setTimeout(()=>{
               this.$router.push("/login")
            },1000)
            
        }
    },
    mounted(){
        var first = null
        var that = this
        mui.back = function() {
            if (!first) {
                that.$router.push('/my')
                first = new Date().getTime() 
                setTimeout(function() { 
                    first = null
                }, 1000)
            } else {
                if (new Date().getTime() - first < 1000) { 
                    plus.runtime.quit() 
                }
            }
        }
    }
}
</script>
<style scoped>
.c1{width: 100%;height: 100vh;background: #fff;}

</style>
