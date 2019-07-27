<template>
  <div class="contain">    
    <div class="logo">
      <img src="../assets/images/touxiang.png" alt />
    </div>
    <ul class="d2">
      <li>
        <span>账号：</span>
        <input type="text" class="t1" placeholder="输入账号" v-model="name" />
      </li>
      <li>
        <span>密码：</span>
        <input type="password" class="t1" placeholder="输入密码" v-model="password" />
      </li>
    </ul>
    <p class="p1">账号注册？</p>
    <div class="btn" @click="logo" >立即登录</div>
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
.d2 {
  width: 100%;
  margin-top: 1.5rem;
}
.d2 li {
  width: 8rem;
  height: 1.1rem;
  border-radius: 0.586rem;
  margin: 0.45rem auto 0;
  background: #f9f9f9;
  line-height: 1.1rem;
  padding-left: 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
  align-content: center;
}
.p1{
  width: 7.8rem;
  margin: 0.45rem auto 0;
  text-align: right;
}
.d2 span {
  font-size: 0.4rem;
  color: #333;
}
.t1 {
  width: 5rem;
  height: 99%;
  background: transparent;
  font-size: 0.374rem;
  margin-left: 0.5rem;
}
.btn {
  display: block;
  width: 7.6rem;
  height: .9rem;
  line-height: .9rem;
  text-align: center;
  border-radius: 0.586rem;
  margin: 0 auto;
  margin-top: 0.7rem;
  font-size: 0.4rem;
  background: #157fca;
  color: #fff;
}
</style>
