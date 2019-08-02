<template>
    <div>
        <myheader tit="提现" showL="true"></myheader>
        <van-cell-group>
            <van-field
                v-model="zfInfo.username"
                required
                label="姓名"
                placeholder="请输入真实姓名"
            />

            <van-field
                v-model="zfInfo.number"
                type="number"
                label="支付宝账号"
                placeholder="请输入支付宝账号"
                required
            />
        </van-cell-group>
        <m-ybutton @click="comfirm" text="确定"></m-ybutton>

    </div>
</template>
<script>
import myheader  from './component/header.vue'
import { Toast} from "vant";
export default {
    components:{myheader},
    data(){
        return{
            zfInfo:{
                username:'',
                number:''
            }
           
        }
    },
    mounted() {
        var first = null;
        var that = this
        mui.back = function() {
            if (!first) {
            first = new Date().getTime();
            that.$router.back()
            setTimeout(function() {
                first = null;
            }, 1000);
            } else {
            if (new Date().getTime() - first < 1000) {
                plus.runtime.quit();
            }
            }
        };

    },
    methods:{
       comfirm(){
           if(this.zfInfo.username.trim()==''|| this.zfInfo.number.trim() == ''){
               this.$toast('请完善您的账号信息!')
           }else{
               window.localStorage.setItem('zfInfo',JSON.stringify(this.zfInfo))
               this.$router.back(-1)
            //    this.$toast.success({
            //        message:'保存成功！',
            //        duration:1000,
            //        onClose:()=>{
            //            this.$router.back()
            //        }
            //    })
               
           }           
       }
    }
}
</script>
<style scoped>

</style>
