<template>
<div class="views">
    <!-- 开头开始 -->
    <div class="Ttitlej">
        <p>首页</p>
    </div>
    <div class="Heard">
        <div class="Heard-intro">
            <div class="starbig">{{items.message1}}</div>
            <div>{{items.message2}}</div>
            <div class="leave">{{items.message3}}</div>
        </div>
        <div class="followb">
            <img src="../common/images/img/ios/1/ios/shouye/组125@1x.png" alt="">
            <div class="titlepq">{{items.message4}}</div> 
            <div class="detail">
                <div>{{items.message5}}</div>
                <div style="margin-left:-1.6rem;margin-top:.1rem;">{{items.message6}}</div>
            </div>
        </div>
        <div class="human" @click="rich">
            <img :src="items.doctorimage" alt="">
            <div class="right">
                <div class="titlejq">{{items.doctormessage1}}</div>
                <div class="detaila">
                    <div>美容外科主诊医师</div>
                    <div>整形外科副主任医师</div>
                    <div>国际医疗整形美容协会会员</div>
                    <div>上海丽园医疗美容门诊部院长</div>
                </div>
                <p class="messageqq">查看更多</p>
            </div>
        </div>

    <!-- 轮播图开始 -->
        <swiper :options="swiperOption" class="s1">
            <swiper-slide v-for="(item,index) in items.imagelist" :key="item.id">
                <img :src="items.imagelist[index]" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    <!-- 轮播图结束 -->
    </div>
    <!-- 开头结束 -->

    <div class="wrapper">
        
    <!-- 富文本开始 -->
        <div class="text">
            <div class="bg1">
                <div>{{items.message7}}</div>
                <div>{{items.message8}}</div>
                <span class="skip">
                    <p @click="share">《分享成交奖励规则》</p>
                    <p @click="daiary">《发布日记奖励规则》</p>
                </span>
            </div>
            <div class="bg2">
                <div>{{items.message9}}</div>
                <p @click="rule">《营销股东规则》</p>
            </div>
            <div class="bg3">
                <div>{{items.message10}}</div>
                <div class="info">
                    <p @click="know">《术前共同须知》</p>
                    <p @click="common">《术后共同须知》</p>
                    <p @click="flag">《医美风险》</p>
                    <p @click="mouse">《医美陷阱》</p>
                    <p @click="point">《消费指导》</p>
                </div>
            </div>
            <div class="bg4">
                <div>{{items.message11}}</div>
                <div class="tsitle">{{items.message12}}{{items.message13}}</div>
                <div class="info">
                    <p  @click="make">《平台交易规则》</p>
                    <p  @click="settle">《医生入驻规则》</p>
                </div>
            </div>
            <div class="bg5">
                <div>联系我们</div>
                <p>电话及微信号：<a :href="'tel:' + items.message14" style="color:#333;text-decoration:none;">{{items.message14}}<img src="../common/images/img/pic/预购/资源11@2x@1x.png" alt=""></a></p>
                <p>平台系统咨询及投诉：{{items.message16}}</p>
            </div>
        </div>
    </div>
    <!-- 富文本结束 -->
    <!-- tab切换开始 -->
    <div class="bto" style="width:100%;display:flex;justify-content:center;">
        <bottom-box style="background:linear-gradient(0deg,rgba(255,255,255,1),rgba(248,248,248,1));margin-top:-1.5rem;width:905rem;"></bottom-box>
    </div>
    <!--  -->
    <!-- 底部导航 -->
    <div class="fot">
        <router-link to="/index" class="bao" style="margin-left:1.5rem">
            <img src="../common/images/img/pic/tab/组131@3x.png" alt="">
            <p>首页</p>
        </router-link>
        <router-link to="/advance" class="bao">
            <img src="../common/images/img/pic/tab/资源14@2x@1x.png" alt="">
            <p>预购</p>
        </router-link>
        <router-link to="/my" class="bao">
            <img src="../common/images/img/pic/tab/资源13@2x@1x.png" alt="">
            <p>我的</p>
        </router-link>
    </div>
    <!--  -->
</div>
</template>

<script>
import bottomBox from '@/views/Index/bottom.vue'
import axios from '../axios'
export default {
    components:{
        bottomBox
    },
    // beforeRouteLeave:function(to, from, next){
    //   console.log(to)
        // doctordescurl
    // },
    name: 'HomeSwiper',
    data: function () {
        return {
            //轮播图
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
                autoplay: true

            },
            items:[],
            url:''
        }
    },
    methods:{
        path(){
            window.location.href = "http://122.114.49.242/plastic/display/doctordesc?id=1"
        },
        share(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=2"
        },
        daiary(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=1"
        },
        rule(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=3"
        },
        know(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=4"
        },
        common(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=5"
        },
        flag(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=6"
        },
        mouse(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=7"
        },
        point(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=8"
        },
        make(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=9"
        },
        settle(){
            window.location.href = "http://122.114.49.242/plastic/display/agreement?id=10"
        },
        rich(){
            window.location.href = this.url
        }
    },
    created(){
        axios({cmd:'homePage'}).then(res=>{
            // console.log(res)
            if(res.result == '0'){
                this.items = res.dataobject
                this.url = res.dataobject.doctordescurl
            }
        })
        let params = {
            cmd:'userInfo',
            uid:localStorage.getItem("uid")
        }
        axios(params).then(res => {
            if(res.result == '0'){
                window.sessionStorage.setItem('userInfo',JSON.stringify(res.dataobject))
            }
        })
    }
};
</script>

<style>
*{margin: 0;padding: 0;}
.Heard{position: relative;text-align: center;background: #fff;font-family:'PingFang-SC-Regular';}
.Ttitlej {position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;}
.Ttitlej p{text-align: center;}
.Heard-intro{margin-left: .25rem;width: 7.5rem;position: relative;top: 1.5rem;left: 10%;text-align: center;font-size:.28rem;font-weight:400;color:rgba(17,17,17,1);}
.Heard-intro div{line-height: .65rem;font-size: .28rem;color: #636363}
.Heard-intro .starbig{font-size: .4rem;font-weight: 540;color: rgba(17, 17, 17, 1)}
.Heard-intro .leave{position: absolute;left: 2.7rem;}
.followb{margin-left: .25rem;position: relative;top: 2.2rem;width: 95%;height: 2.5rem;font-family:'PingFang-SC-Medium';border-radius:.1rem;font-family:'PingFang-SC-Medium';}
.followb img{width: 100%;height: 100%;}
.followb .titlepq{position:absolute;top:.5rem;left:.5rem;font-size:.4rem;font-weight:549;    font-family: 'PingFang-SC-Regular';}
.followb .detail{position:absolute;top:1.15rem;left:0;line-height:.4rem;font-size:.3rem;font-weight:500;width: 80%;color: #636363}
.human{margin-left: .25rem;position: relative;top: 2.5rem;width: 95%;height: 3.2rem;background:rgba(255,255,255,1);box-shadow:0 0 .1rem 0 rgba(201,201,201,0.38);border-radius:.1rem;display: flex;justify-content: space-between;}
.human img{width: 2.3rem;height: 2.3rem;margin-top: .3rem;margin-left: 1rem;}
.human .right div{position: relative;top: .5rem;color: #636363}
.human .right .titlejq{position:absolute;left:4rem;top:.2rem;font-size:.4rem;font-weight:549;color:rgba(17,17,17,1);}
.human .right .detaila{position:absolute;left:4rem;top:.4rem;font-size: .28rem;text-align: left;}
.human .right .messageqq{position: absolute;left: 7rem;bottom:0;color:rgba(35,183,172,1);font-size: .35rem}
/* .s1{margin-top: 9rem;} */
.swiper-pagination-bullet-active{background: #fff;}
.swiper-img{width: 100%;height: 4.5rem;}
.swiper-container.s1.swiper-container-horizontal {
    margin-top: 2.9rem;
}

.wrapper{width: 100%;overflow: hidden;margin-bottom: 1.5rem;}
.wrapper .text{width: 100%;background: #fff;height: 13.2rem;font-family: 'PingFang-SC-Regular';}
.wrapper .text .bg1{margin-left: 0.25rem;position: relative;top:.3rem;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝3@1x.png') center;width: 95%;height: 2.3rem;border-radius: 5px;}
.wrapper .text .bg1 div{padding-top:.5rem;padding-left: .35rem;line-height: .1rem;font-size:.39rem;font-weight:540;}
.wrapper  .text .bg1 .skip{display: block;margin-top: .35rem;margin-left: .2rem}
.wrapper  .text .bg1 .skip p{color:rgba(0,67,122,1);font-size: .26rem;display: inline;font-weight: normal}
.wrapper .text .bg2{margin-left: 0.25rem;position: relative;top:.6rem;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝9@1x.png') center;width: 95%;height: 1.7rem;border-radius: 5px;}
.wrapper .text .bg2 div{padding-top:.35rem;padding-left: .35rem;font-size:.39rem;font-family:'PingFang-SC-Medium';font-weight:540;}
.wrapper .text .bg2 p{margin-top: .1rem;margin-left: .2rem;color:rgba(22,101,71,1);font-size: .26rem;font-weight: normal}
.wrapper .text .bg3{margin-left: 0.25rem;position: relative;top:.9rem;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝5@1x.png') center;width: 95%;height: 2.3rem;border-radius: 5px;}
.wrapper .text .bg3 div{padding-top:.4rem;padding-left: .35rem;font-size:.39rem;font-family:'PingFang-SC-Medium';font-weight:540;}
.wrapper .text .bg3 .info{width: 80%;margin-top: -.3rem;    margin-left: -.1rem;}
.wrapper .text .bg3 p{padding-bottom: .5rem;line-height: .5rem;display: inline;;color:rgba(63,32,138,1);font-size: .26rem;font-weight: normal}
.wrapper .text .bg4{margin-left: 0.25rem;position: relative;top:1.2rem;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝6@3x.png') center;width: 95%;height: 2.8rem;border-radius: 5px;}
.wrapper .text .bg4 div{padding-top:.5rem;padding-left: .35rem;line-height: .1rem;font-size:.39rem;font-family:'PingFang-SC-Medium';font-weight:540;}
.wrapper .text .bg4 .tsitle{position: absolute;top: .35rem;line-height: .6rem;font-size: .28rem;font-weight: normal;color: #636363}
.wrapper .text .bg4 .info{position: absolute;top: 1.7rem;left: -.1rem;}
.wrapper .text .bg4 .info p{color:rgba(175,31,30,1);font-size: .26rem;display: inline;font-weight: normal}
.wrapper .text .bg5{margin-left: 0.25rem;position: relative;top: 1.5rem;background: url('../common/images/img/ios/1/ios/shouye/圆角矩形1拷贝7@1x.png') center;width: 95%;height: 2.3rem;border-radius: 5px;}
.wrapper .text .bg5 div{padding-top:.5rem;padding-left: .35rem;line-height: .1rem;font-size:.39rem;font-family:'PingFang-SC-Medium';font-weight:540;}
.wrapper .text .bg5 img{position: absolute;right: 40%;top: .8rem;width: .48rem;height: .48rem;}
.wrapper .text .bg5 p{padding-top:.5rem;padding-left: .35rem;line-height: .1rem;font-size:.35rem;font-family:'PingFang-SC-Medium';font-weight:500;color:#636363;}

.views .fot{position: fixed;bottom:0;left: 0;width: 100%;height: 1.3rem;background: #fff;overflow: hidden;}
.views .fot .bao{width: 10%;height: 1.3rem;text-decoration: none;float: left;margin-left: 2.2rem}
.views .fot .bao img{width: .6rem;height: .6rem;margin-top: .1rem;}
.views .fot .bao p{font-size: .35rem;color: rgba(17,17,17,1)}
</style>