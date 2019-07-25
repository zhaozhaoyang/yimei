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
            <van-tab title="待写日记">
                <wait :items='items'/>
            </van-tab>
            <van-tab title="退款">
                <returns :items='items'/>
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
import { Tab, Tabs,Toast } from 'vant';
export default {
    components:{
        alls,
        pay,
        remove,
        nouse,
        returns,
        wait,
        jump,
        finish
    },
    data(){
        return {           
            uid:'',
            nowPage:'1',
            state:'',
            items:[],
            active:0,
            totalPage:1,
            flag:true,
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        if(this.$route.query.active){
            this.active = Number(this.$route.query.active)
            this.state = Number(this.$route.query.active)-1;
        }        
        this.all()
    },
    mounted(){
        this.$root.$on('all',this.all)
        window.addEventListener('scroll',this.scrollLoad,true)
    },    
    methods:{
        onChange(index){
            this.nowPage =1
            this.items = []

            if(index == '0'){
                this.state = ''
            }else{
                this.state = index-1
            }
            this.all()
        },
        // 获取数据
        all(){     
            if(this.nowPage>this.totalPage && this.nowPage !=1){
                Toast('没有更多数据了.')
                return;
            }
            Toast.loading({
                mask: false,
                message: '加载中...',
                loadingType:"spinner",
                duration:0
            })
            this.flag = false 
            let alls = {
                cmd:'myOrderList',
                uid:this.uid,
                state:this.state,
                nowPage:this.nowPage
            }
            console.log(alls)
            axios(alls).then(res=>{
                Toast.clear()
                this.flag = true 
                console.log(res)
                if(res.result == '0' && res.dataList){                    
                    this.totalPage = res.totalPage                    
                    this.items =[...this.items,...res.dataList] 
                    this.nowPage++

                }
            })
        },
        scrollLoad(){    
            this.$nextTick(() => {
            var scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
            var clientHeight=document.compatMode == "CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;
            var scrollHeight=document.body.scrollHeight|| document.documentElement.scrollHeight;
            //滚动的距离（动态） +  页面可视高度 （固定） 》= 页面总高度 （固定）
                if(scrollTop + (clientHeight - 0) >=scrollHeight - 0 && this.flag){    
                console.log('底部...')    
                this.all()          
                }
            })
        
      },
    },      
    destroyed() {
      window.removeEventListener('scroll',this.scrollLoad,true)
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
