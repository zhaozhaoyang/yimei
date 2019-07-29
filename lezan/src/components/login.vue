<template>
  <div class="contain">    
    <div class="logo">
      <img src="../assets/images/touxiang.png" alt />
    </div>
    <div class="formLogin">
      <div class="order">
        <img src="../assets/images/yonghu.png" alt />
        <input type="number" placeholder="请输入账号" v-model="name" />
      </div>
      <div class="order">
        <img src="../assets/images/mima.png" alt />
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>
    </div>
    <p class="p1">忘记密码？</p>
    <m-ybutton text="立即登录" size="2"  @click="logo"></m-ybutton>
  </div>
</template>

<script>
import { Toast, Button, Notify } from "vant";
export default {
  data() {
    return {
      name: "",
      password: "",
      token: ""
    };
  },
  mounted() {
  },
  components: {
    Toast
  },
  methods: {
    yklogo() {
      this.$router.push("index");
      window.sessionStorage.setItem("youke", 3);
    },
    logo() {
      if (this.name == "" || this.password == "") {
        Toast("用户名或密码不能为空！");
        return;
      }
      this.postRequest({
        cmd: "login",
        name: this.name,
        password: this.password,
        token: ""
      }).then(res => {
        console.log(res);
        Toast.success("登陆成功！");
        setTimeout(() => {
          this.$router.push("index");
        }, 1000);
        window.sessionStorage.setItem("youke", "");
        window.sessionStorage.setItem("uid", res.data.uid);
        this.$store.commit("setuid", res.data.uid);
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
  width: 0.5rem;
  height: 0.6rem;
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
