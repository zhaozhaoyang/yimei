<template>
  <div>
    <!-- 变美过程开始 -->
    <div class="beautify">
      <div class="beauty" v-for="(item,index) in items" :key="index">
        <div style="text-decoration:none;color:rgba(17,17,17,1)" @click="jump">
          <p class="change">变美过程</p>
          <div class="process" style="margin-left: .1rem; ">
            <img src="../../common/images/img/ios/look/椭圆7拷贝@1x.png" alt style="float:left;">
            <div class="day" style="float:left;margin-left:.25rem;">
              术后第
              <span style="color:rgba(35,183,172,1);">{{items.afterday}}</span>天
            </div>
            <p class="number">
              第<span>6</span>篇日记
            </p>
          </div>
          <div class="bannerimg">
            <div class="up">
              <img :src="item" alt v-for="(item,index) in lists.diaryimage" :key="index">
            </div>
          </div>
          <p class="class">{{lists.content}}</p>
        </div>
        <div class="talk" style="margin-left:.25rem;">
          <p style="color:rgba(153,153,153,1);">
            <span>{{item.viewcount}}</span>人已看
          </p>
           <div class="clickes">
                <div class="bf" style="float:left;margin-right:1rem;width:1rem;">
                    <img src="../../common/images/img/ios/look/资源10@2x拷贝2@1x.png" alt="" style="width:.4rem;height.4rem;"><span>{{items.commentscount}}</span>
                </div>
                <div class="af" style="float:left">
                    <img src="../../common/images/img/ios/资源15@2x拷贝@1x.png" alt="" style="width:.4rem;height.4rem;"><span>{{items.zancount}}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import axios from '../../axios'
export default {
    data(){
        return {
            diaryid:null,
            userid:null,
            uid:'',
            items:[],
            types:[],
            lists:[]
        }
    },
    // beforeRouteLeave:function(to, from, next){
    //     console.log(to)
    // },
     methods:{
        // 获取数据
        all(){
            let params = {
                cmd:'lookDiary',
                uid:this.uid,
                diaryid:this.diaryid
            }
            axios(params).then(res=>{
                if(res.result == '0'){
                    // console.log(res)
                    this.items = res.dataobject.afterdiary
                    // console.log(this.items)
                    for(var i = 0;i<res.dataobject.afterdiary.length;i++){
                      this.lists = res.dataobject.afterdiary[i]
                    }
                    // console.log(this.items)
                }
            })
            axios(params).then(res=>{
                if(res.result == '0'){
                    // console.log(res)
                    this.types = res.dataobject
                }
            })
        },

        // 获取更多相关数据
        more(){
          let more = {
            cmd:"prodetailDiary",
            
          }
        },
        // 跳转子日记
        jump(){
          console.log(this.items)
          this.$router.push({ path: '/lookC', query: {ddid: this.lists.ddid,diaryid:this.diaryid}})
        }
    },
    mounted(){
        this.all()
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.diaryid = this.$route.query.diaryid
        console.log(this.$route.query.diaryid)
    }
}
</script>

<style>
.beautify{width:100%;background:rgba(242,242,242,1);margin-top: -0.2rem;}
.beauty{width: 100%;background: #fff;max-height: 14rem;}
.beauty .process{width: 5rem;overflow: hidden;margin-top: .3rem;margin-left: -.15rem;}
.beauty .bannerimg{width: 95%;max-height:10rem;border-left: .02rem solid rgba(226,226,226,1);margin-top: -.1rem;margin-left: .25rem;}
.beauty .bannerimg .up{max-height:10rem;padding-top: .5rem;margin-left: .5rem;}
.beauty .bannerimg .up img{width: 2.8rem;height: 2.8rem;margin-left: .2rem;}
.talk{width: 9.5rem;display: flex;justify-content: space-between;padding-top: .3rem;border-left: .02rem solid rgb(226,226,226,1);background: #fff;}
.talk .clickes{overflow: hidden;color:rgba(153,153,153,1);}
.class{color:rgba(102,102,102,1);font-weight:500;font-size:.38rem;border-left: .02rem solid rgba(226,226,226,1);padding-top:.5rem;width:9.5rem;margin-left: .25rem;}
.change{margin-top:.3rem;font-size:.4rem;color:rgba(17,17,17,1);font-weight:500;border:none;margin-left: .25rem; }
.number{float:left;margin-left:.25rem;color:rgba(153, 153, 153, 1);}
</style>
