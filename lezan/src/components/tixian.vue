<template>
    <div>
        <myheader tit="提现" showL="true"></myheader>
        <p class="pd flex pay1">
            <img class="zfbIcon" src="../assets/images/1.png"/>
            <span>完善支付宝信息</span>
            <img class="rtarrow" src="../assets/images/1.png"/>
        </p>
        <div class="pd pay2">
            <p>提取现金</p>
            <div class="mony">
                <span class="micon">￥</span>
                <input type="number" value="200">
            </div>
        </div>
        <div class="pd pay3">
            <p class="flex">
                <span>可用余额500元</span>
                <span>24小时内到账</span>
            </p>
            <div>
                <button class="btns">提现</button>                
            </div>
        </div>
        <div class="pd moybox">
            <ul class="uti">
                <li class="flex monylist">
                    <span>提取金额</span>
                    <span>处理状态</span>
                    <span>提取时间</span>
                </li>
            </ul>
            <ul  class="uti2">
                <li class="flex monylist" v-for="i in 10">
                    <span>200</span>
                    <span>审核中</span>
                    <span>2019-04-05</span>
                </li>
            </ul>
        </div>

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
.rtarrow{
    position: absolute;right: 15px;top: 50%;transform: translateY(-50%);
}
.pd{
    padding: 0 10px;
}
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.pay1{
    height: 50px;
    position: relative;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
}
.pay1 span{ 
    font-size: 14px;
    color: #000;
}
.zfbIcon{
    width: 30px;
    height: 30px;
    margin-right: 13px;
}
.pay2{
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    padding-top: 15px;
}
.pay2 p{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    
}
.mony{
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    position: relative;
    
}
.micon{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    font-size: 13px;
}
.mony input{    
    height: 100%;
    width: 100%;    
    text-indent: 20px;
}
.pay3 .flex{
    justify-content: space-between;
    height: 35px;
    line-height: 30px;
}
.btns{
    width:80%;
    height: 35px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 13px;
    border-radius: 3px;
    display: block;
    margin: 20px auto;
}
.pay3{
    border-bottom: 1px solid #ddd;
}
.pay3 p span{
    font-size: 13px;  
}
.moybox{
    margin: 30px 0;
}
.monylist span{
    flex: 1;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
.moybox .uti span{
    font-size: 14px;
}
.moybox .uti2 span{
    font-size: 13px;
}
</style>
