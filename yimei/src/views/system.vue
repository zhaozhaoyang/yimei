<template>
    <div class="system">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>系统服务</p>
        </div>
        <!-- 帮助开始 -->
        <div class="every">
            <div class="all" @click="help">
                <div class="up">
                    <p>帮助与客服</p>
                    <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="">
                </div>
            </div>
            <div class="all" @click="connect">
                <div class="up">
                    <p>联系我们</p>
                    <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="">
                </div>
            </div>
            <div class="all">
                <div class="up" @click="guide">
                    <p>关于指南</p>
                    <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="">
                </div>
            </div>
            <div class="all" @click="updata">
                <div class="up">
                    <p>检查更新</p>
                    <img src="../common/images/img/ios/help/箭头(3)拷贝4@1x.png" alt="">
                </div>
            </div>
        </div>
        <!--  -->
        <div class="btn">退出登录</div>
    </div>
</template>

<script>
export default {
    methods:{
        help(){
            this.$router.push('/help')
        },
        guide(){
            this.$router.push('/guide')
        },
        connect(){
            this.$router.push('/connect')
        },
        updata(){
            this.$router.push('/updata')
        },
        back(){
            this.$router.push('/my')
        }
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.system{font-family: 'PingFang-SC-Bold';width: 100%;background: #fff;height: 100%;}
.system .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.system .Title p{float: left;margin-left: 35%}
.system .Title img{float: left;margin-top: .5rem;margin-left: .25rem}
.system .every{width: 95%;margin-left: .5rem;margin-top: .5rem;margin-top: 1.5rem;}
.system .every .cont{font-size: .4rem;font-weight: 500;color:rgba(17,17,17,1);}
.system .every .all{height: 1.5rem;width: 100%;border-bottom: .01rem solid rgba(226,226,226,1);line-height: 1.5rem;}
.system .every .all .up{overflow: hidden;;margin-top: .3rem;font-size: .35rem;}
.system .every .all .up p{float: left;}
.system .every .all .up img{float: left;width: 0.2rem;height: 0.3rem;margin-top: -.8rem;margin-left: 8.2rem;}
.system .btn{width: 9rem;height: 1.3rem;background:rgba(35,183,172,1);opacity:0.6;border-radius: .8rem;font-size: .4rem;font-weight:500;color:#fff;text-align: center;line-height: 1.3rem;margin-top: 2.5rem;margin-left: .5rem;}
</style>