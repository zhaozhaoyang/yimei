<template>
    <div>
        <myheader tit="提现" showL="true"></myheader>
        <p class="pd flex pay1" @click="$router.push('/tixian2')" v-if="!zfInfo">
            <!-- <img class="zfbIcon" src="../assets/images/zhifubao.png"/> -->
            <span>请选择开户银行选择</span>
            <van-icon name="arrow" size="18" class="rtarrow"/>
        </p>
        <p class="pd flex pay1" @click="$router.push('/tixian2')" v-if="zfInfo">
            <!-- <img class="zfbIcon" src="../assets/images/zhifubao.png"/> -->
            <span style="color:#999;">姓名：{{zfInfo.username}}， 银行卡号：{{zfInfo.account}}</span>
            <van-icon name="arrow" size="18" class="rtarrow"/>
        </p>
        <div class="pd pay2">
            <p>提取现金</p>
            <div class="mony">
                <span class="micon">￥</span>
                <input type="number" value="200" v-model="amount">
            </div>
        </div>
        <div class="pd pay3">
            <p class="flex">
                <span class="color9">可用余额： <font class="fontm">{{userInfo.balance}}</font>元</span>
                <span class="color9">24小时内到账</span>
            </p>
            <div>
                <m-ybutton text="确定提现" @click="getcash"></m-ybutton>
            </div>
        </div>
        <div style="height:10px;width:100%;background:rgba(246,246,246,1);"></div>
        <div class="pd moybox">
            <ul class="uti">
                <li class="flex monylist">
                    <span>提取金额</span>
                    <span>处理状态</span>
                    <span>提取时间</span>
                </li>
            </ul>
            <ul  class="uti2">
                <li class="flex monylist" v-for="(item,index) in dataList" :key="index">
                    <span>￥{{item.amount}}</span>
                    <!-- 0审核中 1审核通过 2拒绝 -->
                    <span>{{item.state == '0'?'审核中':item.state == '1'?'审核通过':'拒绝'}}</span>
                    <span>{{item.createDate}}</span>
                </li>
                <p class="nodata" v-if="dataList.length==0">暂无提现记录！</p>
            </ul>
        </div>

    </div>
</template>
<script>
import myheader  from './component/header.vue'
import { Toast } from "vant";
export default {
    components:{myheader},
    data(){
        return{
           uid: this.$store.state.uid || window.localStorage.getItem("uid"),   
           zfInfo:'',
           amount:'',
           pageNo:1,
           totalPage:1,
           dataList:[],
           userInfo:{},
           isend:true
        }
    },
    created(){      
        this.userInfo = JSON.parse(window.localStorage.getItem("userInfo"))  
        this.getList() 
    },
    mounted(){
        var first = null
        var that = this
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
        window.addEventListener('scroll',this.scrollLoad,true)
    },
    methods:{
        getList(){
            if(this.pageNo > this.totalPage){
                Toast('没有更多数据！')
                return;
            }
            this.isend = false
            this.postRequest({ cmd: "cashList",uid:this.uid,pageNo:this.pageNo}).then(res => {
                console.log(res)
                if(res.data.dataList){
                    this.isend = true
                    this.totalPage = res.data.totalPage
                    this.dataList = [...this.dataList,...res.data.dataList]
                    this.pageNo++
                    if(localStorage.getItem('zfInfo')!='' && localStorage.getItem('zfInfo')){
                        this.zfInfo = JSON.parse(localStorage.getItem('zfInfo'))
                    }else{
                        this.zfInfo = {username:res.data.dataList[0].username,account:res.data.dataList[0].account}
                    }
                }
                
            });
        },
       getcash(){
           if(this.zfInfo == null){
               Toast('请完善支付宝信息！')
               return;
           }
           if(this.amount==''){
               Toast('请输入提现金额！')
               return;
           }
           if(Number(this.amount)<1){
               Toast('提现金额不能小于1元！')
               return;
           }
          
           let params = { cmd: "addCash",uid:this.uid,username:this.zfInfo.username,account:this.zfInfo.account,amount:this.amount,phone:this.zfInfo.phone,bank:this.zfInfo.bank}
           console.log(params)
           this.postRequest(params).then(res => {
                console.log(res)
                this.amount = ''
                Toast.success('申请提现成功！')
                          
           });
       },
       scrollLoad(){
            this.$nextTick(() => {
            var scrollTop =document.body.scrollTop || document.documentElement.scrollTop;
            var clientHeight=document.compatMode == "CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;
            var scrollHeight=document.body.scrollHeight|| document.documentElement.scrollHeight;
            //滚动的距离（动态） +  页面可视高度 （固定） 》= 页面总高度 （固定）
                if(scrollTop + (clientHeight - 0) >=scrollHeight - 0 &&  this.isend){    
                    console.log('底部...')                     
                    this.getList()
                }
            })
        
      },
    },      
    destroyed() {
      window.removeEventListener('scroll',this.scrollLoad,true)
    }
}
</script>
<style scoped>
.color9{color: #999;}
.fontm{font-size: 18px;color: #e92322;}
.rtarrow{
    position: absolute;right: 15px;top: 50%;transform: translateY(-50%);
}
.pd{
    padding: 0 10px;
}
.flex{
  display: flex;flex-flow: row;align-items: center;
}
.pay1{
    height: 50px;
    position: relative;
    line-height: 50px;
    border-bottom: 1px solid #E6E6E6;
}
.nodata{width: 100%;height: 50px;line-height: 50px;text-align: center;font-size: 13px;color: #999;}
.pay1 span{ 
    font-size: 14px;
    color: #000;
}
.zfbIcon{
    width: 25px;
    height: 20px;
    margin-right: 13px;
}
.pay2{
    border-bottom: 1px solid #E6E6E6;
    padding-bottom: 15px;
    padding-top: 15px;
}
.pay2 p{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    
}
.mony{
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    position: relative;
    
}
.micon{
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    left: 2px;
    font-size: 13px;
}
.mony input{    
    height: 100%;
    width: 100%;    
    text-indent: 20px;
}
.pay3 .flex{
    justify-content: space-between;
    height: 35px;
    line-height: 30px;
}

.pay3{
    border-bottom: 1px solid #E6E6E6;
}
.pay3 p span{
    font-size: 13px;  
}
.monylist{
    border-bottom: 1px solid #e6e6e6;
}
.monylist span{
    flex: 1;
    text-align: center;
    padding: 15px 0;
}
.moybox .uti span{
    font-size: 14px;
    color: #999;
}
.moybox .uti2 span{
    font-size: 14px;
    line-height: 15px;
    color: #333;
}
</style>
