<template>
    <div class="refund">
        <div class="Title">退款详情</div>
        <!-- 退款开始 -->
        <div class="contents">
            <div class="box">
                <p class="up">退款信息</p>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">订单编号：</p>
                    <p class="move" >52465584463126543</p>
                </div>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">申请时间：</p>
                    <p class="move" >2019-04-25 12:20:12</p>
                </div>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">退款原因：</p>
                    <p class="move" >不想做了</p>
                </div>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">退款金额：</p>
                    <p class="move" >￥<span>4000</span></p>
                </div>
                <div class="star">
                    <p style="font-size:.38rem;color:rgba(17,17,17,1)">退回微信：</p>
                    <p class="move" style="color:rgba(255,0,74,1);">￥<span>4000</span></p>
                </div>
            </div>
        </div>
    <!--  -->
    <!--  -->
        <div class="money">
            <div class="price">
                <div class="ref">
                    <p>退款申请</p>
                    <div class="img">
                        <img src="../common/images/img/pic/日记/组2@1x (2).png" alt="" style="margin-top:.3rem;">
                        <img src="../common/images/img/pic/日记/矩形557@1x.png" alt="" style="position:absolute;top:.5rem;width:3.5rem;">
                    </div>
                </div>
                <div class="ref" style="margin-left:1.8rem;">
                    <p style="margin-left:.15rem;">审核中</p>
                    <div class="img">
                        <img src="../common/images/img/pic/日记/组3@1x (2).png" alt="" style="margin-top:.3rem;">
                        <img src="../common/images/img/pic/日记/矩形557拷贝@1x.png" alt="" style="position:absolute;top:.5rem;left:1.1rem;width:3.3rem;">
                    </div>
                </div>
                <div class="ref" style="margin-left:1.8rem;">
                    <p>退款成功</p>
                    <div class="img">
                        <img src="../common/images/img/pic/日记/组4@1x (2).png" alt="" style="margin-left:-.1rem;">
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="refs">
            <p class="glass">退款进度</p>
            <div class="bao">
                <div class="picture">
                    <img src="../common/images/img/pic/日记/组5@1x (2).png" alt="" style="position:absolute;">
                    <img src="../common/images/img/pic/日记/矩形574@1x.png" alt="" style="position:absolute;left:.4rem;bottom:1rem;;height:1.3rem;">
                </div>
                <div class="word">
                    <p>退款成功</p>
                    <p style="color:rgba(153,153,153,1);">2019-06-15 12:20:30</p>
                </div>
            </div>
            <div class="bao" style="margin-top:.8rem;">
                <div class="picture">
                    <img src="../common/images/img/pic/日记/组6@1x (2).png" alt="" style="position:absolute;">
                    <img src="../common/images/img/pic/日记/矩形574@1x.png" alt="" style="position:absolute;left:.4rem;bottom:-.9rem;height:1.3rem;">
                </div>
                <div class="word">
                    <p>审核已通过，等待退款</p>
                    <p style="color:rgba(153,153,153,1);">2019-06-15 12:20:30</p>
                </div>
            </div>
             <div class="bao" style="margin-top:.8rem;">
                <div class="picture">
                    <img src="../common/images/img/pic/日记/组6@1x (2).png" alt="" style="position:absolute;">
                </div>
                <div class="word">
                    <p>申请已提交，等待审核</p>
                    <p style="color:rgba(153,153,153,1);">2019-06-15 12:20:30</p>
                </div>
            </div>
        </div>
        <!--  -->
    </div>
</template>

<script>
export default {

}
</script>

<style>
*{margin: 0;padding: 0;}
.refund{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.refund .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);text-align: center;}
.refund .contents{width: 100%;height: 9rem;background:rgba(242,242,242,1);margin-top: 1.8rem;}
.refund .contents .box{width: 100%;height: 8.7rem;background: #fff;}
.refund .contents .box .up{font-weight:bold;color:rgba(17,17,17,1);font-size: .4rem;padding-top: .3rem;padding-left: .25rem;}
.refund .contents .box .star{overflow: hidden;border-bottom:.01rem solid rgba(226,226,226,1);height: 1.5rem;line-height: 1.5rem;}
.refund .contents .box .star p{margin-left: .25rem;float: left;color:rgba(102,102,102,1);font-size: .4rem;}
.refund .contents .box .star .move{width: 4rem;text-align: right;margin-left: 3.5rem;}
.refund .money{width: 100%;height: 3rem;background:rgba(242,242,242,1);margin-top: .3rem;}
.refund .money .price{width: 100%;height: 2.7rem;background: #fff;display: flex;justify-content: space-between;}
.refund .money .ref{width: 100%;height: 2.7rem;margin-left: .25rem;font-size: .4rem;margin-top: .4rem;text-align: center;}
.refund .money .ref .img{position: relative;left:0;top:.35rem;}
.refund .refs{width: 95%;margin-left: .25rem;margin-top: .4rem;}
.refund .refs .glass{font-size: .4rem;font-weight:bold;color:rgba(17,17,17,1);}
.refund .refs .bao .word{margin-left: .5rem;font-size: .4rem;}
</style>
