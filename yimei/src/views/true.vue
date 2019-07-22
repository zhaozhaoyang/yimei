<template>
  <div class="true">
    <div class="Tqitle">
        <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
        <p>实名认证</p>
    </div>
    <div class="content">
        <div class="name">
            <span>真实姓名:</span>
            <input type="text" placeholder="请如实填写" style="border:none;margin-left:1rem;" v-model="name">
        </div>
        <div class="name">
            <span>身份证号码:</span>
            <input type="text" placeholder="身份证" style="border:none;margin-left:.6rem;" v-model="idcard" maxlength="18">
        </div>
        <div class="photo">
            <span>证件照片:</span>
            <div class="right">
                <div class="r1">
                    <!-- <span v-for="(imgs,index) in items" :key="index">
                        <img :src="imgs" v-if="image" alt="" style="width:100%;height:100%;position: relative;top:-1rem;left:-2.35rem">
                    </span> -->
                    <img :src="'http://122.114.49.242/'+items.dataobject" v-if="image" alt="" style="width:100%;height:100%;position: relative;top:-1rem;left:-2.35rem">
                    <input style="display: none;" type="file"  id='uploadFile' accept="image/*"  v-on:change="readLocalFile()">
                    <div class="tupian" @click="getImg1" v-if="clear">
                        <img src="../common/images/img/pic/预购/资源3@2x@2x.png" alt="" >
                        <p>身份证正面照片</p>
                    </div>
                </div>
                <div class="r1">
                    <!-- <span v-for="(imgss,index) in image2" :key="index">
                        <img :src="imgss" v-if="images" alt="" style="width:100%;height:100%;position: relative;top:-1rem;left:-2.35rem">
                    </span> -->
                    <img :src="'http://122.114.49.242/'+item.dataobject" v-if="images" alt="" style="width:100%;height:100%;position: relative;top:-1rem;left:-2.35rem">
                    <input style="display: none;" type="file"  id='uploadFiles' accept="image/   *"  v-on:change="readLocalFiles()">
                    <div class="tupian1" @click="getImg2" v-if="clear1">
                        <img src="../common/images/img/pic/预购/资源3@2x@2x.png" alt="" >
                        <p>身份证反面照片</p>
                    </div>
                    <!-- <img :src="image2" v-if="image2" alt="">
                    <img src="../common/images/img/pic/预购/资源3@2x@2x.png" alt="" @click="getImg(2)">
                    <p>身份证反面照片</p> -->
                </div>
            </div> 
        </div>
    </div>
    <div class="chuan" @click="submit">上传</div>
  </div>
</template>

<script>
import axios from '../axios.js' 
import Axios from 'axios'
import { Notify } from 'vant';
export default {
     data(){
        return {
            uid:"",
            name:"",
            idcard:"",
            image:false,
            images:false,//身份证反面照
            img:'',//身份证正面照
            clear:true,
            clear1:true,
            imgs:'',
            imgss:'',
            image1:'',
            image2:'',
            file:'',
            items:[],
            item:[],
        }
    },
    components:{
        [Notify.Component]: Notify.Component
    },
    methods:{
         //点击选中图片
        readLocalFile: function () {
            var localFile = document.getElementById("uploadFile").files[0];
            var reader = new FileReader();
            var content;
             var current=this;
            reader.onload = function(e) {
                console.log(e)
                content = current.dataURLtoFile(e.target.result,'1.png')
                // content = e.target.result;
                // console.log(content)
                var formdata = new FormData()
                formdata.append('file', content)
                // console.log(content)
                current.image1=content;  //获取图片base64代码
                return new Promise((resolve, reject) => {
                    var data =  {file:current.file}
                    // var url =encodeURI( 'http://122.114.49.242/plastic/api/uploadFile?json='+JSON.stringify(formdata))
                    // Axios.post(url).then(res => {
                    //     console.log(res)
                    //     //  resolve(res.data);
                    //     // console.log(res.data)
                    //  })
                    console.log(current.file)
                    
                     Axios({
                        url: 'http://122.114.49.242/plastic/api/uploadFile',
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: formdata
                    }).then((res)=>{
                        console.log(res)
                        current.items = res.data
                        console.log(current.items)
                        var url = ''
                        current.$set(current.items,current.items.dataobject,res.data.dataobject)
                        // console.log(current.items)
                    })

                })
            }
            reader.onerror = function(e) {
                alert('error')
            }
            content = reader.readAsDataURL(localFile,"UTF-8");
            var sss=document.getElementById("uploadFile").value;
            console.log(localFile.name);
            // var r1 =document.querySelector('.r1')
            // console.log(r1)
            this.image = true
            this.clear = false
        },
         //点击选中图片
        readLocalFiles: function () {
            var localFile = document.getElementById("uploadFiles").files[0];
            var reader = new FileReader();
            var content;
             var current=this;
            reader.onload = function(e) {
                console.log(e)
                // content = e.target.result;
                var content = current.dataURLtoFile(e.target.result,'2.png')
                var formdata = new FormData()
                formdata.append('file', content)
                current.image2=content;  //获取图片base64代码
                return new Promise((resolve, reject) => {
                    var data =  {file:current.file}
                    // var url =encodeURI( 'http://122.114.49.242/plastic/api/uploadFile?json='+JSON.stringify(formdata))
                    // Axios.post(url).then(res => {
                    //     console.log(res)
                    //     //  resolve(res.data);
                    //     // console.log(res.data)
                    //  })
                    console.log(current.file)
                    
                     Axios({
                        url: 'http://122.114.49.242/plastic/api/uploadFile',
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: formdata
                    }).then((res)=>{
                        console.log(res)
                        current.item = res.data
                        console.log(current.item)
                        var url = ''
                        current.$set(current.item,current.item.dataobject,res.data.dataobject)
                        console.log(current.item)
                    })

                })
            }
            reader.onerror = function(e) {
                alert('error')
            }
            content = reader.readAsDataURL(localFile,"UTF-8");
            var sss=document.getElementById("uploadFiles").value;
            console.log(localFile.name);
            // var r1 =document.querySelector('.r1')
            // console.log(r1)
            this.images = true
            this.clear1 = false
        },
        dataURLtoFile(dataurl, filename) { //将base64转换为文件
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {
                type: mime
            });
        },
        submit(){
            console.log(1111)
            if(this.name == ''){
                Notify({
                    message: '名字不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }
            var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
            if(this.idcard == ''){
                Notify({
                    message: '身份证不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }else if(!regIdNo.test(this.idcard)){
                 Notify({
                    message: '身份证号有误',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }
            if(this.image1 == ''){
                Notify({
                    message: '图片不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }else if(this.image2 == ''){
                 Notify({
                    message: '图片不能为空',
                    duration: 1000,
                    background: '(17,17,17,.5)'
                });
                return false
            }

            let params = {
                cmd:"realnameAuthentication",
                uid:this.uid,
                name:this.name,
                idcard:this.idcard,
                image1:this.image1,
                image2:this.image2
            }
            console.log(params)
            axios(params).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                    console.log('获取认证信息成功')
                    this.$router.push('/Login')
                }
            })
            return true
            
            
        },
        getImg1(){
            console.log(11111)
            document.getElementById("uploadFile").click();
        },
        getImg2(){
            console.log(222)
            document.getElementById("uploadFiles").click();
        },
        back(){
            this.$router.push({path:'/regist',query:{}})
        }
    },
    created(){
        this.uid = localStorage.getItem('uid')
    }
};
</script>

<style>
*{margin: 0;padding: 0;}
.true{font-family: 'PingFang-SC-Bold';background-color: #fff;height: 100%;}
.true .Tqitle {width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background:rgba(255,255,255,1);box-shadow:0 .1rem .1rem 0 rgba(227,227,227,0.45);}
.true .Tqitle p{float: left;margin-left: 33%}
.true .Tqitle img{float: left;margin-top: .5rem;margin-left: .5rem;}
.true .content{width: 8rem;background:rgba(255,255,255,1);margin-left: 1rem;margin-top: .8rem;}
.true .content .name{height: 1rem;width: 100%;}
.true .content .name span{font-size: .4rem;}
.true .content .name input{font-size: .4rem;color:rgba(153,153,153,1);}
.true .content .photo{width:8rem;overflow:hidden;}
.true .content .photo span{font-size: .4rem;}
.true .content .photo .right{color:rgba(153,153,153,1);float:left;}
.true .content .photo .right .r1{width:5.6rem;height:3rem;border:.05rem dashed rgba(153,153,153,1);margin-left:2.2rem;margin-top: .2rem;position: relative;}
.true .content .photo .right .r1 p{text-align: center;margin-top: .3rem;}
.true .content .photo .right div img{width: 0.8rem;height: 0.8rem;margin-left: 43%;margin-top: 1rem;}
.true .chuan{background: rgba(35,183,172,1);color: #fff;width: 8rem;height: 1rem;border: .05rem solid rgba(35,183,172,1);border-radius: .8rem;font-size: .4rem;line-height: 1rem;margin-left: 10%;margin-top: 1.5rem;text-align: center;}
.tupian{position: absolute;top: 0;left: 30%;}
.tupian1{position: absolute;top: 0;left: 30%;}
.van-popup.van-popup--top.van-notify{margin-top: 80%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: .7rem;border-radius: .2rem;font-size: .3rem;}
</style>
