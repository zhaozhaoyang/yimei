<template>
    <!-- <div class="swiper-box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                    <keep-alive>
                        <component :is="item.component"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div> -->
    <div>
        <van-swipe :loop='false' ref="sw" :show-indicators='false' @change='onChange'>
            <van-swipe-item  v-for="(item,index) in list" :key="index">
                <component :is="item.component"></component>
            </van-swipe-item>
        </van-swipe>        
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
import { Swipe, SwipeItem } from 'vant';
export default {
    props:['swiperIndex','data1'],
    components:{
        alls,
        pay,
        remove,
        nouse,
        returns,
        wait,
        jump,
        finish,

        'van-swipe':Swipe,
        'van-swipe-item':SwipeItem
    },
    watch:{
        swiperIndex(value,oldValue){
            // 接收nav组件传过来的导航按钮的索引值，跳转
            // this.mySwiper.slideTo(value,0,false)
            this.$refs.sw.swipeTo(value)	
            window.scrollTo({top:0,behavior: "smooth"})
        }
    },   
    created(){
        this.uid = localStorage.getItem('uid')
        // this.all()
    },
    mounted(){
        
    } ,
    data(){
        return {
            list:[
                {path:'/alls',component:'alls'},
                {path:'/pay',component:'pay'},
                {path:'/remove',component:'remove'},
                {path:'/nouse',component:'nouse'},
                {path:'/returns',component:'returns'},
                {path:'/wait',component:'wait'},
                {path:'/jump',component:'jump'},
                {path:'/finish',component:'finish'},                
            ],
            mySwiper:null,
            uid:'',
            nowPage:'1',
            state:'',
            items:[],
            content:'已完成',
            look:true,
            read:false,
            retda:false,
            pay:false,
            // 滑动
            transition:false,
            startX:0,
            moveX:0,
            x:0,
            pay:true,
            del:true
        }
    },
    methods:{
        onChange(index){
            // console.log(index)
            this.$store.commit('saveSwiperIndex',index)
        },
        // 获取数据
        all(){
            let alls = {
                cmd:'myOrderList',
                uid:this.uid,
                state:this.state,
                nowPage:this.nowPage
            }
            axios(alls).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                    // this.items = res.dataList
                }
            })
        },
    }
}
</script>

<style>
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
