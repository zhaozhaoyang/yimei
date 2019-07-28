<template>
    <div>
        <myheader tit="提现" showL="true"></myheader>
        <van-cell-group>
            <van-field
                v-model="username"
                required
                label="姓名"
                placeholder="请输入真实姓名"
                @click-right-icon="$toast('question')"
            />

            <van-field
                v-model="number"
                type="number"
                label="支付宝账号"
                placeholder="请输入支付宝账号"
                required
            />
        </van-cell-group>
        <button class="btns">确定</button>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
export default {
    components:{myheader},
    data(){
        return{
           
        }
    },
    methods:{
       
    }
}
</script>
<style scoped>
.btns{
    width:80%;
    height: 35px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 13px;
    border-radius: 3px;
    display: block;
    margin: 100px auto;
}
</style>
