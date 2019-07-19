<template>
  <div class="contentss">
    <div class="box">
      <p class="ups">订单信息</p>
      <div class="stars">
        <p style="font-size:.38rem;color:rgba(17,17,17,1)">订单编号：</p>
        <p>123565897852566221</p>
      </div>
      <div class="stars">
        <p style="font-size:.38rem;color:rgba(17,17,17,1)">创建时间：</p>
        <p>2019-04-06 15:20:20</p>
      </div>
      <div class="stars">
        <p style="font-size:.38rem;color:rgba(17,17,17,1)">预购时间：</p>
        <p>2019-04-06 15:20:20</p>
      </div>
      <div class="stars">
        <p style="font-size:.38rem;color:rgba(17,17,17,1)">手术时间：</p>
        <p>2019-04-06 15:20:20</p>
      </div>
      <div class="stars" style="border:none">
        <p style="font-size:.38rem;color:rgba(17,17,17,1)">医生点击确认完成时间：</p>
        <p>2019-04-06 15:20:20</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contentss{width: 100%;height: 4rem;margin-top: 1rem;}
.contentss .ups{font-weight:bold;color:rgba(17,17,17,1);font-size: .4rem;padding-top: .3rem;padding-left: .25rem;}
.contentss .stars{overflow: hidden;border-bottom:.01rem solid rgba(226,226,226,1);height: 1.5rem;line-height: 1.5rem;}
.contentss .stars p{margin-left: .25rem;float: left;color:rgba(102,102,102,1);font-size: .4rem}
</style>
