<template>
    <div class="kefu">
        <div class="Title">客服列表</div>
        <ul class="content">
            <li class="f1" v-for="(tab_content_arr,index) in tab_content_arr" :key="index">
            <div class="left">
                <img :src="tab_content_arr.url" alt>
                <span>{{tab_content_arr.title}}</span>
            </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
     data(){
        return {
            tab_content_arr:[
                {
                    url:"../common/images/img/ios/1/圆角矩形2拷贝4@1x.png",
                    title:'医美微整形医师2',
                },{
                    url:"../common/images/img/ios/1/圆角矩形2拷贝3@1x_9.png",
                    title:'医美微整形医师2',
                }
            ]
        }
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.kefu{font-family: 'PingFang-SC-Bold';width: 100%;height: 100%;}
.kefu .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.kefu .content{width: 95%;border-bottom: .2rem;text-align: center;margin-top: 1.8rem;margin-left: .5rem;}
.kefu .content .f1{height: 100%;line-height: 2rem;overflow: hidden;;border-bottom: .03rem solid rgba(226,226,226,1);}
.kefu .content .f1 .left{width: 4.5rem;display: flex;justify-content: space-around;float: left;}
.kefu .content .f1 .left img{width:1rem;height: 1rem;border-radius: 50%;background: #000;margin-top: .5rem;}
.kefu .content .f1 .left span{font-weight:500;color:rgba(17,17,17,1);font-size: .38rem;}
</style>
