<template>
    <div>
        <myheader tit="缴纳押金" showL="true"></myheader>
        <div class="wrap">
            <div class="head">
                <img :src="userInfo.icon" style="width:45px;height:45px;border-radius: 50%;display:block;"/>
                <div class="user">
                    <p>
                        <span class="sp1">{{userInfo.nickname}}</span>
                        <span class="lv"  v-if="userInfo.vip != '0'">LV.{{userInfo.vip}}</span>
                        <span class="lv" v-if="userInfo.vip == '0'">普通用户</span>
                    </p>
                    <p class="sp2">押金退还时间：<span v-if="userInfo.vip == '0'"> 暂未缴纳押金</span></p>
                </div>
                <button class="tip" @click="move">缴纳</button>
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
            <m-ybutton text="立即缴纳" @click="buy"></m-ybutton>
            
        </div> 
         
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import { Toast } from "vant";
var channel=null;  
var ALIPAYSERVER='http://demo.dcloud.net.cn/helloh5/payment/alipay.php?total=';
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
            price:'',
            userInfo:JSON.parse(window.localStorage.getItem("userInfo"))
        }
    },
    created(){
        this.postRequest({ cmd: "vipList"}).then(res => {
            // console.log(res)
            this.levellist = res.data.dataList
        });
    },
    mounted(){
        var first = null
        var that =this
		mui.back = function() {
			if (!first) {
				first = new Date().getTime() 
				that.$router.push('/my')
				setTimeout(function() { 
					first = null
				}, 1000)
			} else {
				if (new Date().getTime() - first < 1000) { 
					plus.runtime.quit() 
				}
			}
        }
         document.addEventListener('plusready', this.plusReady, false);
    
        
    },   

       
    methods:{
        plusReady(){ //uni-app中将此function里的代码放入vue页面的onLoad生命周期中  
            let that =this
            // 获取支付通道  
            plus.payment.getChannels(function(channels){  
                channel=channels[0];  
                console.log('获取支付通道')
                console.log(channel)
                that.pay('alipay')
            },function(e){  
                alert("获取支付通道失败："+e.message);  
            });  
        },  
        pay(id){  
            // 从服务器请求支付订单  
            var PAYSERVER='';  
            if(id=='alipay'){  
                PAYSERVER=ALIPAYSERVER;  
            }
            var xhr=new XMLHttpRequest(); //uni-app中请使用uni的request api联网  
            xhr.onreadystatechange=function(){  
                switch(xhr.readyState){  
                    case 4:  
                    if(xhr.status==200){ 
                        console.log('去支付了') 
                        console.log(channel) 
                        plus.payment.request(channel,xhr.responseText,function(result){  
                            plus.nativeUI.alert("支付成功！",function(){  
                                back();  
                            });  
                        },function(error){  
                            plus.nativeUI.alert("支付失败：" + error.code);  
                        });  
                    }else{  
                        alert("获取订单信息失败！");  
                    }  
                    break;  
                    default:  
                    break;  
                }  
            }  
            xhr.open('GET',PAYSERVER);  
            xhr.send();  
        },  
       select(num,price){
           this.nowclick = num
           this.price = price
       },
       buy(){
        //    this.pay('alipay')
           this.plusReady()
           return;

           if(this.nowclick == '-1' || this.price==''){
                Toast('请选择vip类型')
                return;
           }
           var params = { cmd: "buyVip",uid:this.uid,type:(Number(this.nowclick)+1),price:this.price}
           console.log(params)
           this.postRequest(params).then(res => {
                console.log(res)
                        
           });
       },
       move(){
          window.scrollTo({top:400,behavior: "smooth"})
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
.lv{
    color: #fff;
    display: inline-block;
    height: 13px;
    line-height: 13px;
    width: 30px;
    background: #FACE15;
    border: 1px solid #f28b42;
    text-align: center;
    border-radius: 3px;
    font-size: 10px;
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
