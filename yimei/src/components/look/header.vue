<template>
<div style="width:100%;">
    <div class="Ttitle">
        <img src="../../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="backTo" class="pic">
        <p>{{items.username}}的变美日记</p>
        <div @click="coll">
            <img src="../../common/images/img/ios/look/资源3@2x@1x.png" alt="" v-if="collect">
            <img src="../../common/images/img/ios/ios/ios/资源4@2x@1x.png" alt="" v-else>
        </div>
    </div>
    <div class="headerR">
        <div class="img" style="float:left">
            <img :src="items.usericon" alt="">
        </div>
        <div class="name">
            <p style="font-size:.4rem;font-weight:500;color:rgba(17,17,17,1);">{{items.username}}</p>
            <div class="timerchuo">
                <!-- <p>{{items.diarytime}}创建<span style="margin-left:.5rem;">共{{items.afterdiary.length}}篇日记</span></p> -->
            </div>
        </div>
        <div class="shangqian" @click="Reward">
            <p style="position:absolute;top:1.7rem;left:8.8rem;color:rgba(255,255,255,1);">打赏</p>
        </div>
    </div>
        <!-- 切双眼皮 -->
        <div class="eyes">
            <router-link to="/advance" class="f51">
                <img :src="items.proimage" alt>
                <div class="Right">
                    <div class="ttitle">【{{items.classname}}】{{items.proname}}</div>
                    <div class="contentTB">
                        <div>{{items.doctorname}} {{items.hospital}}</div>
                        <div style="margin-top:.2rem;">手术时间：{{items.surgerytime}}</div>
                    </div>
                    <div class="foot">
                        <span class="money">
                            ￥
                            <span class="price">{{items.price}}</span>
                        </span>
                    </div>
                </div>
            </router-link>
        </div>
        <!--  -->
        <!-- 过去的他开始 -->
        <!-- div. -->
    <div class="past">
        <div class="center">
            <p style="font-size:.4rem;font-weight:500;color:rgba(17,17,17,1);margin-left:.25rem;">过去的他</p>
            <div class="pic">
                <img :src="items.image1[0]" alt="">
                <img :src="items.image2[0]" alt="">
                <img :src="items.image3[0]" alt="">
                <img :src="items.image4[0]" alt="">
            </div>   
            <p style="margin-left:.25rem;color:rgba(102,102,102,1);font-weight:500;">{{items.beforecontent}}</p> 
        </div>        
    </div>
        <!--  -->

    <!-- 弹窗模块 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="login">
                <p class="l1">需支付
                    <img src="../../common/images/img/pic/my/取消@2x.png" alt="" style="margin-left: 33%;margin-top:.2rem;" @click="closepopup">
                </p>
                <p class="m1">
                    <span>￥</span>
                    <input type="text" placeholder="4000" v-model="money">
                    <img src="../../common/images/img/ios/look/ios/修改@1x.png" alt="">
                    <!-- <span style="font-size:.8rem;">4000</span> -->
                </p>
                <div class="cr">
                    <div class="pay">
                        <img src="../../common/images/img/pic/预购/微信图标@1x.png" alt="" style="background-color:rgba(0,0,0,.1);float: left;margin-top:.4rem;">
                        <p style="margin-left:.5rem;font-size:.4rem;float: left;margin-top:.1rem;">微信支付</p>
                        <div class="click" @click="chose">
                            <img src="../../common/images/img/ios/look/ios/椭圆7拷贝@1x.png" alt="" style="margin-left:90%;width:.4rem;height:.4rem;float: left;margin-top:-.75rem;" v-if="chose1">
                            <img src="../../common/images/img/ios/look/ios/组13@1x.png" alt="" style="margin-left:90%;width:.4rem;height:.4rem;float: left;margin-top:-.75rem;" v-else>
                        </div>
                    </div>
                    <div class="pay">
                        <img src="../../common/images/img/pic/预购/组130@1x.png" alt="" style="background-color:rgba(0,0,0,.1);float: left;margin-top:.4rem;">
                        <p style="margin-left:.5rem;font-size:.4rem;float: left;margin-top:.1rem;">支付宝支付</p>
                        <div class="click" @click="choses">
                            <img src="../../common/images/img/ios/look/ios/椭圆7拷贝@1x.png" alt="" style="margin-left:90%;width:.4rem;height:.4rem;float: left;margin-top:-.75rem;" v-if="chose2">
                            <img src="../../common/images/img/ios/look/ios/组13@1x.png" alt="" style="margin-left:90%;width:.4rem;height:.4rem;float: left;margin-top:-.75rem;" v-else>
                        </div>
                    </div>
                    <div class="pay" style="border:none">
                        <img src="../../common/images/img/pic/预购/组128@1x.png" alt="" style="background-color:rgba(0,0,0,.1);float: left;margin-top:.4rem;">
                        <p style="margin-left:.5rem;font-size:.4rem;float: left;margin-top:.1rem;">余额支付</p>
                        <div class="click" @click="chosess">
                            <img src="../../common/images/img/ios/look/ios/椭圆7拷贝@1x.png" alt="" style="margin-left:90%;width:.4rem;height:.4rem;float: left;margin-top:-.75rem;" v-if="chose3">
                            <img src="../../common/images/img/ios/look/ios/组13@1x.png" alt="" style="margin-left:90%;width:.4rem;height:.4rem;float: left;margin-top:-.75rem;" v-else>
                        </div>
                    </div>
                </div>
                <div class="word" @click="jump">确定支付</div>
                <!-- @click="closepopup" -->
            </div>
            <!--这里是半透明背景层-->
            <div class="over"></div>
        </div>
        <!--  -->
</div>
</template>

<script>
import axios from '../../axios'
export default {
    data(){
        return {
            diaryid:null,
            uid:'',
            collect:true,
            type:'1',
            items:[],
            objid:'',
            popup:0,
            chose1:true,
            chose2:true,
            chose3:true,
            userid:null,
            money:''
        }
    },
    // beforeRouteLeave:function(to, from, next){
    //     console.log(to)
    // },
     methods:{
        //打开预购规则页面
        Reward(){
            this.uid='';
            if(this.uid==''){
                alert(123)
            }else{
                this.popup = 1;
            }
           
        },
        // 关闭预购规则页面
        closepopup(){
            this.popup = 0;
        },

        // 获取数据
        all(){
            let params = {
                cmd:'lookDiary',
                uid:this.uid,
                diaryid:this.diaryid
            }
            axios(params).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                    this.items = res.dataobject
                }
            })
        },
        // 收藏
        coll(){
            if(this.collect){
                this.collect = false
            }else{
                this.collect = true
            }
            let font = {
                cmd:'collection',
                uid:this.uid,
                type:this.type,
                objid:this.diaryid
            }
            console.log(font)
            axios(font).then(res => {
                console.log(res)
                 if(res.result == '0'){
                    console.log(res)
                }
            })
        },
        // 打赏选择支付方式
        chose(){
            if(this.chose1){
                this.chose1 = false
            }else{
                this.chose1 = true
            }
        },
        choses(){
            if(this.chose2){
                this.chose2 = false
            }else{
                this.chose2 = true
            }
        },
        chosess(){
            if(this.chose3){
                this.chose3 = false
            }else{
                this.chose3 = true
            }
        },
        // 选择支付方式进行跳转
        jump(){
            let path = {
                cmd:'exceptional',
                uid:this.uid,
                userid:this.userid,
                money:this.money
            }
            axios(path).then(res => {
                console.log(res)
                if(res.result == '0'){
                    console.log(res)
                }
            })
            // this.$router.push('')
        },
        backTo(){
            history.back(-1)
            // this.$router.push('/advance')
        }
    },
    mounted(){
        this.all()
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.diaryid = this.$route.query.diaryid
        console.log(this.$route.query.diaryid)
    }
}
</script>

<style>
.Ttitle {position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;line-height: 1.5rem;font-size: .5rem;overflow: hidden;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999}
.Ttitle p{margin-left: 25%;float: left;}
.Ttitle div{float: left;}
.Ttitle .pic{float: left;margin-left: .5rem;margin-top: .5rem}
.Ttitle div img{margin-left: 1.5rem;}

.headerR{margin-top: 1.5rem;width: 100%;height: 2rem;overflow: hidden;background: #fff;}
.headerR .name{float:left;margin-left:.8rem;margin-top:.2rem;}
.headerR .name .timerchuo{display:flex;justify-content:space-between;width:6.5rem;color:rgba(153,153,153,1);margin-top: .1rem;font-size: .35rem;}
.headerR .img{width: 1rem;height: 0.99rem;border-radius: 50%;margin-left: .25rem;}
.headerR .img img{width: 1.5rem;height: 1.49rem;border-radius: 50%;}
.headerR .shangqian{background: url('../../common/images/img/ios/look/组7@1x.png')top center no-repeat;margin-left: 7.85rem;margin-top: .1rem;width: 2rem;height: 1rem;}
.eyes{width: 100%;background: #fff;height: 3.5rem;}
.f51{width: 9.5rem;box-shadow:0px 0px 9px 0px rgba(0, 0, 0, 0.14);border-radius:.1rem;height: 3rem;display: flex;justify-content: space-between;margin-left: .25rem;text-decoration:none;color:rgba(17,17,17,1);background: #fff;}
.f51 img{width: 2.5rem;;height: 2.5rem;margin-left: 0.25rem;border-radius: .2rem;margin-top: .25rem;}
.f51 .Right{margin-left: .2rem;width: 6.8rem;}
.f51 .Right .ttitle{font-size:.4rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);margin-left: -.2rem;margin-top: .25rem;}
.f51 .Right .contentTB{padding-top: .2rem;font-size: .28rem;color:rgba(102,102,102,1);}
.f51 .Right .foot{padding-top: .2rem;}
.f51 .Right .foot .money{color:rgba(255,0,0,1);font-size: .3rem;}
.f51 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .45rem;}
.past{width: 100%;height: 4.5rem;background:rgba(242,242,242,1);}
.center{width: 100%;height: 4.2rem;background: #fff;}
.center .pic{width: 9.5rem;height: 2.5rem;background: #fff;margin-left: .25rem;display: flex;justify-content: space-between;margin-top: .25rem;}
.center .pic img{width: 2.2rem;height: 2.2rem;}

.login {position: fixed;height: auto;width: 100%;background-color: rgba(255,255,255,1);border-radius: 0.15rem;left: 50%;top: 77.5%;transform: translate(-50%, -50%);z-index: 9999;}
.login .l1{margin-left: 45%;font-size:.5rem;font-weight:500;color: rgba(0,0,0,1);width: 8.5rem;}
.login .m1{overflow: hidden;;width:100%;height:1.43rem;line-height:1.43rem;font-weight:500;color:rgba(255,0,74,1);font-size:.45rem;margin-top: -.1rem;}
.login .m1 input{float: left;border:none;font-size:.8rem;width: 2rem;margin-top: .3rem;}
.login .m1 img{float: left;margin-top: .8rem;}
.login .m1 span{float: left;margin-left: 40%;}
.login .cr{width:95%;height:auto;font-size: .35rem;margin-top:2;color:rgba(0,0,0,1);}
.login .pay{width:100%;height:1.5rem;margin-left:.5rem;border-bottom:.01rem solid rgba(226,226,226,1);overflow: hidden;background: #fff;line-height: 1.3rem}
.over {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}
.word{width:100%;height:1.4rem;text-align:center;line-height:1.4rem;font-size:.45rem;box-shadow:0px .03rem .2rem 0px rgba(227,227,227,0.45);color:rgba(35,183,172,1);}
</style>
