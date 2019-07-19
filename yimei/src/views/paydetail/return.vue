<template>
    <div class="moneys">
        <div class="Title">账单详情</div>
        <div class="header">
            <p>退款</p>
            <p style="font-size:.7rem;margin-top:.15rem;">+60</p>
            <fot></fot>
        </div>
        
    </div>
</template>

<script>
import fot from '@/components/detail/fot.vue'
export default {
    components:{
        fot
    }
}
</script>

<style>
*{margin: 0;padding: 0;}
.moneys{font-family: 'PingFang-SC-Bold';width: 100%;}
.moneys .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.moneys .header{width: 95%;height: 2rem;;margin-left: .25rem;border-bottom: .01rem solid rgba(226,226,226,1);margin-top: 1.8rem;line-height: .7rem;}
.moneys .header p{text-align: center;font-size: .4rem;}
</style>
