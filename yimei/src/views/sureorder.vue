<template>
    <div class="sureorder">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="backTo">
            <p>确认订单</p>
        </div>
        <div class="transition">
          <div class="f77" style="border-bottom:.01rem solid rgba(229,229,229,1)">
            <img :src="typeof(items.proimage)=='string'?items.proimage:items.proimage[0]" alt style="margin-left:.25rem;">
            <div class="Right">
              <div class="ttitle">{{items.proname}}</div>
              <div class="contentUFO">
                <div>{{items.doctorname}}：{{items.doctordesc}}</div>
              </div>
              <div class="foot">
                <span class="money">￥<span class="price" v-if="!flag">{{items.price}}</span><span class="price" v-if="flag">{{items.totalprice}}</span></span>
                <span class="yue" style="margin-left:1rem">X1</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <headers style=""></headers> -->
        <!-- 医院名称开始 -->
        <div class="center">
            <div class="up">
                <p>医院名称：</p>
                <p class="f78">{{items.hospital}}</p>
            </div>
            <div class="up">
                <p>手术医师：</p>
                <p class="f78">{{items.doctorname}}</p>
            </div>
            <div class="up">
                <p>联系电话：</p>
                <p class="f78">{{items.doctorphone}}</p>
            </div>
            <div class="up" style="border:none;">
                <p>医院地址：</p>
                <p class="f78">{{items.hospitaladdress}}</p>
            </div>
        </div>
        <!--  -->
        <!-- 预约金开始 -->
        <div class="advance">
            <div class="payment">
                <div class="bao">
                    <div class="up">
                        <p>预约金</p>
                        <p class="fff1" style="font-weight:500;color:rgba(255,0,74,1);">￥<span>{{items.yuyueprice}}</span></p>
                    </div>
                </div>
                <div class="bao" style="border:none;">
                    <div class="up">
                        <p>尾款：</p>
                        <p class="fff1" style="font-weight:500">￥<span v-if="!flag">{{items.price-items.yuyueprice}}</span><span v-if="flag">{{items.topayprice}}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <!-- 底部 -->
        <div class="bottom">
            <div class="talkGb">
                <p style="font-size:.32rem;">预约金：<span style="font-weight:500;color:rgba(255,0,74,1);">￥<span style="font-size:.45rem;">{{items.yuyueprice}}</span></span></p>
                <p style="font-size:.32rem;" v-if="!flag">到院再付：￥{{items.price-items.yuyueprice}}</p>
                <p style="font-size:.32rem;" v-if="flag">到院再付：￥{{items.topayprice}}</p>
            </div>
            <button @click="advances">确定订单</button>
        </div>
        <!-- 弹窗模块 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="loginG">
                <p class="needPay">需支付
                    <img src="../common/images/img/pic/my/取消@2x.png" alt="" style="margin-left: 2.2rem;margin-top:.2rem;" @click="closepopup">
                </p>
                <p class="fill">￥<span style="font-size:.8rem;">{{items.yuyueprice}}</span></p>
                <div class="cove">
                    <div class="pay" @click="wxpay">
                        <img src="../common/images/img/pic/预购/微信图标@1x.png" alt="" style="background-color:rgba(0,0,0,.1);float: left;margin-top:.4rem;">
                        <p style="margin-left:.5rem;font-size:.4rem;float: left;margin-top:.1rem;">微信支付</p>
                        <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="" style="margin-left:7.8rem;em;width:.2rem;height:.3rem;float: left;margin-top:-.75rem;">
                    </div>
                    <div class="pay">
                        <img src="../common/images/img/pic/预购/组128@1x.png" alt="" style="background-color:rgba(0,0,0,.1);float: left;margin-top:.4rem;">
                        <p style="margin-left:.5rem;font-size:.4rem;float: left;margin-top:.1rem;">余额支付</p>
                        <p style="font-size:.4rem;margin-left:6rem;margin-top:.1rem;color:rgba(0,0,0,.4)">￥<span>{{userInfo.balance}}</span></p>
                        <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="" style="margin-left:7.8rem;em;width:.2rem;height:.3rem;float: left;margin-top:-.75rem;">
                    </div>
                </div>
                <!-- <div @click="closepopup" style="width:100%;;height:1.14rem;text-align:center;line-height:1.14rem;font-size:.4rem;margin-top:-1rem;">我已阅读并同意</div> -->
            </div>
            <!--这里是半透明背景层-->
            <div class="overer"></div>
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
            popup:0,
            uid:'',
            goodscarid:null,
            items:[],
            userInfo:{},
            ordernum:'',
            flag:false  //判断从订单来还是购物车
        }
    },    
    created(){
        this.uid = localStorage.getItem('uid')
        if(this.$route.params.goodscarid){
            this.goodscarid = this.$route.params.goodscarid;
            this.flag = false
        }
        if(this.$route.params.ordernum){
            this.ordernum = this.$route.params.ordernum
            this.flag = true
        }        
        this.items = JSON.parse(this.$route.params.dataobject)
        console.log(JSON.parse(this.$route.params.dataobject))
        this.userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'))
        
    },    
    mounted(){
    },
    methods:{
         //打开预购规则页面
        advances(){
            // Toast('请去app端进行支付！')
            // return;
            this.popup = 1;
            if(this.ordernum == ''){
                let params = {
                    cmd:'submitOrder',
                    uid:this.uid,
                    goodscarid:this.goodscarid
                }
                axios(params).then(res=>{
                    if(res.result == '0'){
                        console.log(res)
                        this.ordernum = res.ordernum
                    }
                })
            }
            
        },
        // 关闭预购规则页面
        closepopup(){
            this.popup = 0;
        },
        // 跳转页面
        backTo(){
            history.back(-1)
            // this.$router.push('/shopcar')
        },
        bcPay() {
            // wxfb1ebe2a840c9206
            // var appid = "cfeb7a37-1050-4945-8d41-0ee20e5149d9";
            var appid = 'cfeb7a37-1050-4945-8d41-0ee20e5149d9'
            var secret = "263a1a17-dd31-4700-b882-8c6ae7218468";
            var outTradeNo = this.ordernum;
            // var sign = "7290107289d8aed74631f580d1de9a21";
            var title = outTradeNo
            var amount = "1"
            var data = appid + title + amount + outTradeNo + secret;
            var sign =this.$md5(data)
            console.log(outTradeNo)
            /**
             * click调用错误返回：默认行为console.log(err)
             */
            BC.err = function(data) {
                //注册错误信息接受
                alert(data["ERROR"]);
            }
            /**
             * 3. 调用BC.click 接口传递参数
             */
            BC.click({
                    "title": outTradeNo,
                    "amount": "1",
                    "out_trade_no": outTradeNo, //唯一订单号
                    "sign" : sign,
                    /**
                     * optional 为自定义参数对象，目前只支持基本类型的key ＝》 value, 不支持嵌套对象；
                     * 回调时如果有optional则会传递给webhook地址，webhook的使用请查阅文档
                     */
                    "analysis":{"ip":"122.114.49.242"}
                },
                {
                    wxJsapiFinish : function(res) {
                        //jsapi接口调用完成后
                        alert(JSON.stringify(res));
                    }
                });
        },
        wxpay(){
            this.popup = 0;
            if (typeof BC == "undefined"){
                if( document.addEventListener ){
                    document.addEventListener('beecloud:onready', this.bcPay, false);
                }else if (document.attachEvent){
                    document.attachEvent('beecloud:onready', this.bcPay);
                }
            }else{
                this.bcPay();
            }
        }

    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.sureorder{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.sureorder .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.sureorder .Title p{float: left;margin-left: 38%}
.sureorder .Title img{float: left;margin-left: .25rem;margin-top: .5rem}
.sureorder .center{width: 100%;height: auto;background: #fff;position: absolute;top: 4.7rem;left: 0;}
.sureorder .center .up{width: 9.5rem;margin-left:.5rem;height: 1.5rem;border-bottom:.01rem solid rgba(226,226,226,1);overflow: hidden;font-size: .4rem;}
.sureorder .center .up p{float: left;line-height: 1.5rem;}
.sureorder .center .up .f78{font-size: .33rem;float: left;width: 7rem;line-height: 1rem;height: 1rem;margin-top: .3rem;color:rgba(102,102,102,1);overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}

.sureorder .advance{width: 100%;height: auto;position: absolute;top: 10.7rem;left: 0;}
.sureorder .payment{width: 100%;height: 4rem;background: #fff;margin-top: -6rem;margin-top: .3rem;}
.sureorder .payment .bao{width: 9.5rem;height: auto;margin-left: .5rem;border-bottom:.01rem solid rgba(226,226,226,1);}
.sureorder .payment .bao .up{width: 9rem;height: 1.2rem;font-size: .4rem;display: flex;justify-content: space-between;line-height: 1.2rem;margin-left: .25rem;}
.sureorder .center .bao .up p{font-size: .4rem;}
.sureorder .center .bao .up .fff1{font-size: .33rem;height: 1rem;margin-top: .3rem;}

.sureorder .bottom{width: 100%;height: 1.5rem;background: #fff;position: fixed;bottom: 0;display: flex;justify-content: space-between;}
.sureorder .bottom .talkGb{width: 4rem;height: 1.2rem;line-height: .5rem;margin-left: .25rem;margin-top: .2rem;}
.sureorder .bottom button{width:2.4rem;background:rgba(254,64,119,1);border:none;font-weight:500;color:rgba(255,255,255,1);font-size:.45rem;}

.loginG {position: fixed;height: auto;width: 8.5rem;background-color: rgba(255,255,255,1);border-radius: 0.15rem;left: 50%;top: 50%;transform: translate(-50%, -50%);z-index: 9999;}
.loginG .needPay{margin-left: 3.8rem;font-size:.5rem;font-weight:500;color: rgba(0,0,0,1);width: 8.5rem;}
.loginG .fill{width:8.5rem;height:1.43rem;line-height:1.43rem;text-align:center;;font-weight:500;color:rgba(255,0,74,1);font-size:.45rem;margin-top: -.1rem;}
.loginG .cove{width:8.5rem;height:auto;font-size: .35rem;margin-top:2;color:rgba(0,0,0,1);}
.loginG .cove .pay{width:8rem;height:1.5rem;margin-left:.25rem;border-bottom:.01rem solid rgba(226,226,226,1);overflow: hidden;background: #fff;line-height: 1.3rem}
.overer {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}

.transition{width: 100%;background: #fff;}
.transition .f77{width: 95%;height: 3.2rem;display: flex;justify-content: space-between;margin-left: .5rem;margin-top: 1.6rem}
.transition .f77 img{width: 3rem;height: 3rem;}
.transition .f77 .Right{width: 6.4rem;margin-left: .25rem;}
.transition .f77 .Right .ttitle{font-size:.38rem;font-family:'PingFang-SC-Medium';font-weight:500;color:rgba(17,17,17,1);}
.transition .f77 .Right .contentUFO{padding-top: .2rem;font-size: .28rem;color:rgba(102,102,102,1);width: 5.5rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height: .6rem;}
.transition .f77 .Right .foot{padding-top: .2rem;width: 5.5rem;display: flex;justify-content: space-between;}
.transition .f77 .Right .foot .money{color:rgba(255,0,0,1);font-size: .28rem;}
.transition .f77 .Right .foot .money .price{color:rgba(255,0,0,1);font-size: .4rem;}
.transition .f77 .Right .foot .yue{color:rgba(102,102,102,1);font-size: .28rem;}
</style>