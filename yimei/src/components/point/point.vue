<template>
  <div class="dialog" v-if="showDialog">
    <div class="dialog_mask"></div>
    <div class="dialog_container">
      <div class="dialog_content">
        <div class="dialog_content_top" v-text="msg">提示内容</div>
        <!-- <div class="dialog_btn">
          <a v-if="type==1" href="javascript:;" class="btn" @click="close">确定</a>
          <a v-if="type==2" href="javascript:;" class="btn" @click="close">取消</a>
          <a v-if="type==2" href="javascript:;" class="btn" @click="login">去登录</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'',
            showDialog:false,
        }
    }
};
</script>

<style>
.dialog{
    width: 95%;
    border-radius: .2rem;
    margin-left: .25rem;
    opacity: 0.7;
    background-color: #000;
}
.dialog_mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: #000;
}
.dialog_container {
  opacity: 0.7;
  background-color: #000;
  width: 3rem;
  height: 1rem;
  position: relative;
  border-radius: 10px;
  margin: 0 auto;
}
.dialog_content {
  text-align: center;
  padding-top: 30px;
}
/* .dialog_btn {
  margin-top: 20px;
}
.dialog_btn a {
  background: yellow;
  padding: 2px 30px;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  width: 50px;
  display: inline-block;
}
.dialog_btn a:nth-child(2) {
  margin-left: 20px;
} */
</style>
