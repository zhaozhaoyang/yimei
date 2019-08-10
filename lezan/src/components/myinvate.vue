<template>
    <div style="width:100%;height:100vh;overflow:hidden;">
        <myheader tit="邀请好友" showL="true"></myheader>
        <!-- <div class="stip">
            <p class="p1">点击保存图片</p>
            <p class="p2">一级好友完成一个任务  提成：0.2元</p>
            <p class="p2">二级好友完成一个任务  提成：0.1元</p>
        </div>         -->
        <canvas id="myCanvas" ref="myCanvas" width="330" height="560"  @click="save" style="margin:10px auto;display:block;"></canvas>
        <div id="qrcode" style="visibility: hidden"></div>
        <img src="../assets/images/bg.png" ref="img" style="width:80%;height:520px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);visibility: hidden"/>  
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import QRCode from 'qrcodejs2'  // 引入qrcode
import { Dialog,Toast } from 'vant';
var wc=null,bitmap=null; 
export default {
    components:{myheader},
    data(){
        return{
           uid:this.$store.state.uid || window.localStorage.getItem("uid"),
        }
    },
    mounted () {
        var first = null
        var that = this
        mui.back = function() {
            if (!first) {
            that.$router.push('/my')
            first = new Date().getTime() 
            setTimeout(function() { 
                first = null
            }, 1000)
            } else {
            if (new Date().getTime() - first < 1000) { 
                plus.runtime.quit() 
            }
            }
        }
        this.qrcode()
        this.draw()
    },
    methods:{
        draw(){            
            var c=this.$refs.myCanvas;
            var qrImgsrc = document.querySelector('#qrcode img')
            var ctx=c.getContext("2d");            
            var bg = this.$refs.img
            ctx.drawImage(bg,0,0,c.width,c.height)
            
            ctx.drawImage(qrImgsrc,c.width/2-75,c.height/2+55);  
            // this.$refs.img.onload =function(){
            //      ctx.drawImage(bg,0,0,c.width,c.height)
                
            // }
            // qrImgsrc.onload = function(){
            //     console.log(qrImgsrc.src)
            //     ctx.drawImage(qrImgsrc,c.width/2-75,c.height/2+55);  
               
            // }                   
            
        },
        qrcode() {
            let qrcode = new QRCode('qrcode', {
                width: 150,  
                height: 150,
                text: 'http://lezan.lixinapp.com/api/regist?inviteId='+this.uid, // 二维码地址
                colorDark : "#000",
                colorLight : "#fff",
            })  
            
        },
       save(){
           var image = new Image()
           image.src = this.$refs.myCanvas.toDataURL("image/png");           
            // var qrImgsrc = document.querySelector('#qrcode img')            
            if(image.src == 'undefined' || image.src == '' || image.src == undefined){
                Toast('保存失败，请手动截屏！');
                return;
            }
            wc = plus.webview.currentWebview();  
            bitmap = new plus.nativeObj.Bitmap("test");  
            // 加载Base64编码格式图片到Bitmap对象  
            bitmap.loadBase64Data(image.src, function(){  
                console.log("加载Base64图片数据成功");  
            }, function(e){  
                 
            } ); 

           Dialog.confirm({
            title: '保存推广码',
            message: '是否保存推广码'
            }).then(() => { 
                // plus.gallery.save(image, function () {
                //     Toast.success('保存成功！');                
                // });
                var timestamp = (new Date()).valueOf();  
                bitmap.save( "_doc/"+timestamp+".jpg"  
                ,{}  
                ,function(i){  
                    console.log('保存图片成功：'+JSON.stringify(i));  
                    plus.gallery.save(i.target, function () {
                        Toast.success('保存成功！'); 
                    });
                }  
                ,function(e){  
                    console.log('保存图片失败：'+JSON.stringify(e));  
                }); 
            }).catch(() => {
            });
           
       }
    }
}
</script>
<style scoped>
.stip{
    height: 80px;
    background: #07c160;
    color: #fff;
    text-align: center;
}
.p1{height: 30px;line-height: 30px;font-size: 16px;}
.p2{line-height: 19px;font-size: 12px;}
#qrcode{
    height: 132px;
    width: 132px;
    margin:  30px auto;
}
</style>
