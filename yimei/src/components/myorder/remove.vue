<template>
    <div class="remove">
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
                                <div class="contentIB">
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
            <!-- <div v-if="items.length==0" style="height:100px;width:100vw;">
                暂无订单信息...
            </div> -->
        </div>
    </div>
</template>

<script>
import axios from '../../axios'
export default {
    data(){
        return {
            uid:'',
            state:'',
            nowPage:'1',
            content:'已取消'
        }
    },
    props:['items'],
    methods:{
        // 获取数据
        // all(){
        //     let alls = {
        //         cmd:'myOrderList',
        //         uid:this.uid,
        //         state:this.state,
        //         nowPage:this.nowPage
        //     }
        //     axios(alls).then(res=>{
        //         if(res.result == '0'){
        //             console.log(res)
        //             for(var i = 0;i<res.dataList.length;i++){
        //                 if(res.dataList[i].state == '1'){
        //                     // console.log(res.dataList[i].state)
        //                     this.items = res.dataList
        //                     console.log(this.items)
        //                 }
        //             }
                    
        //         }
        //     })
        // }
    },
     created(){
        this.uid = localStorage.getItem('uid')
        // this.all()
    }

}
</script>

<style>
.remove{height: 100vh;}
.remove .headeres .bao1{background: #fff;}
.remove .headeres .bao1 .top{width: 95%;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 1rem}
.remove .headeres .bao1 .top .order1{font-weight:400;color:rgba(51,51,51,1);font-size:.4rem}
.remove .headeres .bao1 .top .order2{color:rgba(255,0,74,1);font-size:.4rem;}
.remove .headeres .bao1 .footeres{width: 100%;height: auto;}
.remove .headeres .bao1 .footeres .tab{width: 95%;margin-left: .25rem}
.remove .headeres .bao1 .footeres .tab .f12{border-bottom:.01rem solid rgba(229,229,229,1);overflow: hidden;}
.remove .headeres .bao1 .footeres .tab .f12 img{width: 3rem;height: 3rem;float: left;}
.remove .headeres .bao1 .footeres .tab .f12 .Right{float: left;margin-left: .1rem;height: 3.2rem;width: 6rem}
.remove .headeres .bao1 .footeres .tab .f12 .Right .ttitle{font-size: .4rem;width: 6rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.remove .headeres .bao1 .footeres .tab .f12 .Right .contentIB{width: 6rem;font-size: .33rem;color:rgba(102,102,102,1);margin-top: .3rem;margin-left: .2rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.remove .headeres .bao1 .footeres .tab .f12 .Right .foot{margin-top: .3rem;width: 5.8rem;display: flex;justify-content: space-between;margin-left: .2rem}
.remove .headeres .bao1 .footeres .tab .f12 .Right .foot .money{font-size: .38rem;color:rgba(255,0,74,1);}
.remove .headeres .bao1 .footeres .tab .f12 .Right .foot .money .price{font-size: .5rem}
.remove .headeres .bao1 .footeres .tab .f12 .Right .foot .yue{font-size: .35rem;color:rgba(153,153,153,1);margin-top: .1rem}
.remove .headeres .bao1 .bao2{width: 100%;background: #fff;height: 1.5rem;background: rgba(242,242,242,1);}
.remove .headeres .bao1 .bao2 .kuang{width: 100%;overflow: hidden;background: #fff;height: 1.2rem;;}
.remove .headeres .bao1 .bao2 .kuang .removes{float: left;width: 1.8rem;height: 0.8rem;border:.02rem solid rgba(35,183,172,1);margin-top: .2rem;border-radius: 15px;margin-left: 5.5rem;text-align: center;line-height: .8rem;color:rgba(35,183,172,1);color:rgba(35,183,172,1);}
.remove .headeres .bao1 .bao2 .kuang .pay{float: left;width: 1.8rem;height: 0.8rem;border:.02rem solid rgba(35,183,172,1);margin-top: .2rem;border-radius: 15px;margin-left: .2rem;text-align: center;line-height: .8rem;color:rgba(35,183,172,1);}
</style>  
