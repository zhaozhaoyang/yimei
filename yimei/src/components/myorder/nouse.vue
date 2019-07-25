<template>
    <div class="use">
         <div class="headeres">
            <div class="bao1" v-for="(item,index) in newItem" :key="index">
                <div class="top">
                    <p class="order1">订单编号：{{item.ordernum}}</p>
                    <!-- <p class="order2" v-if="item.state == '1'">{{content}}</p> -->
                     <p class="order2">未使用</p>
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
                        <div class="pay">退款</div>
                        <div class="pay">去写术前日记</div>
                        <div class="pay">找医生安排手术</div>
                    </div>
                </div>
            </div>
            <!-- <div v-if="items && items.length==0" >
                暂无订单信息...
            </div> -->
        </div>
       
    </div>
</template>

<script>
export default {
    props:['items'],
    watch:{
        items(){
            this.newItem = this.items
        }
    },
    data(){
        return{
           newItem:[]
        }
    }
}
</script>

<style>
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
.use .headeres .bao1 .bao2{margin-top: .2rem;width: 100%;background:  rgba(242,242,242,1);height: 1.3rem;box-sizing: border-box;}
.use .headeres .bao1 .bao2 .kuang{width: 100%;height: 1.2rem;overflow: hidden;background: #fff;}
.use .headeres .bao1 .bao2 .kuang .removes{margin-left: 1rem;float: left;width: 3.1rem;height: .8rem;border:.02rem solid rgba(35,183,172,1);font-size: .35rem;text-align: center;line-height: .8rem;border-radius: .5rem;color:rgba(35,183,172,1);}
.use .headeres .bao1 .bao2 .kuang .writes{margin-left: .1rem;float: left;width: 3rem;height: .8rem;border:.02rem solid rgba(35,183,172,1);font-size: .35rem;text-align: center;line-height: .8rem;border-radius: .5rem;color:rgba(35,183,172,1);}
/* .use .headeres .bao1 .bao2 .kuang .uses{float: left;margin-left: .1rem;;width: 2rem;height: .8rem;border:.02rem solid rgba(35,183,172,1);font-size: .35rem;text-align: center;line-height: .8rem;border-radius: .5rem;color:rgba(35,183,172,1);} */
.use .headeres .bao1 .bao2 .kuang .pay{float: right;min-width: 1.8rem;height: 0.8rem;border:.02rem solid rgba(35,183,172,1);margin-top: .2rem;border-radius: 15px;margin-left: .2rem;text-align: center;line-height: .8rem;color:rgba(35,183,172,1);padding: 0 3px;}
</style>
