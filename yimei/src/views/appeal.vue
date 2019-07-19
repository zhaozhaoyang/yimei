<template>
    <div class="appeal">
        <div class="Title">申诉</div>
        <div class="header">
            <div class="f1">
                <img src="../common/images/img/ios/矩形7拷贝4@2x.png" alt style="margin-left:.25rem;">
                <div class="Right">
                    <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久</div>
                    <div class="content">
                        <div>杨院长：整形外科副主任医师，整形30年</div>
                    </div>
                    <div class="foot">
                        <span class="money">￥<span class="price">4000</span></span>
                        <span class="yue" style="margin-left:2rem">*1</span>
                    </div>
                </div>
          </div>
        </div>
        <div class="fot">
            <p>请阐述您的问题:</p>
            <p style="font-size: .35rem;color:rgba(153,153,153,1);margin-top:.05rem;">请输入您的问题</p>
            <img src="../common/images/img//ios/sure/添加图片@1x.png" alt="" style="margin-left:.25rem;margin-top:2rem;">
        </div>
        <div class="btn">提交</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
*{margin: 0;padding: 0;}
.appeal{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;background: rgba(242,242,242,1);}
.appeal .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);text-align: center;}
.appeal .header{width: 100%;height: 3.5rem;margin-top: 1.8rem;}
.appeal .header .f1{height: 3.2rem;display: flex;justify-content: space-between;background: #fff;}
.appeal .header .f1 img{width: 2.6rem;height: 2.6rem;}
.appeal .header .f1 .Right{width: 6.4rem;margin-left: .25rem;}
.appeal .header .f1 .Right .ttitle{font-size:.38rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.appeal .header .f1 .Right .content{padding-top: .2rem;font-size: .28rem;color:rgba(102,102,102,1);}
.appeal .header .f1 .Right .foot{padding-top: .2rem;}
.appeal .header .f1 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.appeal .header .f1 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.appeal .header .f1 .Right .foot .yue{padding-left: 2.75rem;color:rgba(102,102,102,1);font-size: .28rem;}
.appeal .fot{width: 100%;background: #fff;height: 5rem;font-weight:bold;color:rgba(17,17,17,1);font-size: .4rem;}
.appeal .fot p{margin-left: .25rem;padding-top: .4rem;}
.appeal .btn{width: 9rem;height: 1rem;background:rgba(35,183,172,1);margin-left: .5rem;margin-top: 2rem;border-radius: .5rem;text-align: center;line-height: 1rem;color:rgba(255,255,255,1);font-size: .4rem;}
</style>
