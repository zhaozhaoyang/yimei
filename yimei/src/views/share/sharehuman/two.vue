<template>
    <div style="width:100%;height:15rem;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.3)">
        <ul class="content">
        <li class="f1" v-for="(tab_content_arr,index) in tab_content_arr" :key="index">
            <div class="left">
                <img :src="tab_content_arr.url" alt>
                <span>{{tab_content_arr.title}}</span>
            </div>
            <div class="m1">{{tab_content_arr.timer}}</div>
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
                    url:"../../common/images/img/pic/我的/形状4@2x.png",
                    title:'医美微整形医师2',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/我的/资源25@2x@2x.png",
                    title:'医美微整形医师2',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/tab/资源12@2x@2x.png",
                    title:'医美微整形医师2',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/注册登录/组6@2x.png",
                    title:'医美微整形医师2',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/首页/qq@2x@2x.png",
                    title:'医美微整形医师2',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/预购/组142@2x.png",
                    title:'医美微整形医师2',
                    timer:'2019-04-02'
                },
            ]
        }
    }
};
</script>

<style>
.content{width: 100%;text-align: center;margin-top: 2.5rem;}
.content .f1{width: 9.5rem;height: 100%;line-height: 2rem;overflow: hidden;margin-left: .5rem;border-bottom: .03rem solid rgba(226,226,226,1);}
.content .f1 .left{width: 5rem;display: flex;justify-content: space-around;float: left;}
.content .f1 .left img{width:1rem;height: 1rem;border-radius: 50%;background: #000;margin-top: .5rem;}
.content .f1 .left span{font-weight:500;color:rgba(17,17,17,1);font-size: .38rem;}
.content .f1 .m1{font-weight:500;color:rgba(153,153,153,1);font-size: .35rem;float: left;margin-left: 2.2rem;}
</style>
