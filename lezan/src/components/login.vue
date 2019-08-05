<template>
  <div class="contain">    
    <div class="logo">
      <img src="../assets/images/log.png" alt />
    </div>
    <div class="formLogin">
      <div class="order">
        <img src="../assets/images/yonghu.png" alt />
        <input type="number" placeholder="请输入账号" v-model="account" />
      </div>
      <div class="order">
        <img src="../assets/images/mima.png" alt style="width:15px;height:16.5px;" />
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>
    </div>
    <p class="p1" @click="zhuce">立即注册</p>
    <m-ybutton text="立即登录" size="2"  @click="logo"></m-ybutton>
    <van-popup v-model="codeImg"><img src="../assets/images/log.png" alt @click="saveImg(src)"/></van-popup>
  </div>
</template>

<script>
import { Toast, Button ,Dialog } from "vant";
export default {
  data() {
    return {
      account: "",
      password: "",
      token: "",
      codeImg:false,
      src:''
    };
  },
  created() {
    if(window.localStorage.getItem("uid")){
      this.$router.push("index")
    }
    // this.postRequest({ cmd: "taskDetail",uid:this.uid,taskId:this.taskId}).then(res => {
    //     console.log(res)
    //     this.src = res.data.src
    // });
  },
  methods: {    
    logo() {
      if (this.account == "" || this.password == "") {
        Toast("用户名或密码不能为空！");
        return;
      }
      this.postRequest({
        cmd: "login",
        account: this.account,
        password: this.password,
        token: ""
      }).then(res => {
        console.log(res);
        Toast.success("登录成功！");
        setTimeout(() => {
          this.$router.push("index");
        }, 1000);
        window.localStorage.setItem("uid", res.data.uid);
        this.$store.commit("setuid", res.data.uid);
      });
    },
    zhuce(){
      this.codeImg = true
    },
    saveImg(src){
        Dialog.confirm({
        title: '是否保存图片',
        message: '是否保存客户二维码？'
        }).then(() => { 
            plus.gallery.save( src, function () {
                Toast.success('保存成功！');                
            });
        }).catch(() => {
        });
    }
  }
};
</script>

<style scoped="scoped">
.contain {
  width: 100%;
  box-sizing: border-box;
  height: 100vh;
  background: #fff;
  border-top: 1px solid #fff;
}
.formLogin {
    width: 80%;
    margin: 1.5rem auto 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;    
}
.order {
  width: 100%;
  height: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-top: 0.3rem; 

}
.order input {
  height: .9rem;
  line-height: .9rem;
  font-size: 15px;
  color: #333;
  margin-left: 0.5rem;
}
.order img {
  width:13px;
  height: 20px;
}
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.logo img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.p1{
  width: 7.8rem;
  margin: 0.45rem auto 0;
  text-align: right;
  color: #e82c81;
  font-size: 12px;
}


</style>
