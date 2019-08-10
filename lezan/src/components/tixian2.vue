<template>
    <div>
        <myheader tit="提现" showL="true"></myheader>
        <van-cell-group>
            <!-- <van-field
                v-model="zfInfo.bank"
                required
                label="选择银行"
                placeholder="选择银行"
                :value="value"
                clickable
                @click="showPicker = true"
            /> -->
            <van-field
            readonly
            required
            clickable
            placeholder="- 选择银行 -"
            label="选择银行"
            :value="zfInfo.bank"
            @click="showPicker = true"
            />
            <van-field
                v-model="zfInfo.username"
                required
                label="姓名"
                placeholder="姓名"
            />
            <van-field
                v-model="zfInfo.phone"
                required
                label="联系电话"
                placeholder="联系电话"
            />

            <van-field
                v-model="zfInfo.account"
                type="number"
                label="银行卡卡号"
                placeholder="银行卡卡号"
                required
            />
        </van-cell-group>
        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="columns"
                @cancel="showPicker = false"
                @confirm="onConfirm"
            />
        </van-popup>
        <p class="tip">
            注：请输入真实有效的银行卡及个人信息，以确保平台能准确打款；若信息有误造成提现金额未能到账，平台不负任何责任。
        </p>
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
                account:'',
                phone:'',
                bank:''
            },

            value: '',
            showPicker: false,
            columns: ['中国农业银行', '中国建设银行', '中国工商银行', '中国银行', '交通银行','邮政储蓄银行','招商银行','兴业银行','中信银行','中国光大银行','上海浦发银行','中国民生银行','深圳发展银行','民生银行','广东发展银行','华夏银行']
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
        onConfirm(value) {
            this.zfInfo.bank = value;
            this.showPicker = false;
        },
       comfirm(){
           if(this.zfInfo.username.trim()=='' ||this.zfInfo.phone.trim() == '' || this.zfInfo.bank.trim() == '' ||this.zfInfo.account.trim() == ''){
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
.tip{
    margin-top: 5px;
    height: 50px;
    padding: 0 10px;
    line-height: 18px;
    font-size: 12px;
    color:rgba(236,44,131,1);
}
</style>
