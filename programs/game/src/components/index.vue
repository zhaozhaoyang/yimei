<template>
    <div class="index">
        <div class="title">{{name}}</div>
        <div class="human">
            <p>当前管理员</p>
            <p>{{nickName}}</p>
        </div>
        <div class="scan">
            <div class="circle" @click="scan">
                <p>扫码核消</p>
            </div>
            <div class="order" @click="centre">
                <p>订单中心</p>
            </div>
        </div>
    </div>
</template>

<script>
 import wx from 'weixin-js-sdk'
 import request from '../http'
export default {
    data(){
        return {
            goodsId:null,
            nickName:'',
            name:''
        }
    },
    methods:{
              // 使用微信JS调用微信扫一扫功能
        // 初始化微信JS调用配置，并调用微信扫一扫 
        directScanQRCode(appId, timestamp, nonceStr, signature) {
            let that = this
            wx.config({
                // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                debug: false,
                // 必填，公众号的唯一标识
                appId: appId,
                // 必填，生成签名的时间戳
                timestamp: timestamp,
                // 必填，生成签名的随机串
                nonceStr: nonceStr,
                // 必填，签名，见附录1
                signature: signature,
                // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                jsApiList: ['checkJsApi', 'scanQRCode']
            });
            wx.error(function(res) {
                //这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
                alert("扫码出错了1：" + res.errMsg)
            });
            wx.ready(function() {
                wx.scanQRCode({
                    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
                    success: function(r) {
                        // that.result = r.resultStr
                        that.$router.push({path:'/del',query:{resultes:r.resultStr}})
                    },
                    fail: function(res) {
                        alert("扫码出错了2：" + res.errMsg)
                    },
                    complete : function(res) {}
                });

            });
        },
        doconfig() {
                let that = this;
                let url = location.href.split('#')[0];// 这里是当前页面的url，一定要 location.href 获取，不然签名会无效。
                console.log(url)
                let params = {
                    cmd:'scan',
                    url: url,
                }
                request.postRequest(params).then(function (res) {
                    console.log(res)
                    console.log(res.data.appId+'------------'+res.data.timestamp+'------------'+res.data.signature+'------------'+res.data.noncestr)
                    if(res.data.result == '0'){
                        console.log(111111)
                        that.directScanQRCode(res.data.appId,res.data.timestamp,res.data.noncestr,res.data.signature)
                    }
                })
            },            
            scan() {
                this.doconfig();
                console.log(2222222)
            },
            centre(){
                this.$router.push({path:'/list'})
            }
    },
    created(){
        this.nickName = localStorage.getItem('nickName')
        this.name = localStorage.getItem('name')
        console.log(this.nickName) 
        console.log(name) 
    }

}
</script>

<style lang="scss">
.index{width: 100%;background: #fff;height: 100%;}
.human{height: 2rem;width: 60%;margin-left:2rem;display: flex;justify-content: space-between;
    p{
        line-height: 2rem;
        font-size: .4rem;
        float: left;
        color: #636363;
    }
}
.scan{
    width: 100%;
    margin-top: 8%;
    .circle{width: 40%;height: 4rem;border-radius: 50%;border:.05rem solid rgba(227,227,227,0.45);text-align: center;margin-left: 30%;background: url('../component/img/1@1.png')top center no-repeat;background-size:cover;
        p{margin-top: 110%;font-size: .35rem}
    }
    .order{width: 40%;height: 4rem;border-radius: 50%;border:.05rem solid rgba(227,227,227,0.45);text-align: center;line-height: 4rem;margin-left: 30%;margin-top: 15%;background: url('../component/img/2@1.png')top center no-repeat;background-size:cover;
        p{margin-top: 64%;font-size: .35rem}
    }
}
</style>
