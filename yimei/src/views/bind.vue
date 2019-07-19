<template>
    <div class="bind">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>修改绑定手机号</p>
        </div>
        <div class="header">
            <div class="center">
                <p>+86</p>
                <input type="text" placeholder="请输入当前手机号" v-model="oldphone" maxlength="11">
            </div>
            <div class="center">
                <input type="text" style="margin-left:0" placeholder="请输入新手机号" v-model="phone" maxlength="11">
            </div>
            <div class="center">
                <input type="text" placeholder="请输入短信验证码" style="margin-left:0;width:6.8rem;">
                 <span class="dianji">
                    <p>|</p>
                    <p v-if="sendtime" @click="getcode">{{time}}</p>
                    <!-- <p v-else>12</p> -->
                    <p v-else>{{time}}</p>
                </span>
                <!-- <p style="color:rgba(35,183,172,1);">| 获取验证码</p> -->
            </div>
        </div>
        <div class="btn" @click="tel">确定绑定</div>    
    </div>
</template>

<script>
import axios from '../axios'
import { Notify } from 'vant';
export default {
    data(){
        return {
            oldphone:'',
            phone:'',
            uid:'',
            // tel:'',
            time: '获取验证码',
            sendtime:true,
            currentTime: 60,
            nickname:null,
            icon:null
        }
    },
    components:{
        [Notify.Component]: Notify.Component
    },
    methods:{
        tel(){

            let params = {
                cmd:'updatePhone',
                uid:this.uid,
                phone:this.phone
            }
            axios(params).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                }
            })
        },
        getcode(){
            var tel = /^[1][3,4,5,7,8][0-9]{9}$/
            if(this.phone == ''){
                Notify({
                    message: '手机号不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }else if(!tel.test(this.phone)){
                Notify({
                    message: '手机号有误',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }
            axios({cmd:"getValidateCode",phone:this.phone}).then(res=>{
                if(res.result == '0'){
                    console.log('获取验验证码成功')
                    console.log(res)
                    Notify({
                        message: res.code,
                        duration: 5000,
                        background: '(17,17,17,.5)'
                    });
                }
            })
            // }
            
            this.dtime()
            return true
        },
        tel(){
            let det= {
                cmd:'updatePhone',
                uid:this.uid,
                phone:this.phone
            }
            axios(det).then(res => {
                // console.log(res)
                Notify({
                    message: res.resultNote,
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                if(res.result == '0'){
                    console.log(res)
                }
            })
        },

         // 倒计时函数封装
        dtime(){
            var that = this;
            var currentTime = that.currentTime
            var interval = setInterval(function () {
                currentTime--;
                that.time= currentTime + '秒';
                if (currentTime <= 0) {
                    that.sedtime=true;
                    clearInterval(interval)
                    that.time='重新发送'
                    that.currentTime= 60
                    //   that.yzflg=true;
                    that.code="";
                }
            }, 1000)
        },
        back(){
            history.back(-1)
            // this.$router.push({path:'/set',query:{phone:this.phone,nickname:this.nickname,icon:this.icon}})
        }

    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.oldphone= this.$route.query.phone
        this.nickname= this.$route.query.nickname
        this.icon= this.$route.query.icon
        this.phone= this.$route.query.phone
        console.log(this.$route.query.phone)
        console.log(this.$route.query.phone)
        console.log(this.$route.query.nickname)
        console.log(this.$route.query.icon)
        // this.phone = ''
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.bind{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;background: #fff;}
.bind .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.bind .Title p{float: left;margin-left: 25%;}
.bind .Title img{float: left;margin-top: .5rem;margin-left: .5rem;width: 0.3rem;height: 0.5rem;}

.bind .header{width: 100%;height: auto;margin-top: 1.5rem;}
.bind .header .center{width: 9.5rem;height: 1.5rem;margin-left: .5rem;border-bottom:.01rem solid rgba(226,226,226,1);overflow: hidden;}
.bind .header .center p{float: left;color: rgba(17,17,17,1);font-weight:500;line-height: 1.5rem;font-size: .4rem;}
.bind .header .center input{float: left;margin-top: .55rem;border: none;margin-left: .6rem;}
.bind .btn{width: 9rem;height: 1.2rem;background:rgba(35,183,172,1);opacity:0.6;border-radius: .8rem;font-size: .4rem;font-weight:500;color:#fff;text-align: center;line-height: 1.2rem;margin-top: 2.5rem;margin-left: .5rem;}

.dianji{width: 2.5rem;margin-left: 5rem;display: flex;justify-content: space-around;}
.dianji p{color:rgba(35,183,172,1);}
.van-popup.van-popup--top.van-notify{margin-top: 70%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: .7rem;border-radius: .2rem;font-size: .3rem;}
</style>
