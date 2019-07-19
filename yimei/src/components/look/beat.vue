<template>
  <div>
    <!-- 变美过程开始 -->
    <div class="beautify">
      <div class="beauty">
        <router-link to="/lookC" style="text-decoration:none;color:rgba(17,17,17,1)">
          <p class="change">变美过程</p>
          <div class="process" style="margin-left: .1rem; ">
            <img src="../../common/images/img/ios/look/椭圆7拷贝@1x.png" alt style="float:left;">
            <div class="day" style="float:left;margin-left:.25rem;">
              术后第
              <span style="color:rgba(35,183,172,1);">30</span>天
            </div>
            <p style="float:left;margin-left:.25rem;color:rgba(153, 153, 153, 1);">
              第
              <span>6</span>篇日记
            </p>
          </div>
          <div class="bannerimg" style="margin-left: .25rem; ">
            <div class="up">
              <img :src="item" alt v-for="(item,index) in items.diaryimage" :key="index">
            </div>
          </div>
          <p class="centers">{{items.content}}</p>
        </router-link>
        <div class="talk" style="margin-left:.25rem;">
          <p style="color:rgba(153,153,153,1);">
            <span>{{items.viewcount}}</span>人已看
          </p>
         <div class="clickes">
                <div class="bf">
                    <img src="../../common/images/img/ios/look/资源10@2x拷贝2@1x.png" alt="" style="width:.4rem;height.4rem;"><span>{{items.commentscount}}</span>
                </div>
                <div class="af">
                    <img src="../../common/images/img/ios/look/组143@1x.png" alt="" style="width:.4rem;height.4rem;"><span>{{items.zancount}}</span>
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
            uid:'',
            ddid:null,
            items:[]
        }
    },
    methods:{
        // 获取数据
        all(){
            let params = {
                cmd:'lookChildDiary',
                uid:this.uid,
                ddid:this.ddid
            }
            axios(params).then(res=>{
                if(res.result == '0'){
                    this.items = res.dataobject
                    console.log(res)
                }
            })
        }
    },
    mounted(){
        this.all()
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.ddid = this.$route.query.ddid
        console.log(this.$route.query.ddid)
    }
}
</script>

<style>
.beautify{width:100%;background:rgba(242,242,242,1);}
.beauty{width: 100%;background: #fff;height: 9.7rem;}
.beauty .process{width: 5rem;overflow: hidden;margin-top: .3rem;margin-left: -.15rem;}
.beauty .bannerimg{width: 9.2rem;height: 6rem;border-left: .02rem solid rgba(226,226,226,1);margin-top: -.1rem;}
.beauty .bannerimg .up{height: 6rem;padding-top: .5rem;margin-left: .5rem;}
.beauty .bannerimg .up img{width: 2.8rem;height: 2.8rem;margin-left: .1rem;}
.talk{width: 9.5rem;display: flex;justify-content: space-between;padding-top: .3rem;border-left: .02rem solid rgb(226,226,226,1);background: #fff;}
.talk .clickes{overflow: hidden;color:rgba(153,153,153,1);}
.talk .clickes .af{float:left}
.talk .clickes .bf{float:left;margin-right:1rem;width:1rem;}
.change{margin-top:.5rem;font-size:.4rem;color:rgba(17,17,17,1);font-weight:500;border:none;margin-left: .25rem; }
.centers{color:rgba(102,102,102,1);font-weight:500;font-size:.38rem;border-left: .02rem solid rgba(226,226,226,1);padding-top:.5rem;width:95%;margin-left: .25rem;}
</style>