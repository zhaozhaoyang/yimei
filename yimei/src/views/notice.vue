<template>
    <div class="notice">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="backTo">
            <p>通知</p>
        </div>
        <div class="show" ref="content">
            <div class="f1"  v-for="(item,index) in items" :key="index">
                <div class="header">
                    <div class="detail">{{item.noticetitle}}</div>
                    <span>{{item.noticetime}}</span>
                </div>
                <p class="content">{{item.noticecontent}}</p>
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
            nowPage:'1',
            totalPage:'10',
            flag:true,
            items:[]
        }
    },
    mounted(){
        window.addEventListener('scroll',this.scrollLoad,true)
    },
    methods:{
        backTo(){
            history.back(-1)
            // this.$router.push('/shopcar')
        },
        every(){
            let all = {
                cmd:'getNotice',
                uid:this.uid,
                nowPage:this.nowPage
            }
            axios(all).then(res=>{
                console.log(res)
                this.items = res.dataList
            })
        },
        scrollLoad(){
            this.$nextTick(() => {
            let scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  
            // let footer = document.querySelector('.footer')
            let content= this.$refs.content
            let contentH = content.offsetTop + content.clientHeight;
            let windowHeight = window.innerHeight
            if(scrollT + windowHeight >= contentH && this.flag){
                this.flag = false
                this.nowPage++
                if(this.nowPage<=this.totalPage){
                    let all = {
                        cmd:'getNotice',
                        uid:this.uid,
                        nowPage:this.nowPage
                    }
                    axios(all).then(res=>{
                        console.log(res)
                        this.items.push(...res.dataList)
                        this.flag = true
                    })
                // let params = {
                //     cmd:"recommendPro",
                //     nowPage:this.nowPage
                //     }
                //     // console.log(params)
                //     axios(params).then(res=>{
                //     // console.log(res)
                //     this.types.push(...res.dataList)
                //     this.flag = true
                //     // console.log(this.types)
                //     // console.log(this.$refs)//
                //     // console.log(contentH)
                //     })
                }
            }
        })
      },
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.every()
    },      
    destroyed() {
        window.removeEventListener('scroll',this.scrollLoad,true)
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.notice{font-family: 'PingFang-SC-Bold';width: 100%;background:rgba(242,242,242,1);height: 100%;}
.notice .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);background: #fff;}
.notice .show{width: 100%;padding-top: 1.5rem;}
.notice .show .f1{width: 9.5rem;margin-left: .25rem;;height: 2.5rem;background: #fff;border-radius: .15rem;margin-top: .4rem;}
.notice .show .f1 .header{width: 9rem;display: flex;justify-content: space-between;margin-left: .25rem;}
.notice .show .f1 .header .detail{font-size: .42rem;margin-top: .3rem;}
.notice .show .f1 .header span{margin-top: .3rem;}
.notice .show .f1 .content{margin-top: .2rem;width: 9rem;margin-left: .25rem;font-size: .38rem;}

.notice .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.notice .Title p{float: left;margin-left: 38%}
.notice .Title img{float: left;margin-left: .25rem;margin-top: .5rem}
</style>
