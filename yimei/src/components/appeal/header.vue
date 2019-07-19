<template>
    <div class="header">
        <div class="top" style="border-bottom:.01rem solid rgba(226,226,226,1);">
            <p style="font-weight:400;color:rgba(51,51,51,1);font-size:.4rem">订单编号：20181113051325</p>
            <p style="color:rgba(255,0,74,1);font-size:.4rem;">待付款</p>
        </div>
        <foots></foots>
        <div class="bao">
            <div class="center">
                <p style="width:70%">商品金额</p>
                <p style="color:rgba(102,102,102,1);font-size:.4rem;">￥<span style="font-size:.45rem;">10000</span></p>
            </div>
            <div class="center" >
                <p style="width:70%">预约金</p>
                <p style="color:rgba(255,0,74,1);font-size:.4rem;">￥<span style="font-size:.45rem;">4000</span></p>
            </div>
            <div class="center" >
                <p style="width:70%">到院再付</p>
                <p style="color:rgba(102,102,102,1);font-size:.4rem;">￥<span style="font-size:.45rem;">6000</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import foots from '@/components/sureorder/foot.vue' 
export default {
    components:{
        foots
    }
}
</script>

<style>
.header{margin-top: 1.8rem;z-index: 100}
.header .top{width: 95%;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 1rem}
.header .bao{background: #fff;width: 100%;position: absolute;top:5.92rem;}
.header .bao .center{width: 100%;height: 1.5rem;border-bottom:.01rem solid rgba(226,226,226,1);display: flex;justify-content: space-around}
.header .bao .center p{color: rgba(17,17,17,1);font-weight:500;line-height: 1.5rem;font-size: .4rem;}
.header .bao .center p span{text-align: right;}
</style>
