<template>
    <div>
        <myheader tit="提现" showL="true"></myheader>
        <p class="pd flex pay1" @click="$router.push('/tixian2')" v-if="!zfInfo">
            <img class="zfbIcon" src="../assets/images/zhifubao.png"/>
            <span>完善支付宝信息</span>
            <van-icon name="arrow" size="18" class="rtarrow"/>
        </p>
        <p class="pd flex pay1" @click="$router.push('/tixian2')" v-if="zfInfo">
            <img class="zfbIcon" src="../assets/images/zhifubao.png"/>
            <span style="color:#999;">姓名：{{zfInfo.username}}  账号：{{zfInfo.number}}</span>
            <van-icon name="arrow" size="18" class="rtarrow"/>
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
                <span class="color9">可用余额： <font class="fontm">500.00</font>元</span>
                <span class="color9">24小时内到账</span>
            </p>
            <div>
                <m-ybutton text="确定提现"></m-ybutton>
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
           zfInfo:JSON.parse(localStorage.getItem('zfInfo'))
        }
    },
    methods:{
       
    }
}
</script>
<style scoped>
.color9{color: #999;}
.fontm{font-size: 18px;color: #e92322;}
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
    border-bottom: 1px solid #E6E6E6;
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
    border-bottom: 1px solid #E6E6E6;
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
    top: 60%;
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

.pay3{
    border-bottom: 1px solid #E6E6E6;
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
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #e6e6e6;
    
}
.moybox .uti span{
    font-size: 14px;
    color: #999;
}
.moybox .uti2 span{
    font-size: 13px;
}
</style>
