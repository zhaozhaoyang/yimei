<template>
    <div class="regist">
        <div class="regis">
            <div class="Twitle">
            <img src="../common/images/img/ios/detal/ios/返回@1x.png" alt="" @click="back">
            <p>注册</p>
        </div>
        <div class="reg">
            <div class="account"><span>帐号:</span><input type="text" placeholder="输入账号" v-model="phone" maxlength="11"></div>
            <div class="verification">
                <span>验证码:</span>
                <input type="text" placeholder="输入验证码"  v-model="code">
                <span class="dianji">
                    <p>|</p>
                    <p v-if="sendtime" @click="getcode">{{time}}</p>
                    <!-- <p v-else>12</p> -->
                    <p v-else>{{time}}</p>
                </span>
            </div>
            <div class="password"><span>登录密码:</span><input type="password" placeholder="输入密码" v-model="password"></div>
            <div class="place"><span @click="kuang">邀请码:</span><input type="password" placeholder="输入分享码或推荐码" v-model="invitecode"></div>
        </div>
        <p class="jia">通过分享或推荐注册的用户需要填写分享码或推荐码才能完成注册，分享码或推荐码请在分享或推荐页面寻找！非分享或推荐用户请联系平台客服！</p>
        <div class="agreement"><div style="margin-left:1rem" @click="starter"><img src="../common/images/img/ios/shopcar/组6@1x (2).png" alt="" v-if="clicks"><img v-else src="../common/images/img/ios/shopcar/组5@1x (2).png" alt=""></div>注册即代表您已同意<a style="color:rgba(35,183,172,1);text-decoration:none">《医美用户协议》</a></div>
        <!-- 分享弹框 -->
        <div v-show="popups">
            <!--这里是要展示的内容层-->
            <div class="loginsss">
                <p style="text-align:center;font-size:.4rem;margin-top:.5rem;font-weight:500;color:rgba(35,183,172,1);">尊敬的用户：</p>
                <div class="cr" style="text-align:center;width:90%;margin-left: .4rem;font-size: .35rem;margin-top:.3rem;color:rgba(35,183,172,1);line-height:.5rem;">
                    <p>通过分享或推荐注册的用户需要填写分享码或推荐码才能完成注册，分享码或推荐码请在分享或推荐页面寻找！非分享或推荐用户请联系平台客服！</p>
                </div>
                <img src="../common/images/img/ios/help/help/ios/矩形1009@1x.png" alt="" class="img">
                <div class="agreet">
                    <img src="../common/images/img/ios/detal/ios/椭圆1010@1x.png" alt="" @click="closepopups" class="imgs">
                </div>
            </div>
                
            <!--这里是半透明背景层-->
            <div class="over1"></div>
        </div>
        <!--  -->
        <!-- 注册弹框 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="loginstar">
                <p style="text-align:center;font-size:.45rem;margin-top:.3rem;font-weight:500;">消费用户服务协议</p>
                <div class="cr" style="width:8.6rem;margin-left: .25rem;font-size: .35rem;margin-top:.3rem;color:rgba(0,0,0,1);line-height:.7rem;">
                    <p>医生的资格认证与技术认证前应先在本平台实名注册，然后提交认证申请，双认证成功后,即可获得医生身份，并可设置批准项目展示摊位（获得批准项目展示的后台信息），其展示的项目内容应与提交认证的内容相符合，系统对于摊位的设置需要进行审核。摊位设置有违法违规行为的不能被审核通过。同时医生会获得与平台用户（会员或消费者）信息沟通的客户端登陆权限，可在电脑或手机上登陆，接受或主动联系用户（曾经联系过医生的用户才能联系）进行文字与语音沟通（暂时不支持视频沟通）。</p>
                    <p>本平台是医美消费者分享成交奖励系统，每一笔成交额系统都需要扣除三级奖励所占的比例与奖励日记分享所占的比例，前者是成交额的27%，后者是成交额的5%。另外，系统还要扣除8%的平台管理费，一共扣除成交额的40%，作为预定金，交付平台，剩余部分占成交额的60钮，进给医生。</p>
                </div>
                <div style="width:100%;display:flex;justify-content:space-around;height:1.14rem;line-height:1.14rem;color:rgba(35,183,172,1);font-size:.4rem;margin-top:.6rem;">
                    <div class="agreem"  @click="closepopup">不同意</div>
                    <div class="agreem f91"  @click="closepopupf">同意协议</div>
                </div>
            </div>
            <!--这里是半透明背景层-->
            <div class="over1"></div>
        </div>
        <!--  -->
        <div class="btn" @click="resgister">注册</div>
        </div>
    </div>
</template>

<script>
import axios from '../axios.js'
// import { setTimeout } from 'timers';
import { Notify } from 'vant';
export default {
    components:{
        [Notify.Component]: Notify.Component
    },
    data(){
        return {
            popup:0,
            popups:0,
            cmd:'',
            phone:'',
            password:'',
            invitecode:'',
            code:'',
            time: '获取验证码',
            sendtime:true,
            currentTime: 60,
            car:'',
            clicks:true,
        }
    },
    methods:{
        starter(){
            if(this.clicks){
                this.clicks = false
            }else{
                this.clicks = true
            }
        },
        // 打开消费者弹框
        mask(){
            this.popup = 1;
        },
         // 关闭消费者弹框
        closepopupf(){
            this.popup = 0;
        },
        // 关闭消费者弹框
        closepopup(){
            this.popup = 0;
            this.$router.push('/Login')
        },
        kuang(){
            this.popups = 1
        },
        closepopups(){
            this.popups = 0
        },
        // 请求注册信息
        resgister(){
            var num  = /^1[34578]\d{9}$/
            if(this.phone === '' && this.phone !=num){
                Notify({
                    message: '帐号不能为空',
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

            if(this.invitecode === ''){
                Notify({
                    message: '邀请码不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }
            if(this.clicks != false){
                Notify({
                    message: '请勾选用户服务协议',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
            }
                
            let params = {
                cmd:"userRegister",
                phone:this.phone,
                password:this.password,
                invitecode:this.invitecode
            }
            console.log(params)
            axios(params).then(res=>{
                Notify({
                    message: res.resultNote,
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                // console.log(res)
                if(res.result == '0'){
                    console.log(res)
                    localStorage.setItem('uid',res.uid)
                    this.$router.push('/true')
                }
                   
            })
            return true
        },
        

        // 获取验证码
        getcode(){
            if(this.phone == ''){
                Notify({
                    message: '帐号不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return;
            }
            if(this.phone){
                axios({cmd:'phoneRegister',phone:this.phone}).then(res=>{
                    if(res.result == '0' && res.isregister == '1'){
                        Notify({
                            message: '已注册',
                            duration: 1000,
                            background: '(17,17,17,.5)'
                        });
                        return;
                    }
                })
            }
            axios({cmd:"getValidateCode",phone:this.phone}).then(res=>{
                if(res.result == '0'){
                    console.log('获取验验证码成功')
                }
            })            
            
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
           this.$router.push({path:'/Login'})
       }
    },
    created(){
        this.mask()
    }
}
</script>

<style>
*{margin: 0;padding: 0;}

.regist{width: 100%;height: 100%;background:url('../common/images/img/ios/detal/ios/图层3@1x.png')top center no-repeat;background-size:cover;}
.regist .regis{}
.regist .regis .Twitle{width: 100%;overflow: hidden;;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color:rgba(255,255,255,1);}
.regist .regis .Twitle p{float: left;margin-left: 35%;}
.regist .regis .Twitle img{float: left;margin-left: .5rem;margin-top: .5rem}
.regist .regis .agreement{font-size: .35rem;text-align: center;color:rgba(204,204,204,1);margin-top: .2rem;overflow: hidden;width: 80%;margin-left: .5rem}
.regist .regis .agreement div{float: left;}
.regist .regis .btn{width: 5rem;height: 1.2rem;background:rgba(229,229,229,1);opacity:0.6;border-radius: .8rem;font-size: .4rem;font-weight:500;color:rgba(102,102,102,1);text-align: center;line-height: 1.2rem;margin-top: 1rem;margin-left: 25%;}
.regist .regis .mask{position: absolute;top:2.1rem;left: .5rem;;width: 9rem;height: 13.5rem;background:rgba(255,255,255,1);border-radius:.2rem;z-index: 9998;display: none;}
.regist .regis .mask img{width: 0.6rem;height: 0.6rem;margin-left: 8.2rem;margin-top: .2rem}
.regist .regis .mask .header .title{text-align: center;font-size: .45rem;font-weight:500;color:rgba(17,17,17,1);}
.regist .regis .mask .header .content{font-size: .4rem;line-height: .6rem;width: 8.5rem;margin-left: .3rem;color:rgba(85, 85, 85, 0.5);margin-top: .2rem;}
.regist .regis .mask .foot{position: fixed;width: 9rem;height: 1rem;background: #fff;box-shadow:0px -.4rem .8rem 0px rgba(217,217,217,0.45);}
.regist .regis .mask .foot .fiex{margin-top: .15rem;display: flex;justify-content: space-around;}
.jia{color:rgba(57,98,229,1);font-size: .3rem;width: 80%;margin-left: 1rem;}
/* .regist .regis .mask .foot .fiex .agree{width: 3rem;height: .9rem;border: .05rem solid rgba(35,183,172,1);border-radius: .8rem;font-size: .4rem;color:rgba(35,183,172,1);text-align: center;line-height: .9rem;} */
/* .regist .regis .mask .foot .fiex .f1{background: rgba(35,183,172,1);color: #fff;} */

.reg{width: 9rem;position: relative;color: black;margin-left: .5rem;margin-top: 1.5rem;line-height: 2rem;z-index: 10;}
.reg .account span{position: absolute;left: 1rem;top: 0;font-size: .4rem;font-weight:500;z-index:9999;}
.reg .verification span{position: absolute;left: 1rem;top: 2rem;font-size: .4rem;font-weight:500;z-index:9999;}
.reg .verification .dianji{width: 2.5rem;margin-left: 5rem;display: flex;justify-content: space-around;}
.reg .verification .dianji p{color:rgba(35,183,172,1);}
.reg .password span{position: absolute;left: 1rem;top: 4rem;font-size: .4rem;font-weight:500;z-index:9999;}
.reg .place span{position: absolute;left: 1rem;top: 6rem;font-size: .4rem;font-weight:500;z-index:9999;}
.reg .account input{width: 9rem;height: 1.2rem;background:rgba(255,255,255,1);opacity:0.5;border-radius: .8rem;text-align: center;border:none;}
.reg .verification input{width: 9rem;height: 1.2rem;background:rgba(255,255,255,1);opacity:0.5;border-radius: .8rem;text-align: center;border:none;}
.reg .password input{width: 9rem;height: 1.2rem;background:rgba(255,255,255,1);opacity:0.5;border-radius: .8rem;text-align: center;border:none;}
.reg .place input{width: 9rem;height: 1.2rem;background:rgba(255,255,255,1);opacity:0.5;border-radius: .8rem;text-align: center;border:none;}

.loginstar {position: fixed;height: 14rem;width: 90%;background-color: #fff;border-radius: 0.15rem;left: 50%;top: 50%;transform: translate(-50%, -50%);z-index: 9999}
.loginsss {position: fixed;height: 3.5rem;width: 80%;background-color: #fff;border-radius: 0.15rem;left: 50%;top: 38%;;transform: translate(-50%, -50%);z-index: 9999}
.loginstar .agreem{width: 3rem;height: .9rem;border: .05rem solid rgba(35,183,172,1);border-radius: .8rem;font-size: .4rem;color:rgba(35,183,172,1);text-align: center;line-height: .9rem;}
.loginsss .img{margin-left: 3.8rem;margin-top: -.4rem}
.loginsss .agreet .imgs{margin-left: 3.5rem;margin-top: -.1rem}
.loginstar .f91{background: rgba(35,183,172,1);color: #fff;}
.over1 {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}
.van-popup.van-popup--top.van-notify{margin-top: 110%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: .7rem;border-radius: .2rem;font-size: .3rem;}
</style>
