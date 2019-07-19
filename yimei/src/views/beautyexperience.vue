<template>
    <div class="beauty">
        <div class="Title">
            <span style="margin-left:4rem;line-height: 1.5rem;text-align:center;">变美历程</span>
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back" class="shangyiji">
            <span style="font-size:.38rem;margin-left:2rem;color:rgba(35,183,172,1);font-weight: normal;" @click="send">发布</span>
            <div class="pic">
                <img src="../common/images/img/ios/ios/组6@1x.png" alt="">
                <div class="b1">
                    <p style="font-size: .45rem;">第三篇日记</p>
                    <p style="font-size: .35rem;margin-top:.2rem;">2019-04-06</p>
                </div>
            </div>
            <div class="heart" @click="remove">
                <textarea placeholder="今天又变美了，快来记录一下·"  v-model="content"></textarea>
                <!-- :max-count限制了上传的数量 -->
                <van-uploader v-model="fileList" multiple  :max-count="3" />
                <!-- <div> -->
                    <!-- <img src="../common/images/img/ios/sure/添加图片@1x.png" alt="" style=""> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios'
import { Uploader } from 'vant';
export default {
    data(){
        return {
            popups:1,
            uid:'',
            diaryid:null,
            // diaryimages:'',
            content:'',
            fileList: []
        }
    },
    components:{
        'van-uploader':Uploader
    },
     methods:{
        remove(){
            this.popups = 0;
        },
        send(){
            let beauty = {
                cmd:'releaseDiary',
                uid:this.uid,
                diaryid:this.diaryid,
                diaryimages:this.fileList,
                content:this.content
            }
            console.log(beauty)
            axios(beauty).then(res => {
                console.log(res)
            //     if(res.result == '0'){
            //         console.log(res)
            //         this.$router.push('/dcheck')
            //     }
            })
        },
        back(){
            history.back(-1)
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.diaryid = this.$route.query.diaryid
        console.log(this.$route.query.diaryid)
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.beauty{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.shangyiji{position: absolute;top: .5rem;left: 0.5rem;}
.beauty .Title{position: fixed;top:0;left: 0;width: 100%;height: 3rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.beauty .Title .pic{overflow: hidden;margin-left: .5rem;}
.beauty .Title .pic img{float: left;width: 1.1rem;height: 1.3rem;}
.beauty .Title .pic .b1{float: left;font-weight: normal;margin-left: .5rem;color:rgba(35,183,172,1);}
.beauty .heart{width: 95%;height: 5rem;background: rgba(255,255,255,1);margin-left: .25rem;border-bottom: .01rem solid rgba(226,226,226,1);position: relative;}
.beauty .heart textarea{color:rgba(153,153,153,1);width: 100%;height: 3rem;;font-size: .38rem;font-weight:normal;margin-top: .3rem;border: none;}
.beauty .heart img{width:1.2rem;height:1.2rem;}
.van-uploader {
    margin-top: -0.6rem;
}
</style>
