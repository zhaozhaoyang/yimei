<template>
    <div class="ok">
        <div class="Title">
            <img src="../../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="ing">
            <span>医美医生</span>
        </div>
        <div class="header">
            <P :class="{f1:Types === 0}" @click="Types = 0"><span @click="jp">资质认证</span></P>
            <!-- <p :class="{f1:Types === 1}" @click="Types = 1"><span>技术认证</span></p> -->
        </div>
        
        <div class="content">
            <p class="details">《医生入驻规则》</p>
            <p class="cen">本平台只接受精品医生加盟，拒绝新手，拒绝粗制滥造！医生可以加盟入驻本平台，但是需要经过资格认证与技术认证。资格认证是需要提交相关的资格证书、执业证书等，在宣传中应与提交的相关资格证书的内容相符合；技术认证，是需要经过平台系统对其准备在平台摊位上展示的项目进行技术认证，即观看其提交手术项目的技术操作，然后判断是否技术认证成功。平台系统派技术人员前往医生所在地进行技术认证，其路费及食宿费应有医生方面承担，当日不收任何费用，如果超出一天的时间，平台系统将每天收取1万元的费用。实操的模特由医生方面预约提供。如果医生技术认证没有成功，平台系统不返还医生方面任何费用。
医生的资格认证与技术认证前应先在本平台实名注册，然后提交认证申请，双认证成功后，即可获得医生身份，并可设置批准项目展示摊位（获得批准项目展示的后台信息），其展示的项目内容应与提交认证的内容相符合，系统对于摊位的设置需要进行审核。摊位设置有违法违规行为的不能被审核通过。同时医生会获得与平台用户（会员或消费者）信息沟通的客户端登陆权限，可在电脑或手机上登陆，接受或主动联系用户（曾经联系过医生的用户才能联系）进行文字与语音沟通（暂时不支持视频沟通）。
本平台是医美消费者分享成交奖励系统，每一笔成交额系统都联系用户（曾经联系过医生的用户才能联系）进行文字与语音沟通（暂时不支持视频沟通）。
本平台是医美消费者分享成交奖励系统，每一笔成交额系统都</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            Types:0
        }
    },
    methods:{
        jp(){
            this.$router.push('/sure')       
        },
        ing(){
            this.$router.push('/my')
        }
    }
}

</script>

<style>
*{margin: 0;padding: 0;}
.ok{font-family: 'PingFang-SC-Bold';width: 100%;}
.ok .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.ok .Title img{margin-left: .25rem;margin-top: .5rem;float: left;}
.ok .Title span{margin-left: 34%;float: left;}
.ok p{width: 95%;background:#fff;border-radius:.1rem;margin-left: .25rem;height: 1.3rem;text-align: center;font-size: .4rem;line-height: 1.3rem;}
.ok .f1{background:rgba(35,183,172,1);box-shadow:0 .03rem .18rem 0 rgba(35,183,172,0.45);color:#fff;}
.ok .header{margin-top: 1.8rem}
.ok .content{width: 100%;box-shadow:0 .03rem .18rem 0 rgba(227,227,227,0.45);margin-top: .4rem}
.ok .content .details{font-size: .45rem}
.ok .content .cen{margin-left: .25rem;font-size: .38rem;line-height: .6rem;text-align: left;}
</style>
