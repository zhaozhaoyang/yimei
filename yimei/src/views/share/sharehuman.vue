<template>
    <div class="sharehuman">
        <div class="Title">分享人数
            <div class="ff1">
                <div class="tab" @click="showAll('first')"><a>第一代</a></div>
                <div class="tab" @click="showAll('two')"><a>第二代</a></div>
                <!-- <div class="tab" @click="showAll('three')"><a>第三代</a></div> -->
            </div>
        </div>
        <first :is="currentTab"></first>
        <!-- <two :is="currentTab" keep-alive></two> -->
        <!-- <three :is="currentTab" keep-alive></three> -->
    </div>
</template>

<script>
import first from './share/first'
import two from './share/two'
// import three from './sharehuman/three'
export default {
    components:{
        first,
        two,
        // three
    },
    data(){
        return {
            currentTab:'first',
            current:0,
            tabs:[
                {tab:'第一代'},
                {tab:'第二代'},
                // {tab:'第三代'}
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
.sharehuman{font-family: 'PingFang-SC-Bold';}
.sharehuman .Title{position: fixed;top:0;left: 0;width: 100%;height: 2.1rem;text-align: center;line-height: 1.05rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.3);}
.sharehuman .Title .ff1{font-size: .35rem;display: flex;justify-content: space-around;}
.sharehuman .Title .ff1 .tab{text-decoration: none;font-size:.4rem;border-bottom:solid .05rem rgba(35,183,172,1)}
</style>