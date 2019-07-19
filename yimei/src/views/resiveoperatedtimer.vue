<template>
    <div class="resot">
        <div class="Tsitle">
            <div class="span">
                <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
                <p class="dairy">新建日记</p>
                <p @click="submit" class="sureTB">提交</p>
            </div>
            <div class="detail">上传术前真实照片</div>
            <div class="pic">
                <div class="images">
                    <span v-for="(imgs,index) in items" :key="index" style="">
                        <img :src="'http://122.114.49.242/'+imgs"  v-if="images1" alt="" style="width: 2.2rem;height: 2.2rem;position: absolute;left:0rem;border-radius:.2rem;">
                    </span>
                    <!-- <img :src="'http://122.114.49.242/'+items[0].dataobject" v-if="images1" alt="" style="width: 2.2rem;height: 2.2rem;position: relative;border-radius:.2rem"> -->
                    <input style="display: none;" type="file"  id='uploadFile1' accept="image/*"  v-on:change="readLocalFile1()">
                    <img src="../common/images/img/ios/ios/组11@2x.png" alt="" v-if="clear1" @click="getImg1" >
                </div>
                <div class="imagess">
                    <span v-for="(imgs,index) in itemss" :key="index">
                        <img :src="'http://122.114.49.242/'+imgs"  v-if="images2" alt="" style="width: 2.2rem;height: 2.2rem;position: absolute;top:2.6rem;left:1.6rem;border-radius:.2rem">
                    </span>
                    <!-- <img :src="'http://122.114.49.242/'+itemss[0].dataobject" v-if="images2" alt="" style="width: 2.2rem;height: 2.2rem;position: relative;border-radius:.2rem"> -->
                    <input style="display: none;" type="file"  id='uploadFile2' accept="image/*"  v-on:change="readLocalFile2()">
                    <img src="../common/images/img/ios/ios/组10@1x.png" alt="" v-if="clear2" @click="getImg2" >
                </div>
                <div class="imagesss">
                    <span v-for="(imgs,index) in itemsss" :key="index">
                        <img :src="'http://122.114.49.242/'+imgs"  v-if="images3" alt="" style="width: 2.2rem;height: 2.2rem;position: absolute;top:2.6rem;left:1.6rem;border-radius:.2rem">
                    </span>
                    <!-- <img :src="'http://122.114.49.242/'+itemsss[0].dataobject" v-if="images3" alt="" style="width: 2.2rem;height: 2.2rem;position: relative;border-radius:.2rem"> -->
                    <input style="display: none;" type="file"  id='uploadFile3' accept="image/*"  v-on:change="readLocalFile3()">
                    <img src="../common/images/img/ios/ios/组8@1x.png" alt="" v-if="clear3" @click="getImg3" >
                </div>
                <div class="imagessss">
                    <span v-for="(imgs,index) in itemssss" :key="index">
                        <img :src="'http://122.114.49.242/'+imgs"  v-if="images4" alt="" style="width: 2.2rem;height: 2.2rem;position: absolute;top:2.6rem;left:1.6rem;border-radius:.2rem">
                    </span>
                    <!-- <img :src="'http://122.114.49.242/'+itemssss[0].dataobject" v-if="images4" alt="" style="width: 2.2rem;height: 2.2rem;position: relative;border-radius:.2rem"> -->
                    <input style="display: none;" type="file"  id='uploadFile4' accept="image/*"  v-on:change="readLocalFile4()">
                    <img src="../common/images/img/ios/ios/组9@1x.png" alt="" v-if="clear4" @click="getImg4" >
                </div>
            </div>
        </div>
        <!-- 记录心情 -->
        <div class="ready">
            <textarea placeholder="快来记录你的术前心情吧!" v-model="content"></textarea>
        </div>
        <!--  -->
        <!--  -->
        <!-- <fot style=""></fot> -->
        <div class="foot">
        <div class="center">
            <div class="up" @click="item">
                <p>手术项目</p>
                <p class="f13" v-if="choose">请选择</p>
                <p class="f13" v-else>{{name}}</p>
            </div>
            <div class="up" @click="tel">
                <p>手术时间</p>
                <p class="f13" style="margin-left:3.2rem;color:rgba(35,183,172,1);" v-if="zuichuxianshi">请选择时间</p>
                <p class="f13" style="margin-left:3.2rem;color:rgba(35,183,172,1);" v-else>{{val}}</p>
                <img src="../common/images/img/ios/ios/箭头(3)拷贝8@1x.png" alt="" style="margin-top:.68rem;margin-left:.2rem;">
            </div>
            <div class="up">
                <p>手术价格</p>
                <p class="f13">30000元</p>
            </div>
            <div class="up">
                <p>手术医生</p>
                <p class="f13">杨医生</p>
            </div>
             <div class="up">
                <p>手术医院</p>
                <p class="f13">郑州医美美容医院</p>
            </div>
        </div>
        <!-- 日期选择 -->
        <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        v-if="show"
        @confirm = "chucian"
        @cancel = "del($event)"
        />
        <!--  -->

        <!-- 项目弹窗模块 -->
        <!-- 弹窗模块 -->
        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="loginDB">
                 <img src="../common/images/img/pic/my/取消@2x.png" alt="" style="margin-left: 7.8rem;margin-top:.2rem;" @click="closepopup">
                 <div>
                     <div class="centers" v-for="(item,index) in types" :key="index" @click="alls">
                        <p style="font-size:.4rem;">【{{item.classname}}】{{item.proname}}</p>
                        <p>手术医生：{{item.doctorname}}</p>
                    </div>
                 </div>
            </div>
            <!--这里是半透明背景层-->
            <div class="overflowD"></div>
        </div>
    </div>
        <!--  -->
    </div>
</template>

<script>
// import fot from '@/components/operated/foot.vue'
import axios from '../axios'
import Axios from 'axios'
import { DatetimePicker,Notify } from 'vant';
export default {
    components:{
        // fot,
        [Notify.Component]: Notify.Component,
        'van-datetime-picker':DatetimePicker
    },
    data(){
        return {
            uid:'',
            image1:[],
            image2:[],
            image3:[],
            image4:[],
            content:'',
            ordernum:'',
            surgerytime:'',
            // 图片状态
            images1:false,
            images2:false,
            images3:false,
            images4:false,
            clear4:true,
            clear3:true,
            clear2:true,
            clear1:true,
            items:[],
            itemss:[],
            itemsss:[],
            itemssss:[],
            // 请求的数据
             // 弹框
            popup:0,
            popups:0,
            uid:'',
            currentDate: new Date(),
            minDate: new Date(),
            show:false,
            surgerytime:'',
            val:'',
            zuichuxianshi:true,
            types:[],
            orderNum:'',
            choose:true
        }
    },
    // beforeRouteLeave(to, from, next){
    //   console.log(to)
        
    // },
    methods:{
         //点击选中图片
        readLocalFile1: function () {
            var localFile = document.getElementById("uploadFile1").files[0];
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
                current.image1.push(content);  //获取图片base64代码
                console.log(current.image1)
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
                        console.log(res.data.dataobject)
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
            var sss=document.getElementById("uploadFile1").value;
            console.log(localFile.name);
            // var r1 =document.querySelector('.r1')
            // console.log(r1)
            this.images1 = true
            this.clear1 = false
        },
         //点击选中图片
        readLocalFile2: function () {
            var localFile = document.getElementById("uploadFile2").files[0];
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
                current.image2.push(content);  //获取图片base64代码
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
                        current.itemss = res.data
                        console.log(current.itemss)
                        var url = ''
                        current.$set(current.itemss,current.itemss.dataobject,res.data.dataobject)
                        // console.log(current.items)
                    })

                })
            }
            reader.onerror = function(e) {
                alert('error')
            }
            content = reader.readAsDataURL(localFile,"UTF-8");
            var sss=document.getElementById("uploadFile2").value;
            console.log(localFile.name);
            // var r1 =document.querySelector('.r1')
            // console.log(r1)
            this.images2 = true
            this.clear2 = false
        },
         //点击选中图片
        readLocalFile3: function () {
            var localFile = document.getElementById("uploadFile3").files[0];
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
                current.image3.push(content);  //获取图片base64代码
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
                        current.itemsss = res.data
                        console.log(current.itemsss)
                        var url = ''
                        current.$set(current.itemsss,current.itemsss.dataobject,res.data.dataobject)
                        // console.log(current.items)
                    })

                })
            }
            reader.onerror = function(e) {
                alert('error')
            }
            content = reader.readAsDataURL(localFile,"UTF-8");
            var sss=document.getElementById("uploadFile3").value;
            console.log(localFile.name);
            // var r1 =document.querySelector('.r1')
            // console.log(r1)
            this.images3 = true
            this.clear3 = false
        },
         //点击选中图片
        readLocalFile4: function () {
            var localFile = document.getElementById("uploadFile4").files[0];
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
                current.image4.push(content);  //获取图片base64代码
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
                        current.itemssss = res.data
                        console.log(current.itemssss)
                        var url = ''
                        current.$set(current.itemssss,current.itemssss.dataobject,res.data.dataobject)
                        // console.log(current.items)
                    })

                })
            }
            reader.onerror = function(e) {
                alert('error')
            }
            content = reader.readAsDataURL(localFile,"UTF-8");
            var sss=document.getElementById("uploadFile4").value;
            console.log(localFile.name);
            // var r1 =document.querySelector('.r1')
            // console.log(r1)
            this.images4 = true
            this.clear4 = false
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
        // 数据
        //打开电话规则页面
        tel(){
            this.popups = 1;
            if(this.show == false){
                this.show = true
            }else{
                this.show = false
            }
        },
        // 关闭电话规则页面
        closepopups(){
            this.popups = 0;
        },

        // 打开项目弹窗
        item(){
            this.popup = 1;
            this.choose = false
        },
        alls(){
            this.popup = 0
        },
        // 关闭项目弹窗
        closepopup(){
            this.popup = 0;
        },
        all(){
            this.popup = 0
            axios({cmd:'noDiaryOrder',uid:this.uid,}).then(res => {
                if(res.result == '0'){
                    this.types = res.dataList
                    console.log(this.types)
                    for(var i = 0;i<this.types.length;i++){
                        console.log(this.types[i].ordernum)
                        this.orderNum = this.types[i].ordernum
                        this.name = this.types[i].classname
                        console.log(this.name)
                    }
                }
            })
        },
        del(){
            this.show = false
        },
        chucian(date){
            this.zuichuxianshi = false
            // console.log(date.getFullYear()+"-"+date.getMonth()+1 +'-'+date.getDay())
            // console.log(val.getYear())
            // console.log(val.getMonth())
            // console.log(val.getDay())
            // console.log(val.toLocaleString())
            // console.log(val.toLocaleTimeString())
            // console.log(date.toLocaleDateString())
            // console.log(val.valueOf())
            // this.val = date.toLocaleDateString()
            var month = date.getMonth()+1
            var day = date.getDay()+1
            this.val = date.getFullYear()+"-"+ month+'-'+day
            console.log(this.val)
            this.show = false
           
        },
        // 请求数据
        every(){
            let over = {
                cmd:'newDiary',
                uid:this.uid,
                image1:this.image1,
                image2:this.image2,
                image3:this.image3,
                image4:this.image4,
                content:this.content,
                ordernum:this.orderNum,
                surgerytime:this.val
            }
            console.log(over)
            axios(over).then(res => {
                console.log(2222)
                console.log(over)
                if(res.result == '0'){
                    console.log(res)
                }
            })
        },
        getImg1(){
            console.log(11111)
            document.getElementById("uploadFile1").click();
        },
        getImg2(){
            console.log(2222)
            document.getElementById("uploadFile2").click();
        },
        getImg3(){
            console.log(3333)
            document.getElementById("uploadFile3").click();
        },
        getImg4(){
            console.log(4444)
            document.getElementById("uploadFile4").click();
        },

        // 跳转页面
        submit(){
            this.every()
        },
        back(){
            this.$router.push('/daiaryR')
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
.resot{font-family: 'PingFang-SC-Bold';width: 100%;background: #fff;height: 100%;}
.resot .Tsitle{position: fixed;top:0;left: 0;width: 100%;height: 6rem;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);box-shadow:0 .1rem .18rem 0 rgba(227,227,227,0.45);}
.resot .Tsitle .span{overflow: hidden;}
.resot .Tsitle .span .dairy{float: left;margin-left: 34%}
.resot .Tsitle .span .sureTB{font-weight: normal;font-size: .38rem;float: left;margin-left: 30%}
.resot .Tsitle .span img{float: left;margin-left: .25rem;margin-top: .5rem}
.resot .Tsitle .detail{font-weight:500;color:rgba(17,17,17,1);font-size: .4rem;text-align: center;margin-top: -.5rem;}
.resot .Tsitle .pic{width: 95%;margin-top: .3rem;margin-left: .25rem;}
/* .resot .Tsitle .pic div{float:left;margin-left:.15rem} */
.resot .Tsitle .pic img{width: 2.2rem;height: 2.2rem;}
.resot .Tsitle .pic .images{position:relative;left:0rem;}
.resot .Tsitle .pic .imagess{position: relative;left: 2.35rem;top: -2.75rem;}
.resot .Tsitle .pic .imagesss{position:relative;left:4.7rem;top:-5.5rem}
.resot .Tsitle .pic .imagessss{position:relative;left:7.05rem;    top: -8.28rem;}
.resot .ready{width: 100%;height: 3.3rem;position: relative;top: 6.5rem;}
.resot .ready textarea{width: 95%;height: 3.2rem;margin-left: .25rem;border: none;border-bottom: .01rem solid rgba(226,226,226,1)}
.foot .center{width: 100%;height: auto;background: #fff;position: relative;top: 6.5rem;left: 0;}
.foot .center .up{width: 9.5rem;margin-left:.5rem;height: 1.5rem;border-bottom:.01rem solid rgba(226,226,226,1);overflow: hidden;;font-size: .4rem;}
.foot .center .up p{line-height: 1.5rem;float: left;}
.foot .center .up .f13{float: left;width: 4rem;line-height: 1rem;height: 1rem;margin-top: .3rem;color:rgba(153,153,153,1);overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align: right;margin-left: 3.5rem;}
.loginDB {position: fixed;height: 6rem;width: 9rem;background-color: #fff;border-radius: 0.15rem;left: 50%;top: 80%;transform: translate(-50%, -50%);z-index: 9999;}
.overflowD {position: fixed;width: 100%;height: 100%;opacity: 0.7;filter: alpha(opacity=70);top: 0;left: 0;z-index: 999;background-color: #111111;}
.loginDB .centers{width: 8.5rem;height:1.8rem;margin-left: .25rem;border-bottom:.01rem solid rgba(226,226,226,1);margin-top: .3rem;}
.loginDB .centers p{color: rgba(17,17,17,1);font-weight:500;font-size: .38rem;margin-left: .25rem;margin-top: -.5rem;line-height: 1.2rem;}
.van-popup.van-popup--top.van-notify{margin-top: 50%;background: rgba(17,17,17,.5);left: 25%;height: 1rem;width: 50%;line-height: .7rem;border-radius: .2rem;font-size: .3rem;}
</style>
