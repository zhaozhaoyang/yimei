<template>
    <div class="reslp1">
        <div class="Tlitle">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <P>修改登录密码</P>
        </div>
        <div class="header">
            <div class="center">
                <p>旧密码：</p>
                <input type="password" placeholder="请输入旧密码" v-model="oldpassword">
            </div>
            <div class="center">
                <p>手机号：</p>
                <input type="text" placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="center">
                <input type="text" placeholder="请输入短信验证码" style="margin-left:0;width:6.8rem;" v-model="code">
                <span class="dianji">
                    <p>|</p>
                    <p v-if="sendtime" @click="getcode">{{time}}</p>
                    <!-- <p v-else>12</p> -->
                    <p v-else>{{time}}</p>
                </span>
                <p style="color:rgba(35,183,172,1);">| 获取验证码</p>
            </div>
            <div class="center">
                <p>新密码：</p>
                <input type="password" placeholder="请输入新密码" v-model="password">
            </div>
        </div>
        <div class="btn" @click="revise">确定修改</div>
    </div>
</template>

<script>
import axios from '../axios.js'
import { Notify } from 'vant';
export default {
    data(){
        return {
            oldpassword:'',
            phone:'',
            password:'',
            code:'',
            time: '获取验证码',
            sendtime:true,
            currentTime: 60,
            type:"",
            uid:"",
            // phone:null,
            nickname:null,
            icon:null
        }
    },
    components:{
        [Notify.Component]: Notify.Component
    },
    methods:{
        revise(){
             if(this.oldpassword === ''){
                    Notify({
                        message: '旧密码不能为空',
                        duration: 1000,
                        background: '(17,17,17,.5)'
                    });
                    return false
                }
                var num  = /^1[34578]\d{9}$/
                if(this.phone === '' && this.phone !=num){
                    Notify({
                        message: '手机号不能为空',
                        duration: 1000,
                        background: '(17,17,17,.5)'
                    });
                    return false 
                }
                if(this.code === ''){
                    Notify({
                        message: '验证码不能为空',
                        duration: 1000,
                        background: '(17,17,17,.5)'
                    });
                    return false
                }

                if(this.password === ''){
                    Notify({
                        message: '密码不能为空',
                        duration: 1000,
                        background: '(17,17,17,.5)'
                    });
                    return false

                }
            if(this.uid){
                let params = {
                    cmd:"updatePassword",
                    uid:this.uid,
                    type:0,
                    password:this.password
                }
                axios(params).then(res=>{
                    if(res.result == "0"){
                        console.log('修改密码成功')
                        this.$router.push('/respasd')
                    }
                })
                
            }else{
                this.$router.push('/Login')
            }
            return true
        },
        getcode(){
            if(this.phone == ''){
                Notify({
                    message: '手机号不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return;
            }else{
                if(this.phone){
                    axios({cmd:'phoneRegister',phone:this.phone}).then(res=>{
                        if(res.result == '0'){
                            console.log('未注册')
                        }
                    })
                }else{
                    // this.showDialog = true;//提示手机已经注册过
                }
                axios({cmd:"getValidateCode",phone:this.phone}).then(res=>{
                    if(res.result == '0'){
                        console.log('获取验验证码成功')
                    }
                })
            }
            
            this.dtime()
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
            this.$router.push({path:'/respasd',query:{nickname:this.nickname,phone:this.phone,icon:this.icon}})
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        console.log(this.uid)
        this.phone= this.$route.query.phone
        console.log(this.$route.query.phone)
        this.nickname= this.$route.query.nickname
        this.icon= this.$route.query.icon
        console.log(this.$route.query.nickname)
        console.log(this.$route.query.icon)
    }
}
</script>
<style>
*{margin: 0;padding: 0;}
.reslp1{font-family: 'PingFang-SC-Bold';width: 100%;background: #fff;height: 100%;}
.reslp1 .Tlitle{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);background: #fff;}
.reslp1 .Tlitle p{float: left;margin-left: 25%;}
.reslp1 .Tlitle img{float: left;margin-top: .5rem;margin-left: .5rem}
.reslp1 .btn{font-size:.4rem;width: 9rem;height: 1.3rem;background:rgba(229,229,229,1);opacity:0.6;border-radius: .8rem;font-size: .4rem;font-weight:500;color:#fff;text-align: center;line-height: 1.3rem;margin-top: 1.5rem;margin-left: .5rem;}
.header{width: 100%;height: auto;margin-top: 1.5rem;}
.header .center{width: 9.5rem;height: 1.5rem;margin-left: .5rem;border-bottom:.01rem solid rgba(226,226,226,1);overflow: hidden;}
.header .center p{float: left;color: rgba(17,17,17,1);font-weight:500;line-height: 1.5rem;font-size: .4rem;}
.header .center input{float: left;margin-top: .5rem;border: none;margin-left: .6rem;margin-top: .6rem;}
.header .center .dianji{width: 2.5rem;margin-left: 5rem;display: flex;justify-content: space-around;}
.header .center .dianji p{color:rgba(35,183,172,1);}

.van-popup.van-popup--top.van-notify{margin-top: 70%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: .7rem;border-radius: .2rem;font-size: .3rem;}
</style>
