<template>
     <div class="pay ">
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
                                <div class="contentUB">
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
                        <div class="removes" @click="quxiao(item.ordernum)">取消订单</div>
                        <div class="pay" @click="gopay(item.ordernum)">去付款</div>
                    </div>
                </div>
            </div>
            <!-- <div v-if="items.length==0" style="width:100vw;text-align:center;line-height:50px;">
                暂无订单信息...
            </div> -->
        </div>
        <van-popup
        v-model="quxiaoShow"
        position="bottom"
        :style="{ height: '33%' }"
        >
            <van-radio-group v-model="radio">
                <van-cell-group>
                    <van-cell title="不想做了" clickable @click="radio = '1'">
                        <van-radio slot="right-icon" name="1" />
                    </van-cell>
                    <van-cell title="太贵了" clickable @click="radio = '2'">
                        <van-radio slot="right-icon" name="2" />
                    </van-cell>
                    <van-cell title="感觉不安全" clickable @click="radio = '3'">
                        <van-radio slot="right-icon" name="3" />
                    </van-cell>
                    <van-cell title="其他原因" clickable @click="radio = '4'">
                        <van-radio slot="right-icon" name="4" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
            <p class="confirm" @click="confirm">确定</p>
        </van-popup>
    </div>
</template>

<script>
import { Toast } from 'vant';
import axios from '../../axios'
export default {
    props: ['items'],
    data(){
        return {
            uid:'',
            state:'0',
            nowPage:'1',
            content:'待付款',
            quxiaoShow:false,
            radio:0,
            reason:['不想做了' ,'太贵了','感觉不安全','其他原因'],
            ordernum:'',
            cmd:''
        }
    },
    methods:{
        gopay(onum){
            let ord = {
                cmd:'myOrderDetail',
                uid:localStorage.getItem('uid'),
                ordernum:onum
            }
            axios(ord).then(res=>{
                if(res.result == '0'){
                    var dataobject = res.dataobject
                    this.$router.push({
                        name:'sureorder',
                        params:{dataobject:JSON.stringify(dataobject),ordernum:onum}
                    });
                }
            })
            
        },
        confirm(){
            if(this.radio==0){                
                Toast('请选择原因')
                return;
            }
            this.quxiaoShow = false   
            let params = {cmd:this.cmd,uid:localStorage.getItem('uid'),ordernum:this.ordernum ,reason:this.reason[this.radio-1]}
            console.log(params)
            axios(params).then(res=>{ 
                console.log(res)          
                if(res.result == '0'){
                    if(this.cmd == 'cancelOrder'){
                        Toast('成功取消')
                    }else{
                        Toast('成功申请退款')
                    }                     
                    this.$root.$emit('all')
                }
            })
        },
        quxiao(onum){
           this.ordernum = onum        
           this.quxiaoShow = true 
           this.cmd = 'cancelOrder'  
        },
    },
     created(){
        this.uid = localStorage.getItem('uid')        
        // this.all()
    }

}
</script>

<style>
.pay  .headeres .bao1{background: #fff;}
.pay  .headeres .bao1 .top{width: 95%;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 1rem}
.pay  .headeres .bao1 .top .order1{font-weight:400;color:rgba(51,51,51,1);font-size:.4rem}
.pay  .headeres .bao1 .top .order2{color:rgba(255,0,74,1);font-size:.4rem;}
.pay  .headeres .bao1 .footeres{width: 100%;height: auto;}
.pay  .headeres .bao1 .footeres .tab{width: 95%;margin-left: .25rem}
.pay  .headeres .bao1 .footeres .tab .f12{border-bottom:.01rem solid rgba(229,229,229,1);overflow: hidden;}
.pay  .headeres .bao1 .footeres .tab .f12 img{width: 3rem;height: 3rem;float: left;}
.pay  .headeres .bao1 .footeres .tab .f12 .Right{float: left;margin-left: .1rem;height: 3.2rem;width: 6rem}
.pay  .headeres .bao1 .footeres .tab .f12 .Right .ttitle{font-size: .4rem;width: 6.3rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.pay  .headeres .bao1 .footeres .tab .f12 .Right .contentUB{width: 6rem;font-size: .33rem;color:rgba(102,102,102,1);margin-top: .3rem;margin-left: .2rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.pay  .headeres .bao1 .footeres .tab .f12 .Right .foot{margin-top: .3rem;width: 5.8rem;display: flex;justify-content: space-between;margin-left: .2rem}
.pay  .headeres .bao1 .footeres .tab .f12 .Right .foot .money{font-size: .38rem;color:rgba(255,0,74,1);}
.pay  .headeres .bao1 .footeres .tab .f12 .Right .foot .money .price{font-size: .5rem}
.pay  .headeres .bao1 .footeres .tab .f12 .Right .foot .yue{font-size: .35rem;color:rgba(153,153,153,1);margin-top: .1rem}
.pay  .headeres .bao1 .bao2{width: 100%;background: #fff;height: 1.5rem;background: rgba(242,242,242,1);}
.pay  .headeres .bao1 .bao2 .kuang{width: 100%;overflow: hidden;background: #fff;height: 1.2rem;;}
.pay  .headeres .bao1 .bao2 .kuang .removes{float: left;width: 1.8rem;height: 0.8rem;border:.02rem solid rgba(35,183,172,1);margin-top: .2rem;border-radius: 15px;margin-left: 5.5rem;text-align: center;line-height: .8rem;color:rgba(35,183,172,1);color:rgba(35,183,172,1);}
.pay  .headeres .bao1 .bao2 .kuang .pay{float: left;width: 1.8rem;height: 0.8rem;border:.02rem solid rgba(35,183,172,1);margin-top: .2rem;border-radius: 15px;margin-left: .2rem;text-align: center;line-height: .8rem;color:rgba(35,183,172,1);}
</style>
