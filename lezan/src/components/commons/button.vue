<template>
  <div class="btn" :class="[size==1?'large':size==2?'middle':'small']" @click="ck">{{text}}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "提交"
    },
    size: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {};
  },
  methods:{
      ck(){
          this.$emit("click")
      }
  }
};
</script>

<style scoped>
.btn{
  color: #fff;  
  height: 1rem;
  border-radius:20px;
  /* background: linear-gradient(180deg, #face15, #fddd56); */
  font-size: 16px;
  text-align: center;
  line-height: 1rem;
  cursor: pointer;
  background:#face15;
  /* box-shadow:0 1px 3px rgba(100, 100, 100, 0.3); */
}
.large{
  margin: 30px auto; 
  width: 8.8rem;
}
.middle{
  width: 7.5rem;
  margin: 30px auto; 
}
.small{
  margin: 10px auto 30px; 
  width: 35%;
}
</style>