<template>
<div class="suoyou">
    <div class="menu">
        <div class="Title">
            <img src="../../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>眼部整形</p>
        </div>
        <div class="boxl">
            <div class="content" v-for="(item,index) in items" :key="index">
                <!-- {{index}} -->
                <div class="eye">
                    <div class="front">
                        <router-link :to="{path:'/eyeall',query:{secondid:item.secondid,secondname:item.secondname}}" class="detail">
                        <!-- ,query:{secondid:items[0].secondid} -->
                            <img :src="item.secondimage" alt="">
                            <p style="margin-top:.1rem;">{{item.secondname}}</p>
                        </router-link>
                    </div>
                    <div class="right">
                        <div class="alls">
                            <router-link :to="{path:'/eyeall',query:{secondid:item.secondid,secondname:item.secondname,thirdid:itemss.thirdid}}" style="margin-top:.3rem;" v-for="(itemss,index) in item.thirdList" :key="index">{{itemss.thirdname}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from '../../axios'
export default {
    data(){
        return {
            items:[],
            fid:null
        }
    },
    // beforeRouteLeave(to, from, next){
    //    console.log(to)
        
    // },
    created(){
        this.fid = this.$route.query.fid
        console.log(this.$route.query.fid)
    },
    mounted(){
        this.init()
    },
    methods:{
        init () {
            let eyes = {
                cmd:'getsecondclassification',
                fid:this.fid
                
            }
            axios(eyes).then(res=>{
                if(res.result=='0'){
                    console.log(res)
                    this.items = res.dataList
                    // console.log(this.items)
                    // for(var i = 0;i<this.items.length;i++){
                    //     console.log(this.items[i].thirdList)
                    //     localStorage.setItem("secondid",this.items[i].secondid);
                    //     // for(var j = 0;j<this.items[i].thirdList.length;j++){
                    //     //     console.log(this.items[i].thirdList[j])
                    //     //     localStorage.setItem("thirdid",this.items[i].thirdList[j].thirdid);
                    //     // }
                    // }
                }
            })
        },
        back(){
            this.$router.push({path: '/advance'})
        }
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.suoyou{width: 100%;height: 100%;position: relative;top:0;}
.menu{font-family: 'PingFang-SC-Bold';background: #fff;position: absolute;width: 100%;top: .3rem}
.menu .Title {position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0px 0px .12rem 0px rgba(0, 0, 0, 0.3);}
.menu .Title p{float: left;margin-left: 35%}
.menu .Title img{float: left;margin-top: .5rem;margin-left: .5rem;}
.menu .boxl{width:100%;background:#fff;margin-top:1.5rem}
.menu .content{width: 9.5rem;margin-top: .3rem;margin-left: .25rem;}
.menu .content .eye{overflow: hidden;;width: 100%;height: 4rem;border-radius: .2rem;box-shadow:0px 0px 7px 0px rgba(252, 204, 237, 0.35);}
.menu .content:nth-child(4n+1) .eye{background:linear-gradient(175deg,rgba(254,241,243,1),rgba(250,221,224,1));}
.menu .content:nth-child(4n+2) .eye{background:linear-gradient(180deg,rgba(214,237,255,1),rgba(167,210,247,1));}
.menu .content:nth-child(4n+3) .eye{background:linear-gradient(155deg,rgba(249,238,252,1),rgba(242,223,253,1));}
.menu .content:nth-child(4n) .eye{background:linear-gradient(168deg,rgba(255,239,249,1),rgba(249,214,237,1));}
.menu .content .eye .front{float: left;;width: 4rem;height: 3rem;border-right: .05rem solid #fff;display: flex;justify-content: space-around;margin-top: 0.5rem;}
.menu .content .eye .front .detail{margin-top: .5rem;text-decoration: none;width: 3rem;text-align: center}
.menu .content .eye .front .detail img{width: 1rem;height: 1rem;}
.menu .content .eye .front .detail p{text-align: center;font-size: .4rem;font-weight:500;color:rgba(17,17,17,1);}
.menu .content .eye .right{float: left;;width: 5rem;height: 4rem;}
.menu .content .eye .right .alls{overflow: hidden;}
.menu .content .eye .right .alls a{margin-left: .2rem;;width: 2.3rem;height: 0.8rem;background:rgba(254,252,249,1);opacity:0.6;border-radius:.4rem;float: left;text-align: center;line-height: .8rem;font-weight:500;color:rgba(17,17,17,1);font-size:.35rem;text-decoration: none;}
</style>
