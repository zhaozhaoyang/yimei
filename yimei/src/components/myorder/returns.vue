<template>
    <div class="returns">
        <div class="headeres">
            <div class="bao1">
                <div class="top">
                    <p class="order1">订单编号：20181113051325</p>
                    <p class="order2" v-show="show==0">待审核</p>
                    <p class="order2" v-show="show==1">已退款</p>
                </div>
                <div class="footeres">
                    <div class="tab">
                        <div class="f12">
                            <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt>
                            <div class="Right">
                                <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久</div>
                                <div class="contentPB">
                                    <div>杨院长：整形外科副主任医师，整形30年</div>
                                </div>
                                <div class="foot">
                                    <span class="money">￥<span class="price">4000</span></span>
                                    <span class="yue">X1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bao2">
                    <div class="kuang">
                        <div class="removes">查看详情</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="headeres">
            <div class="bao1">
                <div class="top">
                    <p class="order1">订单编号：20181113051325</p>
                    <p class="order2" v-show="show==0">待审核</p>
                    <p class="order2" v-show="show==1">已退款</p>
                </div>
                <div class="footeres">
                    <div class="tab">
                        <div class="f12">
                            <img src="../../common/images/img/ios/矩形7拷贝4@2x.png" alt>
                            <div class="Right">
                                <div class="ttitle">【切双眼皮】专利项目 肿胀轻 恢复快 效果持久</div>
                                <div class="content">
                                    <div>杨院长：整形外科副主任医师，整形30年</div>
                                </div>
                                <div class="foot">
                                    <span class="money">￥<span class="price">4000</span></span>
                                    <span class="yue">X1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bao2">
                    <div class="kuang">
                        <div class="removes">查看详情</div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:0
        }
    }
}
</script>

<style>
.returns{height: 100vh;}
.returns .headeres .bao1{background: #fff;}
.returns .headeres .bao1 .top{width: 95%;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 1rem}
.returns .headeres .bao1 .top .order1{font-weight:400;color:rgba(51,51,51,1);font-size:.4rem}
.returns .headeres .bao1 .top .order2{color:rgba(255,0,74,1);font-size:.4rem;}
.returns .headeres .bao1 .footeres{width: 100%;height: auto;}
.returns .headeres .bao1 .footeres .tab{width: 95%;margin-left: .25rem}
.returns .headeres .bao1 .footeres .tab .f12{border-bottom:.01rem solid rgba(229,229,229,1);overflow: hidden;}
.returns .headeres .bao1 .footeres .tab .f12 img{width: 3rem;height: 3rem;float: left;}
.returns .headeres .bao1 .footeres .tab .f12 .Right{float: left;margin-left: .1rem;height: 3.2rem;width: 6rem;}
.returns .headeres .bao1 .footeres .tab .f12 .Right .ttitle{font-size: .4rem;width: 5.9rem;margin-left: .2rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.returns .headeres .bao1 .footeres .tab .f12 .Right .contentPB{width: 6rem;font-size: .33rem;color:rgba(102,102,102,1);margin-top: .3rem;margin-left:.2rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.returns .headeres .bao1 .footeres .tab .f12 .Right .foot{margin-top: .3rem;width: 5.8rem;display: flex;justify-content: space-between;margin-left:.2rem}
.returns .headeres .bao1 .footeres .tab .f12 .Right .foot .money{font-size: .38rem;color:rgba(255,0,74,1);}
.returns .headeres .bao1 .footeres .tab .f12 .Right .foot .money .price{font-size: .5rem}
.returns .headeres .bao1 .footeres .tab .f12 .Right .foot .yue{font-size: .35rem;color:rgba(153,153,153,1);margin-top: .1rem}
.returns .headeres .bao1 .bao2{width: 100%;background: #fff;height: 1.5rem;background: rgba(242,242,242,1);}
.returns .headeres .bao1 .bao2 .kuang{width: 100%;overflow: hidden;background: #fff;height: 1.2rem;;}
.returns .headeres .bao1 .bao2 .kuang .removes{float: left;width: 1.8rem;height: 0.8rem;border:.02rem solid rgba(35,183,172,1);margin-top: .2rem;border-radius: 15px;margin-left: 7.5rem;text-align: center;line-height: .8rem;color:rgba(35,183,172,1);color:rgba(35,183,172,1);}
</style>
