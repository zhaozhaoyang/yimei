<template>
    <div class="appinfo">
        <div class="Title">申诉信息</div>
        <headers></headers>
         <!-- 联系信息开始 -->
        <centers></centers>
    <!--  -->
        <!-- 订单信息开始 -->
        <ordes></ordes>
    <!--  -->
    <!-- 申诉信息开始 -->
    <div class="appinf">
            <div class="info">
                <p class="mes">申诉信息</p>
                <p class="fu">为什么眼睛越来越肿，感觉很不舒服。</p>
                <div class="tu">
                    <img src="../common/images/img/ios/ios/圆角矩形11拷贝7@1x_6.png" alt="">
                    <img src="../common/images/img/ios/ios/圆角矩形11拷贝7@1x_62.png" alt="">
                    <img src="../common/images/img/ios/ios/圆角矩形11拷贝6@1x.png" alt="">
                </div>
            </div>
        </div>
    <!--  -->
    </div>
</template>

<script>
import headers from '@/components/appeal/header.vue' 
import centers from '@/components/appeal/center.vue' 
import ordes from '@/components/appeal/ordermsg.vue' 
export default {
    components:{
        headers,
        centers,
        ordes
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.appinfo{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.appinfo .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);text-align: center;line-height: 1.5rem;}
.appinfo .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.appinfo .appinf{width: 100%;height: 5.5rem;background:rgba(242,242,242,1);margin-top: 17.5rem;position: absolute;top:10.3rem;}
.appinfo .appinf .info{width: 100%;height: 5.2rem;background:#fff;margin-top: .25rem;}
.appinfo .appinf .info .mes{font-size: .4rem;color:rgba(17,17,17,1);font-weight: bold;margin-left: .25rem;padding-top: .25rem;}
.appinfo .appinf .info .fu{font-size: .4rem;color:rgba(102,102,102,1);margin-top: .2rem;margin-left: .25rem;}
.appinfo .appinf .info .tu{width: 95%;height: auto;margin-left: .25rem;margin-top: .2rem;display: flex;justify-content: space-between;}
.appinfo .appinf .info .tu img{width: 3rem;height: 3rem;}
</style>


