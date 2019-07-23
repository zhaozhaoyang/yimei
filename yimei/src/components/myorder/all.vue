<template>
    <div>
        <van-tabs v-model="active" swipeable  sticky  @change="onChange">
            <van-tab title="全部">
               <alls :items='items'></alls>
            </van-tab>
            <van-tab title="待付款">
               <pay :items='items'></pay>
            </van-tab>
            <van-tab title="取消订单">
                <remove :items='items'/>
            </van-tab>
            <van-tab title="未使用">
                <nouse  :items='items'/>
            </van-tab>
            <van-tab title="退款">
                <returns :items='items'/>
            </van-tab>
            <van-tab title="待写日记">
                <wait :items='items'/>
            </van-tab>
            <van-tab title="申诉">
                <jump :items='items'/>
            </van-tab>
            <van-tab title="已完成">
                <finish :items='items'/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import axios from '../../axios'
import alls from './alls'
import pay from './pay'
import remove from './remove'
import nouse from './nouse'
import returns from './returns'
import wait from './wait'
import jump from './jump'
import finish from './finish'
import { finished } from 'stream';
import { Tab, Tabs } from 'vant';
export default {
    components:{
        alls,
        pay,
        remove,
        nouse,
        returns,
        wait,
        jump,
        finish,

        'van-tab':Tab,
        'van-tabs':Tabs
    },
    data(){
        return {           
            uid:'',
            nowPage:'1',
            state:'',
            items:[],
            active:0
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.all()
    },
    mounted(){
       
    },    
    methods:{
        onChange(index){
            if(index == '0'){
                this.state = ''
            }else{
                this.state = index-1
            }
            this.all()
        },
        // 获取数据
        all(){
            let alls = {
                cmd:'myOrderList',
                uid:this.uid,
                state:this.state,
                nowPage:this.nowPage
            }
            console.log(alls)
            axios(alls).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                    this.items = res.dataList
                }
            })
        }
    }
}
</script>

<style>
.van-swipe-item{
    height: calc(100vh - 2rem)!important;overflow-y: scroll;
}
.on{transition: all 1s}
.finish .header .top{width: 95%;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 1rem;}
.finish .header .footer{width: 100%;height: auto;position: relative;}
.finish .header .footer .tab{position: absolute;left: 0;;width: 100%;}
.finish .header .footer .tab .f1{width: 95%;height: 3rem;display: flex;justify-content: space-between;margin-left: .25rem;border-bottom: .01rem solid rgba(240,240,240,1)}
.finish .header .footer .tab .f1 img{height: 2.7rem;}
.finish .header .footer .tab .f1 .Right{width: 6.4rem;margin-left: .25rem;}
.finish .header .footer .tab .f1 .Right .ttitle{font-size:.38rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.finish .header .footer .tab .f1 .Right .content{padding-top: .4rem;font-size: .28rem;color:rgba(102,102,102,1);}
.finish .header .footer .tab .f1 .Right .foot{padding-top: .4rem;}
.finish .header .footer .tab .f1 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.finish .header .footer .tab .f1 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.finish .header .footer .tab .f1 .Right .foot .yue{padding-left: 2.75rem;color:rgba(102,102,102,1);font-size: .28rem;}
.finish .header .bao{margin-top: 3.2rem;width: 100%;background:  rgba(242,242,242,1);height: 1.5rem;}
.finish .header .bao .kuang{width: 100%;height: 1.2rem;overflow: hidden;background: #fff;}
.finish .header .bao .kuang .use{float: left;margin-left: 6.5rem;width: 2.5rem;height: 1rem;border:.02rem solid rgba(35,183,172,1);font-size: .4rem;text-align: center;line-height: 1rem;border-radius: .5rem;color:rgba(35,183,172,1);}

.finish .header .bao .kuang .remove{margin-left: 4rem;float: left;width: 2.5rem;height: 1rem;border:.02rem solid rgba(35,183,172,1);font-size: .4rem;text-align: center;line-height: 1rem;border-radius: .5rem;color:rgba(35,183,172,1);}
.finish .header .bao .kuang .pay{margin-left: .5rem;float: left;width: 2.5rem;height: 1rem;border:.02rem solid rgba(35,183,172,1);font-size: .4rem;text-align: center;line-height: 1rem;border-radius: .5rem;color:rgba(35,183,172,1);}
</style>
