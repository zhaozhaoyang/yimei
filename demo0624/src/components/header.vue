<template>
    <div :class="[bg==1?'bg1':'bg2']">
        <van-nav-bar
            :title="title"
            :right-text="rtext"
            :left-arrow="back"
            :border="showbd"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
         <van-icon name="shopping-cart-o" slot="left" v-if="showLf" size="25px"/>
         <van-icon name="shopping-cart-o" slot="right" v-if="showRt" size="25px"/>
        </van-nav-bar>
        <slot name="sss"/>
    </div>
</template>
<script>
import { NavBar ,Icon,Toast } from 'vant';
export default {
    components:{NavBar,Icon,Toast },
    data(){
        return{
            msg:111
        }
    },
    props:{
        title:{
            default:""
        },
        showbd:{
            default: false
        },
        back:{
            default:false
        },
        rtext:{
            type:String,
            default:""
        },
        showLf:{
            default:false
        },
        showRt:{
             default:false
        },
        bg:{
            default:1
        }
    },
    methods:{
        onClickLeft() {
            // Toast('返回');
            // this.$emit('onClickLeft',{aaa:'111'})
            // this.$root.$emit('onClickLeft',{aaa:'111'})
            this.$parent.test()
        },
        onClickRight() {
            // Toast('按钮');
             this.$emit('onClickRight',{aaa:'111'})
        }
    }
}
</script>
<style scoped>
    .bg1{background: #fff;}
    .bg2{background: lightskyblue;color: #fff;}
</style>
