<template>
    <div style="width:100%;">
        <myheader tit="邀请好友" showL="true"></myheader>
        <div class="stip">
            <p class="p1">点击保存图片</p>
            <p class="p2">一级好友完成一个任务  提成：0.2元</p>
            <p class="p2">二级好友完成一个任务  提成：0.1元</p>
        </div>        
        <canvas id="myCanvas" ref="myCanvas" width="330" height="500"  @click="save" style="border:1px solid #666;margin:0 auto;display:block;"></canvas>
        <img src="../assets/images/banner.png" ref="img" style="width:100%;height:520px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);visibility:hidden;"/>
        <div id="qrcode" ></div>
    </div>
</template>
<script>
import myheader  from './component/header.vue'
import QRCode from 'qrcodejs2'  // 引入qrcode
import { Dialog,Toast } from 'vant';
export default {
    components:{myheader},
    data(){
        return{
           
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
            this.$refs.img.onload =async function(){          
                 ctx.drawImage(bg,0,0,c.width,c.height)
                
            }
            qrImgsrc.onload = async function(){
                ctx.drawImage(qrImgsrc,c.width/2-66,c.height/2-66);  
               
            }                   
            
        },
        qrcode() {
            let qrcode = new QRCode('qrcode', {
                width: 132,  
                height: 132,
                text: 'https://www.baidu.com', // 二维码地址
                colorDark : "#000",
                colorLight : "#fff",
            })  
            
        },
       save(){
           var image = new Image()
           image.src = this.$refs.myCanvas.toDataURL("image/png");

           Dialog.confirm({
            title: '保存推广码',
            message: '是否保存推广码'
            }).then(() => { 
                plus.gallery.save(image, function () {
                    Toast.success('保存成功！');                
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
