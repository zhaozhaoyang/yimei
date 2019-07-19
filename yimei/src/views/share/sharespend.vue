<template>
    <div class="sharespend">
        <div class="Title">分享人数
            <div class="ff1">
                <div class="tab" @click="showAll('first')"><a>第一代</a></div>
                <div class="tab" @click="showAll('two')"><a>第二代</a></div>
            </div>
        </div>
        <div class="spend">
            <p class="hum">消费人数：20</p>
            <p class="mon">消费金额：2000</p>
        </div>
        <first :is="currentTab"></first>
        <!-- <two :is="currentTab" keep-alive></two> -->
        <!-- <three :is="currentTab" keep-alive></three> -->
    </div>
</template>

<script>
import first from './sharehuman/first'
import two from './sharehuman/two'
export default {
    components:{
        first,
        two,
    },
    data(){
        return {
            currentTab:'first',
            current:0,
            tabs:[
                {tab:'第一代'},
                {tab:'第二代'},
            ]
        }
    },
    methods:{
        showAll:function(tab){
             this.currentTab = tab;
             this.current = tab;
        }
    },
}
</script>
<style>
*{margin: 0;padding: 0;}
.sharespend{font-family: 'PingFang-SC-Bold';}
.sharespend .Title{position: fixed;top:0;left: 0;width: 100%;height: 2.1rem;text-align: center;line-height: 1.05rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.3);}
.sharespend .spend{width: 100%;height: 1rem;background:rgba(242,242,242,1);position: relative;}
.sharespend .spend .hum{position: absolute;top:2.5rem;left: .8rem;font-size: .4rem;}
.sharespend .spend .mon{position: absolute;top:2.5rem;left: 6.7rem;font-size: .4rem;}
.sharespend .Title .ff1{font-size: .35rem;display: flex;justify-content: space-around;}
.sharespend .Title .ff1 .tab{text-decoration: none;font-size:.4rem;border-bottom:solid .05rem rgba(35,183,172,1);}
</style>
