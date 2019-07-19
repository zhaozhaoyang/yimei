<template>
    <div class="purse">
        <div class="Title">申诉信息</div>
        <div class="bg">
            <img src="../common/images/img/pic/日记/图层2@1x.png" alt="">
            <div class="word">
                <p class="all">总金额 (元)</p>
                <div class="count">3000
                    <div class="border">提现</div>
                </div>
            </div>
        </div>
        <!-- 账单记录 -->
        <div class="every">
            <p class="cont">账单记录</p>
            <div class="all">
                <div class="up">
                    <p>提现</p>
                    <p style="color:rgba(153,153,153,1);">2019-03-05 15:20:12</p>
                </div>
                <div class="up">
                    <p style="color:rgba(153,153,153,1);">余额：500</p>
                    <p>-60</p>
                </div>
            </div>
            <div class="all">
                <div class="up">
                    <p>提现</p>
                    <p style="color:rgba(153,153,153,1);">2019-03-05 15:20:12</p>
                </div>
                <div class="up">
                    <p style="color:rgba(153,153,153,1);">余额：500</p>
                    <p>-60</p>
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
.purse{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.purse .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.purse .bg{margin-top: 1.8rem;margin-left: .35rem;position: relative;}
.purse .bg .word{width: 90%;position: absolute;top:0;left: 0;color:#fff;margin-left: .3rem;}
.purse .bg .word .all{font-size: .4rem;margin-top:.4rem;}
.purse .bg .word .count{font-size: .8rem;margin-top:.4rem;display: flex;justify-content: space-between;}
.purse .bg .word .count .border{width: 1.8rem;height: .8rem;border:.02rem solid #fff;font-size: .38rem;text-align: center;line-height: .8rem;border-radius: .5rem;}
.purse .every{width: 95%;margin-left: .25rem;margin-top: .5rem;}
.purse .every .cont{font-size: .4rem;font-weight: 500;color:rgba(17,17,17,1);}
.purse .every .all{height: 1.5rem;width: 100%;border-bottom: .01rem solid rgba(226,226,226,1)}
.purse .every .all .up{display: flex;justify-content: space-between;margin-top: .3rem;font-size: .35rem;}
</style>
