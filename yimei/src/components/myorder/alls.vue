<template>
    <div class="alls">
        <div class="headeres">
            <div class="bao1" v-for="(item,index) in items" :key="index">
                <div class="top">
                    <p class="order1">订单编号：{{item.ordernum}}</p>
                    <p class="order2" v-if="item.state">{{content}}</p>
                </div>
                <div class="footeres">
                    <div class="tab">
                        <div class="f12">
                            <img :src="item.proimage" alt>
                            <div class="Right">
                                <div class="ttitle">【{{item.classname}}】{{item.proname}}</div>
                                <div class="contentDoc">
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
        </div>
        <!-- <div class=.headeres">
            <div class="bao1">
                <div class="top">
                    <p class="order1">订单编号：20181113051325</p>
                    <p class="order2">待付款</p>
                </div>
                <div class="footer">
                    <div class="tab">
                        <div class="f1">
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
                <div class=.bao1">
                    <div class="kuang">
                        <div class="removes">取消订单</div>
                        <div class="pay">去付款</div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import bus from '../../bus'
import axios from '../../axios'
import { constants } from 'crypto';
export default {
    name:"alls",
    data(){
        return {
            uid:'',
            state:'',
            nowPage:'1',
            items:[],
            content:'',
            pageCount:'50'
        }
    },
    methods:{
        // 获取数据
        all(){
            let alls = {
                cmd:'myOrderList',
                uid:this.uid,
                state:'',
                nowPage:this.nowPage,
                pageCount:this.pageCount
            }
            axios(alls).then(res=>{
                if(res.result == '0'){
                    // console.log(res)
                    console.log(54)
                    this.items = res.dataList
                    this.length = this.items.length
                    localStorage.setItem("length",this.items.length);
                    for(var i = 0;i<this.items.length;i++){
                        // console.log(this.items[i].state)
                        if(this.items[i].state == 0){
                            this.content =  '待付款';
                            // this.look = true
                        }else if(this.items[i].state == '1'){
                            this.content = '取消订单'
                        }else if(this.items[i].state == '2'){
                            this.content = '未使用'
                            // this.retda = true
                        }else if(this.items[i].state == '3'){
                            this.content = '待写日记'
                            // this.read = true
                        }else if(this.items[i].state == '4'){
                            this.content = '退款中'
                            // this.look = true
                        }else if(this.items[i].state == '5'){
                            this.content = '已退款'
                            // this.look = true
                        }else if(this.items[i].state == '6'){
                            this.content = '已完成'
                            // this.pay = true
                        }else if(this.items[i].state == '7'){
                            this.content = '已申诉'
                            // this.look = true
                        }else if(this.items[i].state == '8'){
                            this.content = '已处理'
                            // this.look = true
                        }
                    }
                }
            })
        },
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.all()
    }
}
</script>

<style>
.alls{height: 100vh;}
.alls .headeres .bao1{background: #fff;}
.alls .headeres .bao1 .top{width: 95%;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 1rem}
.alls .headeres .bao1 .top .order1{font-weight:400;color:rgba(51,51,51,1);font-size:.4rem}
.alls .headeres .bao1 .top .order2{color:rgba(255,0,74,1);font-size:.4rem;}
.alls .headeres .bao1 .footeres{width: 100%;height: auto;}
.alls .headeres .bao1 .footeres .tab{width: 95%;margin-left: .25rem}
.alls .headeres .bao1 .footeres .tab .f12{border-bottom:.01rem solid rgba(229,229,229,1);overflow: hidden;}
.alls .headeres .bao1 .footeres .tab .f12 img{width: 3rem;height: 3rem;float: left;}
.alls .headeres .bao1 .footeres .tab .f12 .Right{float: left;margin-left: .1rem;height: 3.2rem;width: 6rem}
.alls .headeres .bao1 .footeres .tab .f12 .Right .ttitle{font-size: .4rem;width: 6.3rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.alls .headeres .bao1 .footeres .tab .f12 .Right .contentDoc{width: 6rem;font-size: .33rem;color:rgba(102,102,102,1);margin-top: .3rem;margin-left: .2rem;}
.alls .headeres .bao1 .footeres .tab .f12 .Right .foot{margin-top: .3rem;width: 5.8rem;display: flex;justify-content: space-between;margin-left: .2rem}
.alls .headeres .bao1 .footeres .tab .f12 .Right .foot .money{font-size: .38rem;color:rgba(255,0,74,1);}
.alls .headeres .bao1 .footeres .tab .f12 .Right .foot .money .price{font-size: .5rem}
.alls .headeres .bao1 .footeres .tab .f12 .Right .foot .yue{font-size: .35rem;color:rgba(153,153,153,1);margin-top: .1rem}
.alls .headeres .bao1 .bao2{width: 100%;background: #fff;height: 1.5rem;background: rgba(242,242,242,1);}
.alls .headeres .bao1 .bao2 .kuang{width: 100%;overflow: hidden;background: #fff;height: 1.2rem;;}
.alls .headeres .bao1 .bao2 .kuang .removes{float: left;width: 1.8rem;height: 0.8rem;border:.02rem solid rgba(35,183,172,1);margin-top: .2rem;border-radius: 15px;margin-left: 5.5rem;text-align: center;line-height: .8rem;color:rgba(35,183,172,1);color:rgba(35,183,172,1);}
.alls .headeres .bao1 .bao2 .kuang .pay{float: left;width: 1.8rem;height: 0.8rem;border:.02rem solid rgba(35,183,172,1);margin-top: .2rem;border-radius: 15px;margin-left: .2rem;text-align: center;line-height: .8rem;color:rgba(35,183,172,1);}
</style>    