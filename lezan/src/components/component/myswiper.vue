<template>
    <div class="lunbo">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in bannerlist" :key="index">
                <img
                :src="item.image"
                alt
                style
                class="lunboImg"               
                />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- <van-swipe :autoplay="3000" indicator-color="#5c45c6"  style="height:100%;">
        <van-swipe-item
            v-for="(item,index) in bannerlist"
            :key="index"
        >
            <img
            :src="item.image"
            alt
            style
            class="lunboImg"               
            />
        </van-swipe-item>
        </van-swipe> -->
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:['bannerlist'],
    components: {
        swiper,
        swiperSlide
    },
    watch:{
        bannerlist(){
            this.list  = this.bannerlist
        }
    },
    data(){
        return{
            swiperOption: {
            pagination: {
                el: '.swiper-pagination'
            }
            },
        }
    }
}
</script>
<style scoped>
.lunbo {
  width: 100%;
  height: 4.27rem;
  background: #fff;
}
.lunboImg {
  width: 100%;
  height: 4.27rem;
}
</style>
