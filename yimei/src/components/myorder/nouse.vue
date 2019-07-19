<template>
    <div class="use">
         <div class="headeres">
            <div class="bao1" v-for="(item,index) in items" :key="index">
                <div class="top">
                    <p class="order1">订单编号：{{item.ordernum}}</p>
                    <p class="order2" v-if="item.state == '1'">{{content}}</p>
                </div>
                <div class="footeres">
                    <div class="tab">
                        <div class="f12">
                            <img :src="item.proimage" alt>
                            <div class="Right">
                                <div class="ttitle">【{{item.classname}}】{{item.proname}}</div>
                                <div class="contentOB">
                                    <div>{{item.doctorname}}：{{item.doctordesc}}</div>
                                </div>
                                <div class="foot">
                                    <span class="money">￥<span class="price">{{item.price}}</span></span>
                                    <span class="yue">X1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bao2">
                    <div class="kuang">
                        <div class="removes">取消订单</div>
                        <div class="pay">去付款</div>
                    </div>
                </div>
            </div>
            <div v-if="items.length==0" style="height:100px;width:100vh;">
                暂无订单信息...
            </div>
        </div>
        <!-- <div class="headeres">
            <div class="bao1">
                <div class="top">
                    <p class="order1">订单编号：20181113051325</p>
                    <p class="order2">未使用</p>
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
                        <div class="removes">找医生安排手术</div>
                        <div class="writes">去写术前日记</div>
                        <div class="uses">退款</div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            items:[]
        }
    }
}
</script>

<style>
.use {height: 100vh;}
.use .headeres .bao1{background: #fff;}
.use .headeres .bao1 .top{width: 95%;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 1rem}
.use .headeres .bao1 .top .order1{font-weight:400;color:rgba(51,51,51,1);font-size:.4rem}
.use .headeres .bao1 .top .order2{color:rgba(255,0,74,1);font-size:.4rem;}
.use .headeres .bao1 .footeres{width: 100%;height: auto;}
.use .headeres .bao1 .footeres .tab{width: 95%;margin-left: .25rem}
.use .headeres .bao1 .footeres .tab .f12{border-bottom:.01rem solid rgba(229,229,229,1);overflow: hidden;}
.use .headeres .bao1 .footeres .tab .f12 img{width: 3rem;height: 3rem;float: left;}
.use .headeres .bao1 .footeres .tab .f12 .Right{float: left;margin-left: .1rem;height: 3.2rem;width: 6rem}
.use .headeres .bao1 .footeres .tab .f12 .Right .ttitle{font-size: .4rem;width: 6rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.use .headeres .bao1 .footeres .tab .f12 .Right .contentOB{width: 6rem;margin-left: .2rem;font-size: .33rem;color:rgba(102,102,102,1);margin-top: .3rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.use .headeres .bao1 .footeres .tab .f12 .Right .foot{margin-top: .3rem;width: 5.8rem;margin-left: .2rem;display: flex;justify-content: space-between}
.use .headeres .bao1 .footeres .tab .f12 .Right .foot .money{font-size: .38rem;color:rgba(255,0,74,1);}
.use .headeres .bao1 .footeres .tab .f12 .Right .foot .money .price{font-size: .5rem}
.use .headeres .bao1 .footeres .tab .f12 .Right .foot .yue{font-size: .35rem;color:rgba(153,153,153,1);margin-top: .1rem}
.use .headeres .bao1 .bao2{margin-top: .2rem;width: 100%;background:  rgba(242,242,242,1);height: 1.3rem;}
.use .headeres .bao1 .bao2 .kuang{width: 100%;height: 1rem;overflow: hidden;background: #fff;}
.use .headeres .bao1 .bao2 .kuang .removes{margin-left: 1rem;float: left;width: 3.1rem;height: .8rem;border:.02rem solid rgba(35,183,172,1);font-size: .35rem;text-align: center;line-height: .8rem;border-radius: .5rem;color:rgba(35,183,172,1);}
.use .headeres .bao1 .bao2 .kuang .writes{margin-left: .1rem;float: left;width: 3rem;height: .8rem;border:.02rem solid rgba(35,183,172,1);font-size: .35rem;text-align: center;line-height: .8rem;border-radius: .5rem;color:rgba(35,183,172,1);}
.use .headeres .bao1 .bao2 .kuang .uses{float: left;margin-left: .1rem;;width: 2rem;height: .8rem;border:.02rem solid rgba(35,183,172,1);font-size: .35rem;text-align: center;line-height: .8rem;border-radius: .5rem;color:rgba(35,183,172,1);}
</style>
