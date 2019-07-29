<template>
    <div class="lunbo">
        <swiper :options="swiperOption" ref="mySwiper"  v-if="list.length>0">
            <swiper-slide v-for="(item,index) in list" :key="index">
                <img
                :src="item.image"
                alt
                class="lunboImg"               
                />
            </swiper-slide>            
        </swiper>
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
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created(){
      this.list  = this.bannerlist
    },
    data(){
        return{
            list:[],
            swiperOption: {
                loop:true,
                spaceBetween: 10, // 在slide之间设置距离（单位px）。
                slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
                centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
                speed:1000,
                pagination: {
                  el: '.swiper-pagination',
                },

            },
        }
    },
    mounted() {
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
  height: 160px;
}

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 80% !important;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 150px;
  border-radius: 5px;
}
.swiper-container .swiper-wrapper .swiper-slide-prev,.swiper-container .swiper-wrapper .swiper-slide-next{
  height: 130px !important;
  margin-top: 10px;
}
.swiper-container .swiper-wrapper .swiper-slide-prev img,.swiper-container .swiper-wrapper .swiper-slide-next img{
  width: 100%;
  height: 100%;
}
</style>
