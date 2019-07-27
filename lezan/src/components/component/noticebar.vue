<template>
    <div>
        <div class="n1">
            <img class="nocimg" src="../../assets/images/touxiang.png" alt />
            <transition-group name="slide">            
            <p :key="text.id">{{text.val}}</p>
            </transition-group>           
        </div>
        <img src="../../assets/images/banner.jpg" alt style="width:100%;height:70px;margin: 20px 0;border-radius: 3px;display:block;box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);"/>
    </div>
</template>

<script>
export default {
    props:['textArr'],
    watch:{        
    },
    computed: {
        text () {
            return {
                id: this.number,
                val: this.textArr[this.number]
            }
        }
    },
    data(){
        return{            
            number: 0
        }
    },
    mounted(){
        this.startMove()
    },
    methods:{
        startMove () {
            // eslint-disable-next-line
            let timer = setTimeout(() => {
                if (this.number === 2) {
                this.number = 0;
                } else {
                this.number += 1;
                }
                this.startMove();
            }, 3000); // 滚动不需要停顿则将2000改成动画持续时间
        },
    }
}
</script>
<style scoped>

.n1{  
  box-shadow:0 2px 6px rgba(100, 100, 100, 0.3);
  width: 100%;
  height: 42px;
  border-radius: 5px;
  display: flex;
  flex-flow: row;
  align-items: center;
  padding-left: 15px;
  position: relative;
}
.nocimg{margin-right: 10px;height:25px;width:25px;}
.n1 p{ width: 100%;
    position: absolute;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    bottom: 0;}
.slide-enter-active, .slide-leave-active {
  transition: all 0.4s linear;
}
.slide-enter{
  transform: translateY(20px);
  opacity: 1;
}
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
