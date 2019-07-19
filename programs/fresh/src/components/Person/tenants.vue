<template>
  <div class="tenants-box">
    <main-header :text="text" @back="back"></main-header>
    <div class="tenants-zi">
      <div class="Qr-code">
        <div>
          <canvas id="canvas"></canvas>
          <p>{{this.shopjie}}</p>
        </div>
      </div>
      <div class="steps">
        <h3>入驻步骤:</h3>
        <iframe :src="this.txt"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/component/mainHeader";
import { Toast } from "vant";
import Request from "@/common/js/request";
import QRCode from "qrcode"; //二维码生成
export default {
  data() {
    return {
      text: "商家入驻",
      shopjie: "",
      ershop: "",
      txt: ""
    };
  },
  components: {
    MainHeader
  },
  created() {
    this.getshop();
  },
  mounted() {
    var first = null;
    let self = this;
    mui.back = function() {
      if (!first) {
        self.$router.push("/person");
        first = new Date().getTime();
        setTimeout(function() {
          first = null;
        }, 1000);
      } else {
        if (new Date().getTime() - first < 1000) {
          plus.runtime.quit();
        }
      }
    };
  },
  methods: {
    back() {
      this.$router.push("/person");
    },
    getshop() {
      let goCarlist = {
        cmd: "businessEntry"
      };
      Request.postRequest(goCarlist)
        .then(res => {
          console.log(res.data);
          if (res.data.result == 0) {
            this.shopjie = res.data.alt;
            this.ershop = res.data.qrCode;
            this.txt = res.data.content;

            this.useqrcode(this.ershop);
          }
        })
        .catch(res => {
          Toast("获取失败");
        });
    },
    useqrcode(www) {
      //二维码生成
      console.log(www);
      var canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, www, function(error) {
        if (error) console.error(error);
        console.log("二维码生成成功!");
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.tenants-zi {
  padding: 72px 10px 0;

  .Qr-code {
    height: 200px;

    div {
      width: 150px;
      margin: 30px auto;
      text-align: center;
    }
  }

  .steps {
    h3 {
      padding-bottom: 5px;
    }
  }
}
</style>
