<template>
    <div class="money">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>医美钱包</p>
        </div>
        <div class="bg">
            <img src="../common/images/img/pic/日记/图层2@1x.png" alt="">
            <div class="wordes">
                <p class="allover">总金额 (元)</p>
                <div class="before">
                    <div class="count">{{balance}}</div>
                    <div class="border" @click="cash">提现</div>
                </div>
            </div>
        </div>
        <!-- 账单记录 -->
        <div class="every">
            <p class="cont">账单记录：</p>
            <div class="allovers" v-for="(item,index) in types" :key="index" @click="know(htype)">
                <div class="up">
                    <p v-if="item.htype">{{content}}</p>
                    <p style="color:rgba(153,153,153,1);">{{item.time}}</p>
                </div>
                <div class="up">
                    <p style="color:rgba(153,153,153,1);">余额：{{item.balance}}</p>
                    <p>-{{item.money}}</p>
                </div>
            </div>
            <!-- <div class="all">
                <div class="up">
                    <p>退款</p>
                    <p style="color:rgba(153,153,153,1);">2019-03-05 15:20:12</p>
                </div>
                <div class="up">
                    <p style="color:rgba(153,153,153,1);">余额：500</p>
                    <p>-60</p>
                </div>
            </div>
            <div class="all">
                <div class="up">
                    <p>日记返款</p>
                    <p style="color:rgba(153,153,153,1);">2019-03-05 15:20:12</p>
                </div>
                <div class="up">
                    <p style="color:rgba(153,153,153,1);">余额：500</p>
                    <p>-60</p>
                </div>
            </div>
            <div class="all">
                <div class="up">
                    <p>好友消费返款</p>
                    <p style="color:rgba(153,153,153,1);">2019-03-05 15:20:12</p>
                </div>
                <div class="up">
                    <p style="color:rgba(153,153,153,1);">余额：500</p>
                    <p>-60</p>
                </div>
            </div>
            <div class="all">
                <div class="up">
                    <p>预付款</p>
                    <p style="color:rgba(153,153,153,1);">2019-03-05 15:20:12</p>
                </div>
                <div class="up">
                    <p style="color:rgba(153,153,153,1);">余额：500</p>
                    <p>-60</p>
                </div>
            </div>
            <div class="all">
                <div class="up">
                    <p>打赏</p>
                    <p style="color:rgba(153,153,153,1);">2019-03-05 15:20:12</p>
                </div>
                <div class="up">
                    <p style="color:rgba(153,153,153,1);">余额：500</p>
                    <p>-60</p>
                </div>
            </div>
            <div class="all">
                <div class="up">
                    <p>被打赏</p>
                    <p style="color:rgba(153,153,153,1);">2019-03-05 15:20:12</p>
                </div>
                <div class="up">
                    <p style="color:rgba(153,153,153,1);">余额：500</p>
                    <p>-60</p>
                </div>
            </div> -->
        </div>
        <!--  -->
    </div>
</template>

<script>
import axios from '../axios'
import { constants } from 'crypto';
export default {
    data(){
        return {
            uid:'',
            nowPage:'1',
            items:[],
            types:[],
            balance:null,
            content:'预付款',
            billid:'',
            htype:''
        }
    },
    methods:{
        // 跳转页面
        back(){
            this.$router.push('/my')
        },
        cash(){
            this.$router.push({path:'/cash',query:{balance:this.balance}})
        },
        // 获取数据
        all(){
            let every = {
                cmd:'getBillList',
                uid:this.uid,
                nowPage:this.nowPage
            }
            axios(every).then(res => {
                if(res.result == '0'){
                    for(var i = 0;i<res.dataList.length;i++){
                        this.items = res.dataList[i]
                        // console.log(this.items)
                    }
                    this.types = res.dataList
                    this.hole()
                }
            })
        },
        // 类型
        hole(){
            for(var i = 0;i<this.types.length;i++){
                console.log(this.types[i].htype)
                if(this.types[i].htype == '0'){
                    this.content = this.content
                }else if(this.types[i].htype == '1'){
                    this.content = '退款'
                }else if(this.types[i].htype == '2'){
                    this.content = '日记返款'
                }else if(this.types[i].htype == '3'){
                    this.content = '打赏'
                }else if(this.types[i].htype == '4'){
                    this.content = '被打赏'
                }else if(this.types[i].htype == '5'){
                    this.content = '申请提现'
                }else if(this.types[i].htype == '6'){
                    this.content = '提现失败'
                }else if(this.types[i].htype == '7'){
                    this.content = '一代好友返现'
                }else if(this.types[i].htype == '8'){
                    this.content = '二代好友返现'
                }
            }            
        },
        // 账单明细
        know(htype){
            // let understand = {
            //     cmd:'getBillList',
            //     uid:this.uid,
            //     billid:this.types.billid,
            //     htype:this.types.htype
            // }
            // axios(understand).then(res => {
            //     console.log(res)
            // })
        },
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.balance = this.$route.query.balance
        // console.log(this.$route.query.balance)
        this.all()
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.money{font-family: 'PingFang-SC-Bold';width: 100%;background: #fff;height: 100%;}
.money .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.money .Title img{float: left;margin-left: .25rem;margin-top: .5rem}
.money .Title p{float: left;margin-left: 35%}
.money .bg{margin-top: 1.8rem;margin-left: .35rem;position: relative;}
.money .bg .wordes{width: 90%;position: absolute;top:0;left: 0;color:#fff;margin-left: .3rem;}
.money .bg .wordes .allover{font-size: .4rem;margin-top:.4rem;}
.money .bg .wordes .before{overflow: hidden;}
.money .bg .wordes .before .count{float: left;;font-size: .8rem;margin-top:.4rem;}
.money .bg .wordes .before .border{float: left;margin-top: .4rem;margin-left: 2.8rem;width: 1.8rem;height: .8rem;border:.02rem solid #fff;font-size: .38rem;text-align: center;line-height: .8rem;border-radius: .5rem;}
.money .every{width: 95%;margin-left: .25rem;margin-top: .5rem;}
.money .every .cont{font-size: .4rem;font-weight: 500;color:rgba(17,17,17,1);}
.money .every .allovers{height: 1.5rem;width: 100%;border-bottom: .01rem solid rgba(226,226,226,1)}
.money .every .allovers .up{display: flex;justify-content: space-between;margin-top: .3rem;font-size: .35rem;}
</style>

