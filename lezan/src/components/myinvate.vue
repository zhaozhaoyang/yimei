<template>
    <div>
        <myheader tit="邀请好友" showL="true"></myheader>
        <div class="stip">
            <p class="p1">点击保存图片</p>
            <p class="p2">一级好友完成一个任务  提成：0.2元</p>
            <p class="p2">二级好友完成一个任务  提成：0.1元</p>
        </div>
        <img src="../assets/images/banner.png" alt @click="save" style="width:100%;height:520px;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>

    </div>
</template>
<script>
import myheader  from './component/header.vue'
import { Dialog,Toast } from 'vant';
export default {
    components:{myheader},
    data(){
        return{
           
        }
    },
    methods:{
       save(){
           Dialog.confirm({
            title: '保存推广码',
            message: '是否保存推广码'
            }).then(() => { 
                plus.gallery.save( "https://img.yzcdn.cn/vant/logo.png", function () {
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
</style>
