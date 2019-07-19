<template>
    <div class="Start">
        <div class="denglu">
            <div class="before" @click="first">先逛逛</div>
            <img src="../common/images/img/ios/图片1拷贝@1x.png" alt="">
            <div class="content">
                <div class="account"><span>帐号:</span><input type="text" placeholder="输入账号" v-model="phone" maxlength="11"></div>
                <div class="password"><span>密码:</span><input type="password" placeholder="输入密码" v-model="password" maxlength="6"></div>
                <div class="centerb">
                    <span @click="forget">忘记密码</span>
                    <span>|</span>
                    <span @click="regist">现在注册</span>
                </div>
            </div>
            <div class="button1">
                <div class="regist f4" @click="login">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios.js'
import { setTimeout, clearInterval } from 'timers';
// import md5 from 'js-md5';
import { Toast } from 'vant';
export default {
    data(){
        return {
            phone:'',
            password:'',
        }
    },
    components:{

    },
    methods:{
        first(){
            axios({cmd:'looklook'}).then(res => {
                console.log(res)
                if(res.result == '0'){
                    sessionStorage.setItem('userInfo','')
                    localStorage.setItem("uid",'');
                    this.$router.push({path:'/Index'})
                }
            })
        },
        ceng(){
            this.show = false
            this.show1 = false
        },
        login(){
            var tel = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
            if(this.phone == ''){
                Toast({
                    message: '手机号不能为空',
                    duration: 1000
                });
                return false
            }else if(!tel.test(this.phone)){
                Toast({
                    message: '手机号有误',
                    duration: 1000
                });
                return false
            }
            if(this.password == ''){
                Toast({
                    message: '密码不能为空',
                    duration: 1000
                });
                return false
            }
            let params = {
                cmd:"userLogin",
                phone:this.phone,
                // password:this.$md5('this.password')
                password:hex_md5(this.password)
            }
            console.log(params)
            console.log(params.password)
            //this.$md5(params.password)
            axios(params).then(res=>{
                console.log(res)
                if(res.result == '0'){
                    console.log(res)
                    localStorage.setItem("uid",res.uid);
                    this.$router.push('/index')
                }
            })
            return true
        },
        forget(){
             this.$router.push('/reslp')
        },
        regist(){
            this.$router.push('/regist')
        },
    },
    created(){
       sessionStorage.setItem('userInfo','')
       localStorage.setItem("uid",'');
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.Start{width: 100%;height: 100%;background:url('../common/images/img/ios/组4@2x.png')top center no-repeat;background-size:cover;}
.Start .denglu {position: absolute;top: 1rem;}
.Start .denglu .before{width: 1.5rem;height: .8rem;;border-radius: .8rem;text-align: center;line-height: .8rem;color: rgba(85,85,85,1);background:rgba(255,255,255,1);opacity:0.6;margin-left: 8rem;}
.Start .denglu img{width: 2.5rem;height: 2.4rem;margin-left: 3.8rem;margin-top:1rem; border-radius: 15px;}
.Start .denglu .button1{width: 100%;display: flex;justify-content:center;margin-top: 1.5rem}
/* .Start .denglu .button a{text-decoration: none;} */
.Start .denglu .button1 .regist{width: 4rem;height: 1rem;border: .05rem solid rgba(35,183,172,1);border-radius: .8rem;font-size: .45rem;color:rgba(35,183,172,1);text-align: center;line-height: 1rem;}
.Start .denglu .button1 .f4{background: rgba(35,183,172,1);color: #fff;}
.Start .denglu .content{width: 8rem;position: relative;color: black;margin-left: 10%;margin-top: 30px;}
.account,.password {position: relative;height: 1.2rem;margin-bottom: 30px;}
.Start .denglu .content .account span{position: absolute;left: 1rem;top: 50%;font-size: .4rem;font-weight:500;z-index:9999;transform: translate(0, -50%);}
.Start .denglu .content .password span{position: absolute;left: 1rem;top: 50%;font-size: .4rem;font-weight:500;z-index:9999;transform: translate(0, -50%);}
.Start .denglu .content .account input{width: 8rem;height: 1.2rem;background:rgba(255,255,255,1);opacity:0.6;border-radius: .8rem;text-align: center;border: none;}
.Start .denglu .content .password input{width: 8rem;height: 1.2rem;background:rgba(255,255,255,1);opacity:0.6;border-radius: .8rem;text-align: center;border: none;}
.Start .denglu .content .centerb{font-size: .4rem;color:rgba(204,204,204,1);width: 8rem;margin-top: 5px;}
.Start .denglu .content .centerb span{margin-left: 1rem;}
</style>
