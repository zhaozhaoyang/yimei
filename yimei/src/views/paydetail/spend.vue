<template>
    <div class="moneys">
        <div class="Title">账单详情</div>
        <div class="header">
            <p>好友消费返款</p>
            <p style="font-size:.7rem;margin-top:.15rem;">+60</p>
        </div>
         <div class="parent">
            <p>当前状态</p>
            <p style="margin-left:1rem;color:rgba(17,17,17,.5)">交易成功</p>
        </div>
        <div class="parent">
            <p>收款账户</p>
            <p style="margin-left:1rem;color:rgba(17,17,17,.5)">余额</p>
        </div>
        <div class="parent">
            <p>好友名称</p>
            <p style="margin-left:1rem;color:rgba(17,17,17,.5)">杨医生</p>
        </div>
        <div class="parent">
            <p>消费金额</p>
            <p style="margin-left:1rem;color:rgba(17,17,17,.5)">2019-04-06 15:20:10</p>
        </div>
        <div class="parent">
            <p>消费项目</p>
            <p style="margin-left:1rem;color:rgba(17,17,17,.5)">2019-04-06 15:20:10</p>
        </div>
         <div class="parent">
            <p>交易时间</p>
            <p style="margin-left:1rem;color:rgba(17,17,17,.5)">2019-04-06 15:20:10</p>
        </div>  
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
*{margin: 0;padding: 0;}
.moneys{font-family: 'PingFang-SC-Bold';width: 100%;}
.moneys .Title{position: fixed;top:0;left: 0;width: 100%;height: 1.5rem;text-align: center;line-height: 1.5rem;font-size: .5rem;font-weight: bold;color: rgba(17, 17, 17, 1);background: #fff;z-index: 9999;box-shadow:0 .1rem .18rem 0 rgba(226,226,226,0.45);}
.moneys .header{width: 95%;height: 2rem;;margin-left: .25rem;border-bottom: .01rem solid rgba(226,226,226,1);margin-top: 1.8rem;line-height: .7rem;}
.moneys .header p{text-align: center;font-size: .4rem;}
.moneys .parent{width: 8rem;overflow: hidden;margin-top: .5rem;margin-left: .25rem}
.moneys .parent p{float: left;font-size: .4rem;}
</style>
