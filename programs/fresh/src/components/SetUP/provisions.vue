<template>
  <div class="tenants-box">
    <main-header :text="text" @back="back"></main-header>
    <div class="tenants-zi">
      <iframe :src="url"></iframe>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/component/mainHeader";
import { Toast } from "vant";
import Request from "@/common/js/request";

export default {
  data() {
    return {
      text: "服务条文",
      url: ""
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
    mui.back = function() {
      if (!first) {
        window.history.go(-1);
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
      this.$router.go(-1);
    },
    getshop() {
      let goCarlist = {
        cmd: "serviceProtocal"
      };
      Request.postRequest(goCarlist)
        .then(res => {
          console.log(res.data);
          if (res.data.result == 0) {
            this.url = res.data.url;
          }
        })
        .catch(res => {
          Toast("获取失败");
        });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.tenants-zi {
  padding: 50px 10px 0;
}
</style>
