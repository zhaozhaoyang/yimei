<template>
  <div>
    <div class="topbg">   
      <div class="topbox">      
        <span class="s1">关注</span>
        <div class="flex">
          <img src="@/assets/images/touxiang.png" class="avtor" alt="">
          <div class="pd">
            <p class="p16">#西洋古董杂货铺#</p>
            <p class="p12">成员：100</p>
          </div>
        </div>
        <p class="pd">我们只关注狐狸网最新资讯</p>
      </div>
    </div>

    <div class="box2 pd">
      <div class="lou">
        <div>
          <img src="@/assets/images/touxiang.png" class="avtor2" alt="">
          <span class="s13">楼主昵称</span>
        </div>        
        <div class="rtitle">
          <img src="@/assets/images/touxiang.png" class="avtor3" alt="">
          <img src="@/assets/images/touxiang.png" class="avtor3" alt="">
          <img src="@/assets/images/touxiang.png" class="avtor3" alt="">
          <img src="@/assets/images/r.png"  alt="" class="arrow">
        </div>
      </div>
      <ul class="ubox">
        <li v-for="i in 2">
            <img src="@/assets/images/ddd.png" alt="" class="ddd" style="height:3.2px;">
            <img src="@/assets/images/touxiang.png" class="avtor4" alt="">
            <span class="p14">王兆才</span>
            <p class="cblue pttit">标题标题</p>
            <p class="pcon">经济困难，需要帮助，经济困难，需要帮助，经济困难，需要帮助，经济困难。</p>
            <div>
              <img src="@/assets/images/banner.jpg" alt="" class="ci" v-for="i in 6">
            </div>
            <div class="option">
              <img src="@/assets/images/f.png" alt="" class="icon">
              <span>回复</span>
              <img src="@/assets/images/news.png" alt="" class="icon">
              <span>0</span>
              <img src="@/assets/images/zan.png" alt="" class="icon">
              <span>0</span>
            </div>
        </li>
        <p class="btp">加入圈子，查看全部帖子</p>
        <img src="@/assets/images/tie.png" alt="" style="width:70px;display:block;margin:0 auto 30px;">
      </ul>
    </div>
    
  </div>
</template>

<script>

export default {
  components: {  },
  data() {
    return {
    };
  },
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    
  }
    
};
</script>

<style scoped>
.btp{color: #999;font-size: 14px;text-align: center;height: 50px;line-height: 50px;}
.option span{vertical-align:middle;margin:0 25px 0 5px;}
.option{height: 40px;line-height: 40px;}
.icon{width: 14px;height:14px ;}
.cblue{color: #2076FF;}
.pttit{height: 35px;line-height: 35px;font-size: 13px;}
.pcon{line-height: 18px;}
.ddd{position: absolute;right: 20px;top:20px;}
.p14{font-size: 15px;margin-left: 5px;}
.ubox li{
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 8px;
  position: relative;
  margin-bottom: 8px;
}
.ci{
  height:83px;width:100px;margin:5px 6px 5px 0;border-radius: 3px;
}
.s13{font-size: 13px;color: #222;}
.lou{
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
}
.arrow{
  width: 8px;height: 16px;
}
.box2{
  position: relative;
  width: 99.88%;
  background: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  top: 150px;
  z-index: 3;

}
.topbg{
  padding: 40px 0 40px;
  /* background: linear-gradient(top,  #2076FF,#48A2FF); */
  background:linear-gradient(-20deg,rgba(72,162,255,1) 0%,rgba(32,118,255,1) 100%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 218px;
}
.pd{padding: 0 15px;}
.p16{font-size: 16px;font-weight: bold;margin-bottom: 6px;}
.p12{font-size: 12px;}
.flex{
  display: flex;
  flex-flow: row;
  align-items: center;
  padding: 12px;
}
.topbox{position:relative;color: #fff;z-index: 2;}
.avtor{border-radius: 10px;width: 60px;border: 2px solid #ddd;}
.avtor3{width: 34px;border-radius: 50%;border: 2px solid #fff;}
.avtor4{width: 32px;border-radius: 50%;}
.avtor3:nth-of-type(1){position: relative;right: -24px;}
.avtor3:nth-of-type(2){position: relative;right: -12px;}
.avtor3:nth-of-type(3){position: relative;z-index:3;}
.avtor2{border-radius: 10px;width:34px;margin-right: 5px;}
.s1{position: absolute;right: 8px;bottom:1px;display: block;width: 60px;height: 22px;border-radius: 5px;color: #2076FF;background: #fff;text-align: center;line-height: 22px;font-size: 14px;}
</style>
