<template>
  <div class="share">
    <div class="Title">
        <img src="../../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="$router.back()">
        <p>我的分享</p>
    </div>
    <div class="money">
      <div class="f1">
        <span>分享消费人数</span>
        <div class="ff1">
          <span>{{list.consumercount}}人</span>
          <img src="" alt="">
        </div>
      </div>
      <div class="f2">
        <span>分享未消费人数</span>
        <div class="ff1">
          <span>{{list.consumernotcount}}人</span>
          <img src="" alt="">
        </div>
      </div>
      <div class="f3">
        <span>消费总金额</span>
        <div class="ff1">
          <span>{{list.consumerallmoney}}元</span>
          <img src="" alt="">
        </div>
      </div>
      <div class="f4">
        <span>获得奖励总金额</span>
        <div class="ff1">
          <span>{{list.getallmoney}}元</span>
          <img src="" alt="">
        </div>
      </div>
    </div>
    <div class="header">《分享成交奖励规则》</div>
    <div class="content">
      <p>在没有确认其具有的营销股东股份数之前，其股份数零，营销股东股份项的数量为0，股份数确认后，才成为真正的营销股东，其营销股东股份项的数量为具体数字。平台系统默认点击推荐码，发送给好友，好友通过此推荐码点击进入平台消费的，达到每人消费数额超过1万元，即可获得1000股份。在被推荐消费的人数超过1人，金额超过1万时，看其人数达到几人，金额达到几万，两者匹配即可得到1000相同数量倍数的股份。例如，被推荐人5人，消费金额3.6万，即可得到3000股的股份；又例如，被推荐人3人，消费金额6.2万，也可得到3000股的股份，不能匹配的数额不能计算股份。如果被推荐消费人数和额度有匹配的显示，则股份数额会自动做相应调整。营销股东身办理营销股东，首先需要进行实名认证，成为平台会员。</p>
      <p>在没有确认其具有的营销股东股份数之前，其股份数零，营销股东股份项的数量为0，股份数确认后，才成为真正的营销股东，其营销股东股份项的数量为具体数字。平台系统默认点击推荐码，发送给好友，好友通过此推荐码点击进入平台消费的，达到每人消费数额超过1万元，即可获得1000股份。在被推荐消费的人数超过1人，金额超过1万时，看其人数达到几人，金额达到几万，两者匹配即可得到1000相同数量倍数的股份。例如，被推荐人5人，消费金额金额6.2万</p>
    </div>
  </div>
</template>

<script>
import axios from '../../axios'
export default {
  data(){
    return{
      list:{}
    }
  },
  created(){
      let params = {
          cmd:'myShare',
          uid:localStorage.getItem('uid')
      }
      axios(params).then(res=>{
          if(res.result == '0'){
              console.log(res)
              this.list = res.dataobject
          }
      })
  }
};
</script>

<style>
 .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.Title p{float: left;margin-left: 38%}
.Title img{float: left;margin-left: .25rem;margin-top: .5rem}
*{margin: 0;padding: 0;}
.share{font-family: 'PingFang-SC-Medium';}
/* .share .Title {position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.3);} */
.share .money{position: relative;width: 100%;height: 6rem;background:rgba(242,242,242,1);box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.3);}
.share .money .f1{position: absolute;top: 2rem;left: .2rem;height: 1rem;width: 9.5rem;display: flex;justify-content: space-between;}
.share .money .f2{position: absolute;top: 3rem;left: .2rem;height: 1rem;width: 9.5rem;display: flex;justify-content: space-between;}
.share .money .f3{position: absolute;top: 4rem;left: .2rem;height: 1rem;width: 9.5rem;display: flex;justify-content: space-between;}
.share .money .f4{position: absolute;top: 5rem;left: .2rem;height: 1rem;width: 9.5rem;display: flex;justify-content: space-between;}
.share .money .f1 span{font-size: .35rem;color:rgba(17,17,17,1);}
.share .money .f2 span{font-size: .35rem;color:rgba(17,17,17,1);}
.share .money .f3 span{font-size: .35rem;color:rgba(17,17,17,1);}
.share .money .f4 span{font-size: .35rem;color:rgba(17,17,17,1);}
.share .money .f1 .ff1{width: 1.5rem;display: flex;justify-content: space-between;}
.share .money .f2 .ff1{width: 1.5rem;display: flex;justify-content: space-between;}
.share .money .f3 .ff1{width: 1.5rem;display: flex;justify-content: space-between;}
.share .money .f4 .ff1{width: 1.5rem;display: flex;justify-content: space-between;}
.share .money .f1 .ff1 img{width: 0.3rem;height: 0.5rem;}
.share .money .f2 .ff1 img{width: 0.3rem;height: 0.5rem;}
.share .money .f3 .ff1 img{width: 0.3rem;height: 0.5rem;}
.share .money .f4 .ff1 img{width: 0.3rem;height: 0.5rem;}
.share .header{position: relative;top: .3rem;left: 0;width: 100%;height: 1rem;text-align: center;line-height: 1rem;font-size:.45rem;font-weight:500;color:rgba(17,17,17,1);}
.share .content{margin-top: .3rem;margin-left: .25rem;font-size: .38rem;width: 9.5rem;line-height: .8rem;}
</style>
