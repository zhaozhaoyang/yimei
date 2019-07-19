<template>
    <div class="login">
        <img src="../component/img/logo@1x.png" alt="" class="img" style="width: 140px;">
        <div class="int">
            <div class="before">
                <p class="word">手机号码：</p>
                <input type="text" placeholder=" 请输入手机号" v-model="account" maxlength="11">
            </div>
            <div class="before">
                <p class="word">登录密码：</p>
                <input type="password" placeholder=" 请输入密码" v-model="password">
            </div>
        </div>
        <div class="enter" @click="enter">登录</div>
        <div class="tankuang" v-show="show">
            <div class="tishi">帐号或密码有误</div>
            <div class="over"></div>
        </div>
    </div>
</template>

<script>
import request from '../http.js'
import { Notify } from 'vant';
export default {
    components:{
        [Notify.Component]: Notify.Component
    },
    data(){
        return {
            account:'',
            password:'',
            show:false
        }
    },    
    created(){
        if(JSON.parse(window.localStorage.getItem('userInfo'))){
            this.account = JSON.parse(window.localStorage.getItem('userInfo')).account
            this.password = JSON.parse(window.localStorage.getItem('userInfo')).password
        }else{
            this.account = ''
            this.password = ''
        }
    },
    methods:{
        enter(){
            var tel = /^[1][3,4,5,7,8][0-9]{9}$/
            if(this.account == ''){
                Notify({
                    message: '手机号不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }else if(!tel.test(this.account)){
                Notify({
                    message: '手机号或密码错误',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }
            if(this.password == ''){
                Notify({
                    message: '密码不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }
            let data = {
                cmd:'adminLogin',
                account:this.account,
                password:this.password
            }
            request.postRequest(data).then(res => {
                console.log(res)
                if(res.data.result == '0'){          
                    window.localStorage.setItem('userInfo',JSON.stringify(data))
                    console.log(res)
                    window.sessionStorage.setItem('goodsId',res.data.goodsId)
                    this.$router.push({path:'/index',query:{goodsId:res.data.goodsId}})
                    localStorage.setItem('goodsId',res.data.goodsId)
                    localStorage.setItem('nickName',res.data.nickName)
                    console.log(res.data.nickName)
                    localStorage.setItem('name',res.data.name)
                    console.log(res.data.name)
                    localStorage.setItem('uid',res.data.uid)
                }
            })
            return true
        },
    }
}
</script>

<style lang="scss">
$color: #fff;
.login{width: 100%;height: 100%;;background: url('../component/img/1126@1x.png')top center no-repeat;background-size:cover;}
.img{margin-left: 30%;margin-top: 25%;}
.int{
    width: 100%;margin-top:15%;
    .before{width: 80%;height: 1.2rem;background:rgba(255,255,255,.8);border-radius:.8rem;margin-left: 1rem;overflow: hidden;margin-top: 7%}
    .word{color:#0696E1;float: left;margin-left: .5rem;line-height: 1.2rem;font-size: .35rem;}
    input{float: left;width: 60%;height: 1.2rem;border-radius:.8rem;border: none;background:rgba(255,255,255,0);color:#333;}
   
}
.enter{width: 80%;height: 1.15rem;text-align: center;color:#0696E1;background:rgba(255,255,255,.8);border-radius:.8rem;line-height: 1.15rem;font-size: .38rem;top:20%;position: relative;left: 1rem;}
.tankuang{
    width: 100%;height: 17.78rem;position: absolute;top:0;left:0;
    .tishi{color: $color;position: absolute;top:50%;left:.5rem;width: 90%;height: 1rem;background: rgba(17,17,17,.7);border-radius: .5rem;text-align: center;line-height: 1rem;font-size: .38rem;}
    .over{background: rgba(17,17,17,.6);width: 100%;height: 17.78rem;}
}
.van-popup.van-popup--top.van-notify{margin-top: 110%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: 1rem;border-radius: .2rem;font-size: .3rem;}
input::-webkit-input-placeholder{
    color:#999;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
     color:#999;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#999;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#999;
}
</style>
