<template>
  <div class="share">
    <div class="Tritle">
      <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
      <p>我的分享</p>
    </div>
    <div class="moneyt">
      <div class="f14">
        <p>邀请人数</p>
        <div class="ff1">
          <span>{{items.invitecount}}人</span>
        </div>
      </div>
      <div class="f2">
        <p>成功注册人数</p>
        <div class="ff1">
          <span>{{items.registercount}}人</span>
        </div>
      </div>
      <div class="f3">
        <p>消费人数</p>
        <div class="ff1">
          <span>{{items.consumercount}}人</span>
        </div>
      </div>
      <div class="f4">
        <p>消费总金额</p>
        <div class="ff1">
          <span>{{items.consumermoney}}人</span>
        </div>
      </div>
    </div>
    <div class="headeru">《分享成交奖励规则》</div>
    <div class="content">
      <p>在没有确认其具有的营销股东股份数之前，其股份数零，营销股东股份项的数量为0，股份数确认后，才成为真正的营销股东，其营销股东股份项的数量为具体数字。平台系统默认点击推荐码，发送给好友，好友通过此推荐码点击进入平台消费的，达到每人消费数额超过1万元，即可获得1000股份。在被推荐消费的人数超过1人，金额超过1万时，看其人数达到几人，金额达到几万，两者匹配即可得到1000相同数量倍数的股份。例如，被推荐人5人，消费金额3.6万，即可得到3000股的股份；又例如，被推荐人3人，消费金额6.2万，也可得到3000股的股份，不能匹配的数额不能计算股份。如果被推荐消费人数和额度有匹配的显示，则股份数额会自动做相应调整。营销股东身办理营销股东，首先需要进行实名认证，成为平台会员。</p>
      <p>在没有确认其具有的营销股东股份数之前，其股份数零，营销股东股份项的数量为0，股份数确认后，才成为真正的营销股东，其营销股东股份项的数量为具体数字。平台系统默认点击推荐码，发送给好友，好友通过此推荐码点击进入平台消费的，达到每人消费数额超过1万元，即可获得1000股份。在被推荐消费的人数超过1人，金额超过1万时，看其人数达到几人，金额达到几万，两者匹配即可得到1000相同数量倍数的股份。例如，被推荐人5人，消费金额金额6.2万</p>
    </div>
  </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            uid:'',
            items:[]
        }
    },
     methods:{
      all(){
        axios({cmd:'inviteFriends',uid:this.uid}).then(res => {
          if(res.result == '0'){
              this.items = res.dataobject
            console.log(res)
          }
        })
      },
      back(){
            this.$router.push('/my')
      }
    },
    created(){
      this.uid = localStorage.getItem('uid')
      this.all()
    }
};
</script>

<style>
*{margin: 0;padding: 0;}
.share{font-family: 'PingFang-SC-Medium';}
.share .Tritle{position: fixed;top:0;left: 0;width: 100%;line-height: 1.5rem;height: 1.5rem;overflow: hidden;background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.share .Tritle p{float: left;margin-left: 35%;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);}
.share .Tritle img{float: left;margin-top: .5rem;margin-left: .25rem}
.share .moneyt{position: relative;width: 100%;height: 6rem;background:rgba(242,242,242,1);box-shadow:0 0 .1rem 0 rgba(0, 0, 0, 0.3);}
.share .moneyt .f14{position: absolute;top: 2rem;left: .25rem;height: 1rem;width: 90%;overflow: hidden;}
.share .moneyt .f2{position: absolute;top: 3rem;left: .25rem;height: 1rem;width: 90%;overflow: hidden;}
.share .moneyt .f3{position: absolute;top: 4rem;left: .25rem;height: 1rem;width: 90%;overflow: hidden;}
.share .moneyt .f4{position: absolute;top: 5rem;left: .25rem;height: 1rem;width: 90%;overflow: hidden;}
.share .moneyt .f14 p{font-size: .35rem;color:rgba(17,17,17,1);margin-left: .5rem;float: left;}
.share .moneyt .f2 p{font-size: .35rem;color:rgba(17,17,17,1);margin-left: .5rem;float: left;}
.share .moneyt .f3 p{font-size: .35rem;color:rgba(17,17,17,1);margin-left: .5rem;float: left;}
.share .moneyt .f4 p{font-size: .35rem;color:rgba(17,17,17,1);margin-left: .5rem;float: left;}
.share .moneyt .f14 .ff1{display: flex;justify-content: space-between;float: left;margin-left: 6.5rem}
.share .moneyt .f2 .ff1{display: flex;justify-content: space-between;float: left;margin-left: 5.8rem}
.share .moneyt .f3 .ff1{display: flex;justify-content: space-between;float: left;margin-left: 6.5rem}
.share .moneyt .f4 .ff1{display: flex;justify-content: space-between;float: left;margin-left: 5.1rem}
.share .headeru{position: relative;top: .3rem;left: 0;width: 100%;height: 1rem;text-align: center;line-height: 1rem;font-size:.45rem;font-weight:500;color:rgba(17,17,17,1);}
.share .content{margin-top: .3rem;margin-left: .25rem;font-size: .38rem;width: 9.5rem;line-height: .8rem;}
</style>