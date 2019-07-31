<template>
    <div class="myorder">
        <div class="Title">
            <div class="head">
                <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
                <p>我的订单</p>
            </div>
            <!-- <v-nav @changeTab="clickIndex" :swiperSendIndex="swiperToNav"></v-nav> -->
        </div>
        <all class="box" :swiperIndex="slideIndex" @slideTab="slideSendNav" :data1="list"></all>
    </div>
</template>

<script>
import $ from 'jquery'
import axios from '../axios'
import all from '@/components/myorder/all'
import vNav from '@/components/myorder/nav'
import { Toast } from 'vant';
export default {
    data(){
        return {
            show:true,
            uid:'',
            state:  '',
            nowPage:'1',
            list:[],
            // items:'待付款',
            swiperToNav:0,//点击导航发送的值
            slideIndex:0,//swiper滑动时将值传给nav导航
        }
    },
    mounted(){
        this.swiperToNav = this.$store.state.navInde
        this.slideIndex = this.$store.state.swiperIndex
    },
    created(){
        this.uid = localStorage.getItem('uid')
        if(localStorage.getItem("uid")=='' || localStorage.getItem("uid")==null){
            Toast('请登录！');
            this.$router.push('/login')
            return;
        }
        this.move()

    },
    watch:{
        // 监听导航传给swiper的时候，将数据传给父亲的时候参数的变化
        slideIndex(value,oldVaule){
            // swiper滑动下标值传给nav导航，让导航下标和swiper下表一致
            this.swiperNav = value
        },
        swiperNav(value,oldVaule){
            // 点击导航发送给swiper的值，让导航下标和swiper下表一致
            this.slideIndex = value
        }
    },
    // beforeRouteLeave:function(to, from, next){
    //     console.log(to)
    // },
    methods:{
        move(){
            let order = {
                cmd:'myOrderList',
                uid:this.uid,
                state:this.state,
                nowPage:this.nowPage
            }
            axios(order).then(res=>{
                if(res.result == '0'){
                    this.list = res.dataList
                    // console.log(res)
                }
            })
        },
        // 点击导航通过emit传给父亲然后父亲在传给儿子的swiper组件
        clickIndex(index){
            console.log('导航下标',index)
            this.slideIndex = index
            this.$store.commit('saveNavIndex',index)
            
        },
        // swiper滑动后下标通过emit传给父亲，父亲在传给儿子的nav组件
        slideSendNav(index){
            console.log('swiper传的下标',index)
            this.swiperToNav = index
            this.$store.commit('saveNavIndex',index)
        },
        back(){
            this.$router.push('/my')
        }
        // order(){
        //     for(var i = 0;i<this.list.length;i++){
        //         this.$router.push({path:'/odetail',query:{ordernum:this.list[i].ordernum}})
        //     }
        // }
    },    
    components:{
        all,
        vNav
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.box{position: relative;left: 0;background: rgba(242,242,242,1);}
.myorder{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.myorder .Title{width: 100%;height: 1.2rem;text-align: center;line-height: 1.2rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.myorder .Title .head{overflow: hidden;width: 100%;}
.myorder .Title .head img{float: left;margin-left: .25rem;margin-top: .5rem}
.myorder .Title .head span{float: left;}
.container{height: auto;margin-top: 1.5rem;}
.container .wrapper{height: auto;}
.container .wrapper .header{width: 100%;}

.container .slide .top{width: 95%;margin-left: .25rem;display: flex;justify-content:space-between;height: 1rem;line-height: 2rem;margin-top: .2rem}
.container .slide .footer{width: 100%;height: auto;position: relative;}
.container .slide .footer .tab{position: absolute;top:.4rem;left: 0;;width: 100%;}
.container .slide .footer .tab .transition .f1{width: 9.5rem;height: 3rem;display: flex;justify-content: space-between;margin-left: .25rem;}
.container .slide .footer .tab .transition .f1 img{height: 2.7rem;}
.container .slide .footer .tab .transition .f1 .Right{width: 6.4rem;margin-left: .25rem;}
.container .slide .footer .tab .transition .f1 .Right .ttitle{font-size:.38rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.container .slide .footer .tab .transition .f1 .Right .content{padding-top: .2rem;font-size: .28rem;color:rgba(102,102,102,1);}
.container .slide .footer .tab .transition .f1 .Right .foot{padding-top: .2rem;}
.container .slide .footer .tab .transition .f1 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.container .slide .footer .tab .transition .f1 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.container .slide .footer .tab .transition .f1 .Right .foot .yue{padding-left: 2.75rem;color:rgba(102,102,102,1);font-size: .28rem;}
.container .slide .bao{margin-top: 3.5rem;width: 10rem;background:  rgba(242,242,242,1);height: 1.5rem;}
.container .slide .bao .kuang{width: 100%;height: 1.2rem;overflow: hidden;background: #fff;}
.container .slide .bao .kuang .remove{margin-left: 4rem;float: left;width: 2.5rem;height: 1rem;border:.02rem solid rgba(35,183,172,1);font-size: .4rem;text-align: center;line-height: 1rem;border-radius: .5rem;color:rgba(35,183,172,1);}
.container .slide .bao .kuang .pay{float: left;margin-left: .3rem;;width: 2.5rem;height: 1rem;border:.02rem solid rgba(35,183,172,1);font-size: .4rem;text-align: center;line-height: 1rem;border-radius: .5rem;color:rgba(35,183,172,1);}
</style>
