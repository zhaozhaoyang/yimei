<template>
    <ul class="content">
      <li class="f1" v-for="(tab_content_arr,index) in tab_content_arr" :key="index">
        <div class="left">
          <img :src="tab_content_arr.url" alt>
          <span>{{tab_content_arr.title}}</span>
        </div>
        <div>{{tab_content_arr.timer}}</div>
      </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            tab_content_arr:[
                {
                    url:"../../common/images/img/pic/我的/形状4@2x.png",
                    title:'医美微整形医师3',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/我的/资源25@2x@2x.png",
                    title:'医美微整形医师3',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/tab/资源12@2x@2x.png",
                    title:'医美微整形医师3',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/注册登录/组6@2x.png",
                    title:'医美微整形医师3',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/首页/qq@2x@2x.png",
                    title:'医美微整形医师3',
                    timer:'2019-04-02'
                },{
                    url:"../../common/images/img/pic/预购/组142@2x.png",
                    title:'医美微整形医师3',
                    timer:'2019-04-02'
                },
            ]
        }
    }
};
</script>

<style>
.content{width: 100%;border-bottom: .2rem;text-align: center;margin-top: 2.5rem;}
.content .f1{width: 9.5rem;height: 100%;line-height: 2rem;display: flex;justify-content: space-between;margin-left: .5rem;border-bottom: .03rem solid rgba(226,226,226,1);}
.content .f1 .left{width: 4.5rem;display: flex;justify-content: space-around;}
.content .f1 .left img{width:1rem;height: 1rem;border-radius: 50%;background: #000;margin-top: .5rem;}
.content .f1 .left span{font-weight:500;color:rgba(17,17,17,1);font-size: .38rem;margin-left: .3rem;}
.content .f1 div{font-weight:500;color:rgba(153,153,153,1);font-size: .35rem;}
</style>

