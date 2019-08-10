<template>
    <div>
        <myheader tit="任务详情" showL="true"></myheader>
        <div class="top">
            <van-uploader :after-read="afterRead" accept="image/*" :max-count="1"  v-model="fileList" multiple>
                <img src="../assets/images/camera.png" alt="" style="height:78px;width:78px;margin-bottom:10px;">
            </van-uploader>
            <p>添加图片</p>
        </div>
        <div class="pdalar">
            <p class="Tasktitle">任务信息</p>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    任务名称
                </van-col>
                <van-col span="12" class="mylist rt">
                    {{obj.title}}
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    任务金额
                </van-col>
                <van-col span="12" class="mylist rt">
                   +{{obj.price}}元
                </van-col>
            </van-row>
            <van-row class="Trow">
                <van-col span="12" class="mylist">
                    完成状态
                </van-col>
                <van-col span="12" class="mylist rt">
                     {{obj.state==0?'未完成':obj.state==1?'已完成':obj.state==2?'审核通过':obj.state==3?'审核拒绝':'未领取'}}
                </van-col>
            </van-row>
        </div>
        <m-ybutton @click="subtask" text="提交任务"></m-ybutton>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import axios from 'axios'
import { Toast } from "vant";
export default {
    components:{myheader},
    data(){
        return{
            uid: this.$store.state.uid || window.localStorage.getItem("uid"),
            userTaskId:'',
            fileList:[],
            obj:{},
            image:''
        }
    },
    created(){
        this.obj = this.$route.params.obj
        console.log(this.obj)
        if(this.$route.params.obj.id){
            this.userTaskId = this.$route.params.obj.id
        }else{
            this.userTaskId =this.$route.params.obj.userTaskId
        }

        
    },
    mounted() {
        var first = null;
        var that = this
        mui.back = function() {
            if (!first) {
            first = new Date().getTime();
            that.$router.back()
            setTimeout(function() {
                first = null;
            }, 1000);
            } else {
            if (new Date().getTime() - first < 1000) {
                plus.runtime.quit();
            }
            }
        };

    },
    methods:{
        afterRead(file){  
            var formdata = new FormData();
            formdata.append("file", file.file);            
            axios.post("http://47.95.5.242/api/uploadFile",formdata)
            .then(res => {
            //   Toast("上传成功！");
              this.image =  'http://47.95.5.242/'+res.data.url
              
            })
            .catch(err => {
                Toast("图片上传失败！");
            });               
                
        },
        subtask(){
            if(this.image==''){
                Toast("请上传图片！");
                return;
            }
            console.log(this.obj.state)
            if(this.obj.state != 0){
                Toast("任务已完成，请勿重复提交！");
                return;
            }
            var params = { cmd: "finishTask",uid:this.uid,userTaskId:this.userTaskId,image:this.image}            
            this.postRequest(params).then(res => {       
                this.$router.push('/success')
            });            
        }
    }
}
</script>
<style scoped>
.Trow{border-bottom: 1px solid #E6E6E6;}
.mylist{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
}
.rt{text-align: right}

.top{
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 20px 0;
}
.top p{
    font-size: 14px;
}
.pdalar{
    padding: 0 12px;
}
.Tasktitle{
    font-weight: bold;
    font-size: 16px;color: #000;
    height: 30px;
    line-height: 30px;
}
</style>

