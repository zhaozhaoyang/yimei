<template>
<div class="took">
    <div class="circle">
        <p style="margin-left:.3rem;font-size:.4rem;font-weight:500;margin-top:.3rem;">更多相关数据</p>
        <div class="detail">
            <img :src="items.usericon" alt="">
            <div class="rt">
                <p style="font-size:.4rem;color(17.17.17.1);">{{items.username}}</p>
                <p style="font-size:.38rem;color:rgba(153,153,153,1);">{{items.diarytime}}</p>
            </div>
        </div>
        <div class="pic">
            <img src="../../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x_90.png" alt="">
            <img src="../../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x.png" alt="">
        </div>
        <p style="width:9.5rem;margin-left: .3rem;color:rgba(102,102,102,1);font-size:.35rem;margin-top:.2rem;">挺喜欢的一句话，因为放弃过所以知道坚持有多难，字字入心，针针见血。我很庆幸对于美，我一直在追求，撑着还...</p>
        <div class="more">
            <p style="color:rgba(153,153,153,1);"><span>1200</span>人已看</p>
            <div class="click">
                <div class="bf" style="float:left;margin-right:1rem;width:1rem;">
                    <img src="../../common/images/img/ios/look/资源10@2x拷贝2@1x.png" alt="" style="width:.4rem;height.4rem;"><span>200</span>
                </div>
                <div class="af" style="float:left">
                    <img src="../../common/images/img/ios/资源15@2x拷贝@1x.png" alt="" style="width:.4rem;height.4rem;"><span>200</span>
                </div>
            </div>
        </div>
    </div>
    <div class="circle" style="position:absolute;top:9.6rem;">
        <p style="margin-left:.3rem;font-size:.4rem;font-weight:500;margin-top:.3rem;">更多相关数据</p>
        <div class="detail">
            <img src="../../common/images/img/ios/1/椭圆6@1x.png" alt="">
            <div class="rt">
                <p style="font-size:.4rem;color(17.17.17.1);">宝爸宝妈</p>
                <p style="font-size:.38rem;color:rgba(153,153,153,1);">4月3号</p>
            </div>
        </div>
        <div class="pic">
            <img src="../../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x_90.png" alt="">
            <img src="../../common/images/img/ios/look/talk/圆角矩形3拷贝3@1x.png" alt="">
        </div>
        <p style="width:9.5rem;margin-left: .3rem;color:rgba(102,102,102,1);font-size:.35rem;margin-top:.2rem;">挺喜欢的一句话，因为放弃过所以知道坚持有多难，字字入心，针针见血。我很庆幸对于美，我一直在追求，撑着还...</p>
        <div class="more">
            <p style="color:rgba(153,153,153,1);"><span>1200</span>人已看</p>
            <div class="click">
                <div class="bf" style="float:left;margin-right:1rem;width:1rem;">
                    <img src="../../common/images/img/ios/look/资源10@2x拷贝2@1x.png" alt="" style="width:.4rem;height.4rem;"><span>200</span>
                </div>
                <div class="af" style="float:left">
                    <img src="../../common/images/img/ios/资源15@2x拷贝@1x.png" alt="" style="width:.4rem;height.4rem;"><span>200</span>
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
            diaryid:null,
            proid:null,
            uid:'',
            items:[]
        }
    },
     methods:{
        //  获取proid
        every(){
            let types = {
                cmd:'lookDiary',
                uid:this.uid,
                diaryid:this.diaryid
            }
            axios(params).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                }
            })
        },
        // 获取数据
        all(){
            let params = {
                cmd:'prodetailDiary',
                proid:this.proid,
                uid:this.uid,
                diaryid:this.diaryid
            }
            axios(params).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                    this.items = res.dataobject
                }
            })
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
.took{width: 100%;height: 19.2rem;position: relative;bottom: 0;}
.took .circle{width: 100%;height: 9.3rem;background: #fff;position: absolute;top:.3rem;}
.took .circle .detail{width: 95%;overflow: hidden;margin-left: .25rem;margin-top: .3rem;}
.took .circle .detail img{float: left;width: 1rem;height: 1rem;border-radius: 50%;}
.took .circle .rt{float: left;margin-left: .3rem;}
.took .circle .pic{margin-top: .3rem;display: flex;justify-content: space-around;}
.took .circle .pic img{width: 4.5rem;height: 4.5rem;}
.took .circle .more{margin-left: .25rem;width: 9.5rem;display: flex;justify-content: space-between;padding-top: .3rem;}
.took .circle .more .click{overflow: hidden;color:rgba(153,153,153,1);}
</style>
