<template>
    <div class="set">
        <div class="Taitle">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>个人资料</p>
        </div>
        <div class="headerd">
            <div class="center">
                <div class="up">
                    <p>头像</p>
                    <div class="img" @click="chose"><img :src="this.icon" alt="" style="border-radius:50%"  v-if="touxiangs"><img :src="tu" alt="" v-else style="border-radius:50%"><input style="display: none;" type="file"  id='uploadFile' accept="image/*"  v-on:change="readLocalFile()"></div>
                    <img src="../common/images/img/ios/look/箭头(3)拷贝4@1x.png" alt="" class="jiantou" style="margin-left:.2rem;">
                </div>
                <div class="up" @click="resname">
                    <p class="hu">昵称</p>
                    <p class="names" style="width:3rem;text-align:center;    margin-left: 57.5%;    margin-top: .1rem;">{{this.nickname}}</p>
                    <img src="../common/images/img/ios/look/箭头(3)拷贝4@1x.png" alt="" class="jiantou">
                </div>
                <div class="up" @click="bind">
                    <p>电话</p>
                    <span style="margin-left: 5rem;height:1rem">{{this.phone}}</span>
                    <img src="../common/images/img/ios/look/箭头(3)拷贝4@1x.png" alt="" class="tel">
                </div>
                <div class="up">
                    <p class="fl">年龄</p>
                    <div style="margin-left:7.2rem;float:left;">
                        <!-- <input type="text" placeholder="23" style="border:none;width:1rem" v-model="age" @click="ages" maxlength="3"> -->
                        <p class="nianling" @click="aged">{{age}}</p>
                    </div>
                </div>
                <div class="up">
                    <p class="fl">性别</p>
                    <van-radio-group v-model="radio" @change="sexs">
                        <van-radio name="0" checked-color="#07c160" >男</van-radio>
                        <van-radio name="1" checked-color="#07c160" >女</van-radio>
                    </van-radio-group>
                </div>
                <div class="up" @click="addr">
                    <p>头像</p>
                    <span class="">完善你的位置信息</span>
                    <img src="../common/images/img/ios/look/箭头(3)拷贝4@1x.png" alt="" class="addr1">
                </div>
                <div class="up" @click="respasd">
                    <p>修改密码</p>
                    <img src="../common/images/img/ios/look/箭头(3)拷贝4@1x.png" alt="" class="respas">
                </div>
            </div>
        </div>
        <van-picker
        show-toolbar
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
        v-if="xiaoshi"
        />
    </div>
</template>

<script>
import axios from '../axios'
import { RadioGroup, Radio, Notify, Picker, Toast } from 'vant';
import Axios from 'axios'
export default {
    inject:['reload'],
    data(){
        return {
            nickname:null,
            checked:true,
            age:null,
            phone:null,
            address:null,
            addressdetail:null,
            uid:'',
            sex:null,//男，女
            icon:null,
            show:false,
            hidden:false,
            radio: '0',
            touxiangs:true,
            items:[],
            tu:'',
            columns: [],
            xiaoshi:false
        }
    },
    // beforeRouteLeave:function(to, from, next){
    //     console.log(to)
    // },
    components:{        
        'van-radio-group':RadioGroup,
        'van-radio':Radio,
        'van-picker':Picker,
        [Notify.Component]: Notify.Component,
        // [Toast.Component]: Toast.Component
    },
    methods:{
        touxiang(){

        },
        // 修改性别
        sexs(index){
            console.log(index)
            let params = {
                cmd:'updateSex',
                uid:this.uid,
                sex:index
            }
            axios(params).then(res => {
                if(res.result == '0'){
                    console.log(res)
                    Toast({
                        message: res.resultNote,
                        duration: 1000
                    })
                }
            })
        },
        // selsex(se){
        //     this.sex = se
        //     // this.sexs()
        // },
        // 修改年龄
        ages(){
            let resage = {
                cmd:'updateAge',
                uid:this.uid,
                age:this.age
            }
            axios(resage).then(res => {
                if(res.result == '0'){
                    console.log(res)
                }
            })
        },
        // 跳页面传参
        resname(){
            // this.$router.push('/revise')
            this.$router.push({ path: '/revise', query: {nickname:this.nickname,phone:this.phone,icon:this.icon}})
        },
        bind(){
            this.$router.push({path:'/bind',query:{phone:this.phone,nickname:this.nickname,icon:this.icon,phone:this.phone}})
        },
        addr(){
            this.$router.push({path:'/addr',query:{addressdetail:this.addressdetail,address:this .address,nickname:this.nickname,phone:this.phone,icon:this.icon,age:this.age}})
        },
        back(){
            this.$router.push({path:'/my',query:{icons:this.items.dataobject}})
        },
        respasd(){
            this.$router.push({path:'/respasd',query:{addressdetail:this.addressdetail,address:this .address,nickname:this.nickname,phone:this.phone,icon:this.icon,age:this.age}})
        },
        // 修改头像
        chose(){
            this.touxiangs = false
            this.hidden = true
            document.getElementById("uploadFile").click();
        },
        // 上传图片
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
                        current.tu = "http://122.114.49.242/"+current.items.dataobject
                        let dat = {
                            cmd:'updateIcon',
                            uid:current.uid,
                            icon:current.tu
                        }
                        axios(dat).then(res => {
                            if(res.result == '0'){
                                console.log(res)
                                Toast({
                                    message: res.resultNote,
                                    duration: 1000
                                })
                            }
                        })
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
        // 点击年龄消失
        aged(){
            this.xiaoshi = true
        },
        // 年龄选择
        onConfirm(value, index) {
            console.log(value)
            this.age = value
            this.xiaoshi = false
            axios({cmd:'updateAge',uid:this.uid,age:this.age}).then(res=>{
                if(res.result == '0'){
                    console.log(res)
                    Toast({
                        message: res.resultNote,
                        duration: 1000
                    })
                }
            })
        },
        onCancel() {
            this.xiaoshi = false
        }
        
    },
    created(){
        this.uid = localStorage.getItem('uid')
        this.nickname = this.$route.query.nickname
        this.sex = this.$route.query.sex
        this.icon= this.$route.query.icon
        this.age= this.$route.query.age
        this.phone= this.$route.query.phone
        this.address= this.$route.query.address
        this.addressdetail= this.$route.query.addressdetail
        
        for(let i= 1;i<100;i++){
            this.columns.push(i+'岁')
        }
        
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.set{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;background: #fff;}
.van-radio-group {
    width: 2.5rem;
    display: flex;
    justify-content: space-between;
    margin-left: 65%;
    margin-top: 5%;
}
.set .Taitle{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.set .Taitle p{float: left;margin-left: 38%}
.set .Taitle img{float: left;margin-top: .55rem;margin-left: .5rem;width: .3rem;height: .5rem;}
.set .headerd{width: 100%;margin-top: 1.5rem;}
.set .headerd .center{width: 9.5rem;margin-left:.5rem;}
.set .headerd .center .up{border-bottom:.01rem solid rgba(226,226,226,1);overflow: hidden;line-height: 1.5rem;font-size: .4rem;overflow: hidden;height: 1.5rem;}
.set .headerd .center .up .upload-input{width: 1rem;height: 1rem;position: absolute;left: 8.6rem;top: 2.2rem;display: none;}
.set .headerd .center .up p{float: left;height: 1rem;}
.set .headerd .center .up .fl{float:left}
.set .headerd .center .up .float{float:left;overflow:hidden;height: 1.4rem;}
.set .headerd .center .up .float .sex1{float:left;margin-left:6rem;}
.set .headerd .center .up .float .sex1 img{width:.4rem;height:.4rem;margin-top:.7rem}
.set .headerd .center .up .float .sex2{float:left;margin-left:.5rem;}
.set .headerd .center .up .float .sex2 img{width:.4rem;height:.4rem;margin-top:.7rem}
.set .headerd .center .up span{float: left;}
.set .headerd .center .up .img{margin-top: .35rem;float: left;margin-left: 6.8rem;height: 1.2rem;overflow: hidden;height: 1rem;}
.set .headerd .center .up .img img{width: 1rem;height: 1rem;border-radius: .08rem;float: left;}
.set .headerd .center .up .img input{float: left;width: 1rem;position: absolute;left: 8.6rem;top: 2.2rem;}
.jiantou{width:.2rem;height:.3rem;float:left;margin-top:.75rem;margin-left:-.45rem;}
.tel{float:left;margin-top:.6rem;    margin-left: .4rem;}
.addr1{width:.2rem;height:.3rem;float:left;margin-top:.75rem;margin-left:4.7rem;}
.respas{width:.2rem;height:.3rem;float:left;margin-top:.75rem;margin-left:7.1rem;}
.names{margin-left: 3.6rem;float:left;width:5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height: 1rem;;}
.hu{height: 1rem;}
.logins {height: 3rem;width: 100%}
.logins .first{height: 2rem;width: 100%;background-color: #fff;transform: translate(-50%, -50%);z-index: 9999;;position: fixed;bottom: 2%;left: 50%;}
.logins .first div{border-bottom:.01rem solid rgba(226,226,226,1);height: 1rem;text-align: center;line-height: 1rem}
.logins .cose{height: 1rem;width: 100%;background-color: #fff;transform: translate(-50%, -50%);z-index: 9999;;position: fixed;bottom: -.5rem;left: 50%;text-align: center;line-height: 1rem}
.over {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}

</style>
