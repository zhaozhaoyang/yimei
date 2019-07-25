<template>
    <div class="my">
        <img src="../common/images/img/ios/ios1/ios/图层600@2x.png" alt="" style="width:100%;height:4rem;z-index:99;">
        <div style="height:15rem;position:relative;top:-4rem;z-index:1000;">
            <div class="header">
                <div class="topBefore">
                    <div class="img">
                        <img :src="items.icon" alt="">
                    </div>
                    <div class="before">
                        <p class="titleW">{{items.nickname}}</p>
                        <div class="contentW">
                            <p v-if="items.usertype == 1">普通用户</p>
                            <p v-else-if="items.usertype == 2">消费者</p>
                            <p v-else>医生</p>
                        </div>
                        <div class="after">
                            <div class="f12"><img src="../common/images/img/ios/ios1/ios/圆角矩形1拷贝3@1x.png" alt=""><span>关注 {{items.followcount}}</span></div>
                            <div class="f2" v-show="show"><img src="../common/images/img/ios/ios1/ios/圆角矩形1拷贝2@2x.png" alt=""><span class="ff2"><img src="../common/images/img/ios/ios1/ios/组3@1x.png" alt=""><span>申请医生认证</span></span></div>
                        </div>
                    </div>
                </div>
                <p class="addressT">地址：{{items.address}}{{items.addressdetail}}</p>
            </div>
            <div class="ccontent">
                <div class="nav">
                    <div class="first">
                        <div class="front" style="border-right:.05rem solid rgba(229,229,229,1);width:50%;height:1.1rem;margin-top:.2rem;">
                            <p style="font-size: .5rem;">{{items.sharecode}}</p>
                            <p style="font-size:.35rem;">分享码</p>
                        </div>
                        <div class="front" style="width:50%;height:1.1rem;margin-top:.2rem;">
                            <p style="font-size: .5rem;">{{items.invitecode}}</p>
                            <p style="font-size:.35rem;">推荐码</p>
                        </div>
                    </div>
                </div>
                <div class="nav">
                    <div class="first">
                        <div class="front" style="border-right:.05rem solid rgba(229,229,229,1);width:2rem;height:1.1rem;margin-top:.2rem;" @click=" $router.push('/111')">
                            <p style="font-size: .5rem;">{{items.goodcardcount}}</p>
                            <p style="font-size:.35rem;">购物车</p>
                        </div>
                        <div class="front" style="border-right:.05rem solid rgba(229,229,229,1);width:2rem;height:1.1rem;margin-top:.2rem;">
                            <p style="font-size: .5rem;">{{items.returnmoney}}</p>
                            <p style="font-size:.35rem;">返现数额</p>
                        </div>
                        <div class="front" style="border-right:.05rem solid rgba(229,229,229,1);width:2rem;height:1.1rem;margin-top:.2rem;" @click="advice">
                            <p style="font-size: .5rem;">{{items.consultationcount}}</p>
                            <p style="font-size:.35rem;">咨询记录</p>
                        </div>
                        <div class="front" style="width:2rem;height:1.1rem;margin-top:.2rem;" @click="notice">
                            <p style="font-size: .5rem;">{{items.consultationcount}}</p>
                            <p style="font-size:.35rem;">通知</p>
                        </div>
                    </div>
                </div>
                <div class="order" >
                    <div class="ttitle">
                        <p class="myordermyorder">我的订单</p>
                        <p class="allorder" @click="every">全部订单
                            <img src="../common/images/img/pic/my/箭头(3)拷贝4@1x.png" alt="">
                        </p>
                    </div>
                    <div class="message">
                        <div class="up" @click="every">
                            <div class="ol">
                                <router-link to="/myorder?active=''">
                                <img src="../common/images/img/pic/my/资源24@2x@1x.png" alt="">
                                <div class="yuan" v-show="hiddenes">{{items.allordercount}}</div>
                                </router-link>  
                                <p>全部</p>
                            </div>
                            <div class="ol">
                                <router-link to="/myorder?active=1">
                                <img src="../common/images/img/pic/my/资源22@2x@1x.png" alt="">
                                <div class="yuan" v-show="hiddenes">{{items.dfkcount}}</div>
                                </router-link>  
                                <p>待付款</p>
                            </div>
                            <div class="ol">
                                <router-link to="/myorder?active=2">
                                <img src="../common/images/img/pic/my/资源20@2x@1x.png" alt="">
                                <div class="yuan" v-show="hiddenes">{{items.canclecount}}</div>
                                </router-link>  
                                <p>取消订单</p>
                            </div>
                            <div class="ol">
                                <router-link to="/myorder?active=3">
                                <img src="../common/images/img/pic/my/资源19@2x@1x.png" alt="">
                                <div class="yuan" v-show="hiddenes">{{items.wsycount}}</div>
                                </router-link>  
                                <p>未使用</p>
                            </div>
                        </div>
                        <div class="up">
                            <div class="ol">
                                <router-link to="/myorder?active=5">
                                    <img src="../common/images/img/pic/my/资源18@2x拷贝@2x.png" alt="" style="width:.7rem">                                
                                    <div class="yuan" v-show="hiddenes">{{items.tkcount}}</div>
                                </router-link>  
                                <p>退款</p>
                                                              
                            </div>
                            <div class="ol" @click="readyDiary">
                                <router-link to="/myorder?active=4">
                                <img src="../common/images/img/pic/my/资源21@2x@1x.png" alt="">
                                <div class="yuan" v-show="hiddenes">{{items.dxrjcount}}</div>
                                </router-link> 
                                <p>待写日记</p>
                            </div>
                            <div class="ol" @click="talk">
                                <router-link to="/myorder?active=6">
                                <img src="../common/images/img/pic/my/资源25@2x@1x.png" alt="">
                                <div class="yuan" v-show="hiddenes">{{items.sscount}}</div>
                                </router-link> 
                                <p>申诉</p>
                            </div>
                            <div class="ol" @click="finish">
                                <router-link to="/myorder?active=7">
                                <img src="../common/images/img/pic/my/资源20@2x@1x.png" alt="">
                                <div class="yuan" v-show="hiddenes">{{items.endcount}}</div>
                                </router-link> 
                                <p>已完成</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="foot">
                    <div class="info">
                        <div class="down">
                            <div class="dl" @click="money">
                                <img src="../common/images/img/pic/my/组4@1x.png" alt="">
                                <p>钱包</p>
                            </div>
                            <div class="dl" @click="mydiary">
                                <img src="../common/images/img/pic/my/组5@1x.png" alt="">
                                <p>日记</p>
                            </div>
                            <div class="dl">
                                <router-link to="/share">
                                 <img src="../common/images/img/pic/my/组6@1x.png" alt="">
                                </router-link> 
                                <p>我的分享</p>
                            </div>
                            <div class="dl">
                                <img src="../common/images/img/pic/my/组7@1x.png" alt="">
                                <p>我的推荐</p>
                            </div>
                        </div>
                        <div class="down">
                            <div class="dl" @click="mykeep">
                                <img src="../common/images/img/pic/my/组11@1x.png" alt="" style="width:.7rem">
                                <p>邀请好友</p>
                            </div>
                            <div class="dl" @click="collect">
                                <img src="../common/images/img/pic/my/形状4@1x.png" alt="">
                                <p>收藏</p>
                            </div>
                            <div class="dl" @click="system">
                                <img src="../common/images/img/pic/my/组10@1x.png" alt="">
                                <p>系统服务</p>
                            </div>
                            <div class="dl" @click="set">
                                <img src="../common/images/img/pic/my/组8@1x.png" alt="">
                                <p>设置</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <!-- 底部导航 -->
    <div class="fot">
        <router-link to="/index" class="bao">
            <img src="../common/images/img/pic/tab/资源12@2x@1x.png" alt="">
            <p>首页</p>
        </router-link>
        <router-link to="/advance" class="bao">
            <img src="../common/images/img/pic/tab/资源14@2x@1x.png" alt="">
            <p>预购</p>
        </router-link>
        <router-link to="/my" class="bao">
            <img src="../common/images/img/pic/tab/组12@1x.png" alt="">
            <p>我的</p>
        </router-link>
    </div>
    <!--  -->
    </div>
        
</template>

<script>
import axios from '../axios'
import { Toast } from 'vant';
export default {
    data(){
        return {
            uid:'',
            items:{},
            show:false,
            length:'',
            hiddenes:true,
        }
    },
    beforeRouteLeave:function(to, from, next){
        if((localStorage.getItem("uid")=='' || localStorage.getItem("uid")==null)&&(to.path=='/myorder' || to.path=='/money' || to.path=='/mydiary' ||to.path=='/goodfride' ||to.path=='/collect'||to.path=='/set' || to.path=='/111')){
            Toast('请登录！');
            return;                  
        }else{
            next()
        }      
        
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.length = localStorage.getItem('length')
        this.num()
    },
    methods:{
        // 获取信息
        all(){
            let params = {
                cmd:'userInfo',
                uid:this.uid
            }
            axios(params).then(res => {
                if(res.result == '0'){
                    console.log(res)
                    this.items = res.dataobject
                    window.sessionStorage.setItem('userInfo',JSON.stringify(res.dataobject))
                    // console.log(this.items)
                }
            })
        },
        set(){
            this.$router.push({ path: '/set', query: {nickname:this.items.nickname,sex:this.items.sex,icon:this.items.icon,age:this.items.age,phone:this.items.phone,address:this.items.address,addressdetail:this.items.addressdetail}})
        },
        advice(){
            this.$router.push('/advice')
        },
        notice(){
            this.$router.push('/notice')
        },
        every(){
            this.$router.push('/myorder')
        },
        delmoney(){
            this.$router.push('/myorder')
        },
        money(){
            this.$router.push({path: '/money',query:{balance:this.items.balance}})
        },
        mydiary(){
            this.$router.push('/mydiary')
        },
        mykeep(){
            this.$router.push('/goodfride')
        },
        collect(){
            this.$router.push('/collect')
        },
        system(){
            this.$router.push('/system')
        },
        readyDiary(){
            this.$router.push('/myorder')
        },
        talk(){
            this.$router.push('/myorder')
        },
        finish(){
            this.$router.push('/myorder')
        },
        num(){
            if(this.length == '0'){
                this.hiddenes = false
            }else{
                this.hiddenes = true
            }
        }
    },
    mounted(){
        this.all()
        if(this.items.usertype == "3"){
            this.show = true
        }else{
            this.show = false
        }
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
body{background:rgba(248,248,248,1);}
.my{width: 100%;height: 100%;}
.my .header{width: 9.5rem;height: 5rem;background:rgba(255,255,255,1);box-shadow:0 0 .1rem 0 rgba(6,6,6,0.1);border-radius:.1rem;margin-top: 1.1rem;margin-left: .24rem;}
.my .header .topBefore{width: 8rem;overflow: hidden;}
.my .header .topBefore .img{margin-top: 15%;margin-left: .5rem;float: left;width: 1.9rem;height: 1.92rem;}
.my .header .topBefore .img img{width: 1.9rem;height: 1.92rem;border-radius: 50%;}
.my .header .topBefore .before{margin-left: .3rem;float: left;margin-top: 1.2rem;}
.my .header .topBefore .before .titleW{font-size: .4rem;font-weight:bold;color:rgba(17,17,17,1);}
.my .header .topBefore .before .contentW p{font-weight:500;color:rgba(153,153,153,1);font-size: .35rem;margin-top: .1rem;}
.my .header .topBefore .after{width: 4rem;display: flex;justify-content: space-between;margin-top: -.1rem;background:#fff;}
.my .header .topBefore .after .f12{width: 4rem;height: 1rem;position: relative;top: .3rem;}
.my .header .topBefore .after .f12 img{width: 2rem;height: .6rem;border-radius: .3rem;margin-left: -.05rem;}
.my .header .topBefore .after .f12 span{position: absolute;top: .1rem;left: .18rem;color:rgba(255,255,255,1);}
.my .header .topBefore .after .f2{width: 4rem;height: 1rem;position: relative;left: .2rem;top:.3rem;}
.my .header .topBefore .after .f2 img{width: 3rem;height: .6rem;border-radius: .3rem;margin-left: -.05rem;}
.my .header .topBefore .after .f2 .ff2{overflow: hidden;}
.my .header .topBefore .after .f2 .ff2 img{width: 0.5rem;height: 0.5rem;margin-top: -.6rem;margin-left: .2rem;float: left;}
.my .header .topBefore .after .f2 .ff2 span{position: absolute;top: .1rem;left: .4rem;color:rgba(255,255,255,1);float: left;}
.my .header .addressT{font-size: 0.4rem;margin-top: .5rem;font-weight:500;color:rgba(102,102,102,1);margin-left: .5rem;}
.my .ccontent{width: 9.5rem;height: 14.5rem;}
.my .ccontent .nav{width: 100%;height: 1.5rem;box-shadow:0 0 .1rem 0 rgba(0, 0, 0, 0.1);border-radius:.1rem;margin-left: .24rem;margin-top: .3rem;background:#fff;}
.my .ccontent .nav .first{display: flex;justify-content: space-between;}
.my .ccontent .nav .first .front p{text-align: center;line-height: .6rem;}
.my .ccontent .order{width: 9.5rem;height: 5rem;box-shadow:0 0 .1rem 0 rgba(6,6,6,0.1);border-radius:.1rem;margin-top: .3rem;margin-left: .24rem;background: #fff;}
.my .ccontent .order .ttitle{width: 9rem;height: 1rem;border-bottom: .03rem solid  rgba(229,229,229,1);display: flex;justify-content: space-between;line-height: 1rem;margin-left: .2rem;}
.my .ccontent .order .ttitle .myordermyorder{font-size: .4rem;font-weight:500;color:rgba(17,17,17,1);}
.my .ccontent .order .ttitle .allorder{font-size: .35rem;color:rgba(102,102,102,1);font-weight:400;}
.my .ccontent .order .message{height: 1.5rem;width: 9.5rem;margin-top: .75rem;}
.my .ccontent .order .message .up{height: 1rem;width: 9.5rem;margin-top: .5rem;display: flex;justify-content: space-around;}
.my .ccontent .order .message .up .ol{width: 2.5rem;text-align: center;position: relative}
.my .ccontent .order .message .up .ol img{width: .6rem;height: .63rem;}
.my .ccontent .order .message .up .ol p{font-size: .32rem;}
.my .ccontent .order .message .up .ol .yuan{width: 0.45rem;height: .45rem;background: red;border-radius: 50%;position: absolute;top: -.2rem;left: 1.25rem;font-size: .3rem;color: white;line-height: .45rem;text-align: center;}
.my .ccontent .foot{height: 5px;width: 9.5rem;height: 4rem;box-shadow:0 0 .1rem 0 rgba(0, 0, 0, 0.1);border-radius:.1rem;margin-top: .3rem;margin-left: .24rem;background:rgba(242,255,251,1);}
.my .ccontent .foot .info{height: 3rem;width: 9.5rem;}
.my .ccontent .foot .info .down{height: 1.5rem;width: 9.5rem;display: flex;justify-content: space-around;margin-top: .3rem;}
.my .ccontent .foot .info .down .dl{width: 2.5rem;text-align: center;}
.my .ccontent .foot .info .down .dl img{width: .6rem;height: .63rem;margin-top: .5rem;}
.my .ccontent .foot .info .down .dl p{font-size: .32rem;}

.my .fot{position: fixed;bottom:0;left: 0;width: 100%;height: 1.3rem;background: #fff;display: flex;justify-content: space-around;z-index: 1000;}
.my .fot .bao{width: 95%;height: 1.3rem;margin-left: 1.5rem;text-decoration: none}
.my .fot .bao img{width: .6rem;height: .6rem;margin-top: .1rem;}
.my .fot .bao p{font-size: .35rem;color: rgba(17,17,17,1)}
</style>
