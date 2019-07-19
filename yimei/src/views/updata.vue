<template>
    <div class="guide">
        <div class="Title">
            <img src="../common/images/img/ios/detal/ios/返回@1x_53.png" alt="" @click="back">
            <p>版本更新</p>
        </div>
        <img src="../common/images/img/ios/ios/图片1拷贝@1x.png" alt="">
        <p>{{items.content}} {{items.ver}}</p>
        <div class="btn">检查更新</div>
    </div>
</template>

<script>
import axios from '../axios'
export default {
    data(){
        return {
            items:[],
            type:'1'
        }
    },
    methods:{
        back(){
            this.$router.push('/system')
        }
    },
    created(){
        axios({cmd:'checkUpdate',type:this.type}).then(res => {
            if(res.result == '0'){
                this.items = res.dataobject
                console.log(this.items)
            }
        })
    }
}
</script>
<style>
*{margin: 0;padding: 0;}
.guide{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;background-color: #fff;}
.guide .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;overflow: hidden;background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.guide .Title p{float: left;margin-left: 28%;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);}
.guide .Title img{float: left;margin-top: .5rem;margin-left: .25rem}
.guide img{margin-left: 38%;margin-top: 35%;border-radius:.5rem;}
.guide p{text-align: center;margin-top: .5rem;color:rgba(102,102,102,1);font-size: .4rem;width: 3.2rem;margin-left: 35%;}
.guide .btn{width: 80%;height: 1rem;background:rgba(35,183,172,1);border-radius:.8rem;text-align: center;line-height: 1rem;font-size: .4rem;color: #fff;margin-left: 1rem;margin-top: 2rem;}
</style>
