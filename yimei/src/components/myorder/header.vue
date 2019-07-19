<template>
    <div class="bao">
        <swiper class="swiper-seckill" :not-next-tick="true" :options="swiperOption">
            <swiper-slide class="header">
                <div class="top">
                    <p style="font-weight:400;color:rgba(51,51,51,1);font-size:.4rem">订单编号：20181113051325</p>
                    <p style="color:rgba(255,0,74,1);font-size:.4rem;">待付款</p>
                </div>
                <div class="footer">
                    <div class="tab">
                        <div class="transition">
                            <div class="f1" style="b.bao-bottom:.01rem solid rgba(229,229,229,1)">
                                <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt style="margin-left:.25rem;">
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
                    </div>
                </div>
                <div class="bao">
                    <div class="kuang">
                        <div class="remove">取消订单</div>
                        <div class="pay">去付款</div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="header">
                <div class="top">
                    <p style="font-weight:400;color:rgba(51,51,51,1);font-size:.4rem">订单编号：20181113051325</p>
                    <p style="color:rgba(255,0,74,1);font-size:.4rem;">已取消</p>
                </div>
                <div class="footer">
                    <div class="tab">
                        <div class="transition">
                            <div class="f1" style="b.bao-bottom:.01rem solid rgba(229,229,229,1)">
                                <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt style="margin-left:.25rem;">
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
                    </div>
                </div>
                <div class="bao">
                    <div class="kuang">
                        <div class="remove">取消订单</div>
                        <div class="pay">去付款</div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="header">
                <div class="top">
                    <p style="font-weight:400;color:rgba(51,51,51,1);font-size:.4rem">订单编号：20181113051325</p>
                    <p style="color:rgba(255,0,74,1);font-size:.4rem;">待审核</p>
                </div>
                <div class="footer">
                    <div class="tab">
                        <div class="transition">
                            <div class="f1" style="b.bao-bottom:.01rem solid rgba(229,229,229,1)">
                                <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt style="margin-left:.25rem;">
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
                    </div>
                </div>
                <div class="bao">
                    <div class="kuang">
                        <div class="remove">取消订单</div>
                        <div class="pay">去付款</div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    data() {
    return {
        swiperOption: {
            slidesPerView: 'auto',
            grabCursor: true,
            setWrapperSize: true,
            autoHeight: true,
            freeMode: true,
            observer: true
        }
    }
    },
    components: {
        swiper,
        swiperSlide
    }

}
</script>

<style>
.bao{height: 6rem;overflow: hidden;}
.bao .swiper-seckill{height: 7rem;}
.bao .swiper-seckill .header{width: 10rem;;float: left;}
.bao .header .top{width: 9.5rem;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 2rem;margin-top: .2rem}
.bao .header .top p{}
.bao .header .footer{width: 100%;height: auto;position: relative;}
.bao .header .footer .tab{position: absolute;top:.4rem;left: 0;;width: 100%;}
.bao .header .footer .tab .transition .f1{width: 9.5rem;height: 3rem;display: flex;justify-content: space-between;}
.bao .header .footer .tab .transition .f1 img{height: 2.7rem;}
.bao .header .footer .tab .transition .f1 .Right{width: 6.4rem;margin-left: .25rem;}
.bao .header .footer .tab .transition .f1 .Right .ttitle{font-size:.38rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.bao .header .footer .tab .transition .f1 .Right .content{padding-top: .2rem;font-size: .28rem;color:rgba(102,102,102,1);}
.bao .header .footer .tab .transition .f1 .Right .foot{padding-top: .2rem;}
.bao .header .footer .tab .transition .f1 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.bao .header .footer .tab .transition .f1 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.bao .header .footer .tab .transition .f1 .Right .foot .yue{padding-left: 2.75rem;color:rgba(102,102,102,1);font-size: .28rem;}
.bao .header .bao{margin-top: 3.5rem;width: 10rem;background:  rgba(242,242,242,1);height: 1.5rem;}
.bao .header .bao .kuang{width: 100%;height: 1.2rem;overflow: hidden;background: #fff;}
.bao .header .bao .kuang .remove{margin-left: 4rem;float: left;width: 2.5rem;height: 1rem;border:.02rem solid rgba(35,183,172,1);font-size: .4rem;text-align: center;line-height: 1rem;border-radius: .5rem;color:rgba(35,183,172,1);}
.bao .header .bao .kuang .pay{float: left;margin-left: .3rem;;width: 2.5rem;height: 1rem;border:.02rem solid rgba(35,183,172,1);font-size: .4rem;text-align: center;line-height: 1rem;border-radius: .5rem;color:rgba(35,183,172,1);}
</style>
