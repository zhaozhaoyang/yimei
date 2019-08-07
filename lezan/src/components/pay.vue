<template>
  <div class="c1">
    <myheader tit="充值" showL="true"></myheader>
    <p class="level">对方账户信息：</p>
    <ul class="bank">
        <li>
            <span class="sp">所属银行</span><span class="sp2" >{{info.bankName}}</span><span class="cred"  v-clipboard:copy="info.bankName"
        v-clipboard:success="onCopy">复制</span>
        </li>
        <li>
            <span class="sp">姓名</span><span class="sp2">{{info.bankUser}}</span><span class="cred"  v-clipboard:copy="info.bankUser"
        v-clipboard:success="onCopy">复制</span>
        </li>
        <li>
            <span class="sp">银行卡号</span><span class="sp2">{{info.bankAccount}}</span><span class="cred" v-clipboard:copy="info.bankAccount"
        v-clipboard:success="onCopy">复制</span>
        </li>
    </ul>
    <p class="level">支付信息：</p>
    <ul class="bank">        
        <li>
            <span class="sp">姓名</span><span class="sp2"><input type="text"  placeholder="请输入姓名" required v-model="username"></span>
        </li>
        <li>
            <span class="sp">电话</span><span class="sp2"><input type="tel" placeholder="请输入电话" required v-model="phone" maxlength="11"></span>
        </li>
    </ul>
    <m-ybutton text="提交" @click="buy"></m-ybutton>
  </div>
</template>

<script>
import myheader  from './component/header.vue'
import { Toast } from "vant";
export default {
  components:{myheader},
  data() {
    return {
        uid: this.$store.state.uid || window.localStorage.getItem("uid"),
        price:'',
        username:'',
        tel:'',
        fileList:[],
        info:{bank:'中国建设银行',name:'啦啦啦',card:'1234654'},
        username:'',
        phone:'',
        type:''

    };
  },
  created(){
    this.price = this.$route.params.price
    this.type = this.$route.params.type
    this.postRequest({cmd:'getBankInfo'}).then(res => {
        console.log(res)
        this.info = res.data                 
    });
  },
  methods:{     
      buy(){
          if(this.username.trim()==''|| this.phone.trim()==''){
              Toast('请完善支付信息！')
              return;
          }
          var params = { cmd: "buyVip",uid:this.uid,type:this.type,price:this.price,phone:this.phone,username:this.username,bankName:this.info.bankName,bankUser:this.info.bankUser,bankAccount:this.info.bankAccount}
           console.log(params)
           this.postRequest(params).then(res => {
                console.log(res)
                this.$router.push('/success')
                        
           });
          
      } ,
      onCopy(){
         Toast.success('复制成功！')
      }
  }
};
</script>

<style scoped>
    .cred{color:rgba(236,44,131,1)!important}
    .sp{flex:1;color: #afafaf;}
    .sp2{flex: 2;}
    .bank{
        width: 100%;
        background: #fff;
    }
    .bank li{
        display: flex;
        flex-flow: row;
        padding: 20px 15px;        

    }
    .bank li+li{
        border-top: 1px solid #E7E7E7;
    }
    .bank li span{
        font-size: 14px;
        color: #666666;
    }
    .c1{
        height: 100vh;
        width: 100vw;
        background: #F6F6F6;
    }
    .level{
        font-size: 15px;
        height: 39px;
        line-height: 39px;
        color: #666666;
        text-indent: 15px;
    }
    input::-webkit-input-placeholder{
        color:#999;
    }

</style>