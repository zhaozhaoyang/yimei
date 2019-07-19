<template>
    <div class="mydiary">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>我的日记本</p>
        </div>
        <div class="headerse">
            <div class="front" @click="order">
                <img src="../common/images/img/pic/日记/组5@1x.png" alt="">
                <span>创建日记本</span>
            </div>
            <div class="start" v-for="(item,index) in items" :key="index">
                <div class="left">
                    <img :src="item.diaryicon" alt="" @click="jump">
                </div>
                <div class="right">
                    <div class="detailCC">
                        <p style="font-size:.4rem;font-weight:500;">{{item.proname}}</p>
                        <img src="../common/images/img/ios/help/help/椭圆548@1x.png" alt="" @click="timer">
                    </div>
                    <p class="day">D+{{item.days}}天</p>
                    <div class="content">{{item.allnum}}篇 {{item.adtime}}</div>
                    <div class="btn" v-if="item.state == 0">待审核</div>
                    <div class="btn" @click="write" v-else-if="item.state == 1">续写日记</div>
                    <div class="btn" v-else>已拒绝</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            uid:'',
            items:[],
            diaryid:''
        }
    },
    // beforeRouteLeave(to, from, next){
    //     console.log(to)        
    // },
    methods:{
        all(){
            axios({cmd:'myDiarys',uid:this.uid}).then(res => {
                if(res.result == '0'){
                    console.log(res)
                    this.items = res.dataList
                    console.log(this.items)
                    for(var i = 0;i<this.items.length;i++){
                        if(this.items[i].state == '1'){
                            this.diaryid=this.items[i].diaryid
                            console.log(this.diaryid)
                        }
                    }
                }
            })
            // axios({cmd:'getDiaryTime',uid:this.uid,diaryid:this.diaryid}).then(res=>{
            //     // console.log(res)
            //     if(res.result == '0'){
            //         console.log(res)
            //     }
            // })
        },
        order(){
            this.$router.push('/daiaryR')
        },
        write(){
            // this.$router.push('/becpres')
            this.$router.push({path:'/becpres',query:{diaryid:this.diaryid}})
        },
        timer(){
            this.$router.push('/newdiary')
            // this.$router.push({path:'/newdiary',query:{diaryid:this.types.diaryid,surgerytime:this.types.surgerytime}})
        },
        back(){
            this.$router.push('/my')
        },
        jump(){
            this.$router.push('/look')
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.all()  
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.mydiary{font-family: 'PingFang-SC-Bold';width: 100%;background: #fff;height: 100%;}
.mydiary .Title{background: #fff;position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.mydiary .Title img{float: left;margin-left: .25rem;margin-top: .5rem}
.mydiary .Title p{float: left;margin-left: 30%}
.mydiary .headerse{width: 100%;margin-top: 1.8rem;}
.mydiary .headerse .front{width: 95%;background: #fff;border-radius: .1rem;height: 1rem;overflow: hidden;;line-height: 1rem;margin-left: .25rem;box-shadow:0px 0px .2rem 0px rgba(227,227,227,0.45);}
.mydiary .headerse .front img{width: 0.5rem;height: 0.6rem;margin-top: .25rem;float: left;margin-left: 3.5rem;}
.mydiary .headerse .front span{font-size: .45rem;float: left;margin-left: .2rem;font-weight: 500;}
.mydiary .headerse .start{width: 95%;border-radius: .1rem;box-shadow:0px 0px .2rem 0px rgba(227,227,227,0.45);height: 4.5rem;display: flex;justify-content: space-between;margin-top: .4rem;margin-left: .25rem;}
.mydiary .headerse .start .left{width: 4rem;height: 4.5rem;margin-right: .2rem;}
.mydiary .headerse .start .left img{width: 3.5rem;height: 3.8rem;margin-top: .3rem;}
.mydiary .headerse .start .right{width: 5rem;margin-top: .4rem;}
.mydiary .headerse .start .right .detailCC{width: 4.8rem;display: flex;justify-content: space-between}
.mydiary .headerse .start .right .day{margin-top: .3rem;font-size: .4rem;}
.mydiary .headerse .start .right .content{font-size: .4rem;margin-top: .3rem;}
.mydiary .headerse .start .right .btn{width: 4.5rem;border: .05rem solid rgba(35,183,172,1);height: 1rem;border-radius: .8rem;margin-top: .4rem;text-align: center;line-height: 1rem;color: rgba(35,183,172,1);font-size: .38rem;}
</style>
