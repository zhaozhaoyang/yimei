<template>
    <div>
        <myheader tit="缴纳押金" showL="true"></myheader>
        <div class="wrap">
            <div class="head">
                <img src="../assets/images/touxiang.png" style="width:45px;height:45px;border-radius: 50%;display:block;"/>
                <div class="user">
                    <p>
                        <span class="sp1">维也纳音乐盒</span>
                    </p>
                    <p class="sp2">押金退还时间：暂未缴纳押金</p>
                </div>
                <button class="tip">缴纳</button>
            </div>
            <p class="level">会员等级</p>
            <div class="cards">
                <ul class="flex">
                    <li class="card" :class="[nowclick==index?'choose':'']" v-for="(item,index) in levellist" :key="index" @click="select(index,item.price)">
                        <span class="spleft">
                            <span class="span1">{{item.title}}</span>
                            <span class="c9">至少可接{{item.qty}}个</span>
                        </span>
                        <span class="span2"><font style="font-size:14px;">￥</font> {{item.price}}</span>
                    </li>
                </ul>
            </div>
            <p class="level">佣金及押金返还制度：</p>
            <p class="color9">押金30个工作日自动返还；佣金申请后324小时之内到账</p>
            <p class="level">代理：</p>
            <p class="color9">一级代理提佣金的20%</p>
            <p class="color9">二级代理提佣金的10%</p>
             <!-- @click="pay('alipay')" -->
             <!-- <div style="position:fixed;bottom:20px;left:50%;transform:translate(-50%)"> -->
                 <m-ybutton text="立即缴纳" @click="buy"></m-ybutton>
             <!-- </div>             -->
        </div> 
         
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import { Toast } from "vant";
var pays={};
var w=null;
var PAYSERVER='http://demo.dcloud.net.cn/payment/?payid=';
export default {
    components:{myheader},
    data(){
        return{
           uid: this.$store.state.uid || window.localStorage.getItem("uid"),
           levellist:[
               {level:'一级会员',price:'99',num:8},
               {level:'二级会员',price:'299',num:24},
               {level:'三级会员',price:'499',num:40},
               {level:'四级会员',price:'799',num:64},
               {level:'五级会员',price:'1199',num:96},
               {level:'六级会员',price:'1499',num:120},
               {level:'七级会员',price:'1999',num:160}               
            ],
            nowclick:-1,
            type:'',
            price:''
        }
    },
    created(){
        this.postRequest({ cmd: "vipList"}).then(res => {
            console.log(res)
            this.levellist = res.data.dataList
        });
    },
    mounted(){
        document.addEventListener('plusready', this.plusReady, false);
    },
    methods:{  
        plusReady(){
            // 获取支付通道
            plus.payment.getChannels(function(channels){
                console.log(JSON.stringify(channels))
                var txt='支付通道信息：';
                for(var i in channels){
                    var channel=channels[i];
                    if(channel.id=='qhpay'||channel.id=='qihoo'){	// 过滤掉不支持的支付通道：暂不支持360相关支付
                        continue;
                    }
                    pays[channel.id]=channel;
                }
            },function(e){
                outLine('获取支付通道失败：'+e.message);
            });
        },
       pay(id){
            if(w){return;}//检查是否请求订单中
            console.log('----- 请求支付 -----');
            var url=PAYSERVER;
            url+=id;
            var appid=plus.runtime.appid;
            if(navigator.userAgent.indexOf('StreamApp')>=0){
                appid='Stream';
            }
            url+='&appid='+appid+'&total=';
            
            w=plus.nativeUI.showWaiting();
            // 请求支付订单
            var amount = '1';
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                switch(xhr.readyState){
                    case 4:
                    w.close();w=null;
                    if(xhr.status==200){
                        console.log('----- 请求订单成功 -----');
                        console.log(xhr.responseText);
                        var order=xhr.responseText;
                        plus.payment.request({"id":"alipay","description":"支付宝","serviceReady":true},order,function(result){
                            console.log('----- 支付成功 -----');
                            console.log(JSON.stringify(result));
                            plus.nativeUI.alert('支付成功：感谢你的支持，我们会继续努力完善产品。',function(){
                                back();
                            },'捐赠');
                        },function(e){
                            console.log('----- 支付失败 -----');
                            console.log('['+e.code+']：'+e.message);
                            plus.nativeUI.alert('更多错误信息请参考支付(Payment)规范文档：http://www.html5plus.org/#specification#/specification/Payment.html', null, '支付失败：'+e.code);
                        });
                    }else{
                        console.log('----- 请求订单失败 -----');
                        console.log( xhr.status );
                        plus.nativeUI.alert('获取订单信息失败！', null, '捐赠');
                    }
                    break;
                    default:
                    break;
                }
            }
            xhr.open('GET',url+amount);
            console.log('请求支付订单：'+url+amount);
            xhr.send();
        },
       select(num,price){
           this.nowclick = num
           this.price = price
           console.log(num)
       },
       buy(){
           if(this.nowclick == '-1' || this.price==''){
                Toast('请选择vip类型')
                return;
           }
           var params = { cmd: "buyVip",uid:this.uid,type:(Number(this.nowclick)+1),price:this.price}
           console.log(params)
           this.postRequest(params).then(res => {
                console.log(res)
                        
           });
       }
    }
}
</script>
<style scoped>
.c9{color: #999;margin-top: 10px;font-size: 13px;}
.color9{color: #666;height: 20px;line-height: 20px;font-size: 14px;}
.flex{
  display: flex;flex-flow: row wrap;align-items: center;
}
.wrap{
    padding: 10px;
    background:rgba(247,247,247,1);
}
.head{
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 15px 15px 55px;
    border-radius: 3px;
    position: relative;
    margin-bottom: 10px;
    background: url('../assets/images/bg9.png');
    background-size: 100% 100%;
}
.spleft{
    display: flex;
    flex-flow: column;
    align-items: flex-start
}
.tip{
    position: absolute;
    right: 20px;
    bottom: 20px;   
    font-size: 14px; 
    background:#face15;
    color: #fff;
    height: .8rem;
    border-radius:25px;
    text-align: center;
    line-height: .8rem;
    width: 70px;

}
.user{
    margin-left: 15px;
}
.sp1{
    font-size: 18px;
    color: #000;
}
.sp2{
    font-size: 12px;
    color: #333;
    margin-top: 10px;
}
.level{
    font-size: 15px;
    font-weight: bold;
    height: 35px;
    line-height: 35px;
}

.cards{
    width: 100%;
    margin-bottom: 30px;
}
.card{
    width: 100%;
    height: 52px;
    display: flex;
    flex-flow: row;  
    border: 1px solid #e0e0e0;
    border-radius:6px;
    justify-content: space-between;
    padding:3px 15px;
    align-items: center;
    margin-bottom: 12px;
}
.nocard{border: none;}
.card span{ 
   text-align: center;
  
}
.choose{
    border-color: #face15!important;
    background: #fff5cc;
}
.span1{font-size: 15px;font-weight: bold;}
.span2{font-size: 19px;color: #face15;font-weight: bold;}
</style>
