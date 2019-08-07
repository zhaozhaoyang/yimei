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
    <!-- <van-popup v-model="codeImg">
      <img :src="src" alt @click="saveImg(src)"/>
        
    </van-popup> -->
    <div class="mask" @click.stop="close" ref="code">      
      <canvas id="myCanvas" ref="myCanvas" width="132" height="132"  @click.stop="saveImg" style="border:1px solid #666;margin:0 auto;display:block;"></canvas>
    </div>    
    <div id="qrcode" class="qrcode" style="visibility: hidden;"></div>
  </div>
</template>

<script>
import { Toast, Button ,Dialog } from "vant";
import QRCode from 'qrcodejs2'  // 引入qrcode
export default {
  data() {
    return {
      account: "",
      password: "",
      token: "",
      codeImg:false
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
  mounted(){
     this.qrcode()
  },
  methods: {    
    qrcode() {
        let qrcode = new QRCode('qrcode', {
            width: 132,  
            height: 132,
            text: 'http://lezan.lixinapp.com/api/wxLogin', // 二维码地址
            colorDark : "#000",
            colorLight : "#fff",
            src:''
        })  
        
    },
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
       this.$refs.code.style.visibility= 'visible'
      var c=this.$refs.myCanvas;
      var ctx=c.getContext("2d"); 
      var that =  this;
      var qrImgsrc = document.querySelector('#qrcode img')  
      ctx.drawImage(qrImgsrc,c.width/2-66,c.height/2-66);  
      console.log(qrImgsrc.src) 
      this.src =qrImgsrc.src
    },
    close(){
      // this.codeImg = false
      this.$refs.code.style.visibility= 'hidden'
    },
    saveImg(){        
        var c=this.$refs.myCanvas;
        var ctx=c.getContext("2d"); 
        var qrImgsrc = document.querySelector('#qrcode img')
        ctx.drawImage(qrImgsrc,c.width/2-66,c.height/2-66); 
        var image = new Image()
        image.src = this.$refs.myCanvas.toDataURL("image/png"); 
        
        console.log(image.src)

        Dialog.confirm({
        title: '是否保存图片',
        message: '是否保存客户二维码？'
        }).then(() => { 
            plus.gallery.save(image, function () {
                Toast.success('保存成功！');                
            });
        }).catch(() => {
           Toast('保存失败！');  
        });
    },
    dataURLtoFile(dataurl, filename = 'file') {
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let suffix = mime.split('/')[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], `${filename}.${suffix}`, {
        type: mime
      })
    }
  }
};
</script>

<style scoped="scoped">
.mask{
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 310;
  visibility: hidden;
}
#myCanvas{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 300;
}
.qrcode {
  height: 132px;
  width: 132px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}

.contain {
  position: relative;
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
