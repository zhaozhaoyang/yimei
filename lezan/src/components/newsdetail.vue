<template>
    <div class="c1">
        <myheader tit="消息详情" showL="true"></myheader>
        <p class="ptitle">快乐哈流口水的老客户</p>
        <p class="time">2018-11-22 12:44:44</p>
        <p class="pcontent">卡掉了卡拉卡仕达流口水来的卡号卡了家里拉科技的拉科技拉科技的拉卡机三大路口家阿卡 咖科技的垃圾死了的阿卡角度看京 </p>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
export default {
    components:{myheader},

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
