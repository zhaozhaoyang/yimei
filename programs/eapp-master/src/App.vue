<template>
  <div class="app">
    <v-header :header-seller="seller"></v-header>
    <!-- <div @touchstart="touchstart" @touchend="touchend"> -->
      <div>
      <div class="tab border-1px">              
        <div class="tab-item" :class="act==0?'actived':''" @click="move(0)">
         商品
        </div>
        <div class="tab-item" :class="act==1?'actived':''" @click="move(1)">
         评论
        </div>
        <div class="tab-item" :class="act==2?'actived':''" @click="move(2)">
         商家
        </div>
      </div>
      <transition  mode="out-in" name="fade">
        <component :is="aaa" :seller="seller"></component>
      </transition>
      <!-- <keep-alive>
        <transition mode="out-in" name="fade">
        <router-view :seller="seller"></router-view>
        </transition>
      </keep-alive> -->
    </div>
    <shopcart :select-foods="selectedFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
</template>

<script>
import header from './components/header/header'
import shopcart from './components/shopcart/shopcart'
import ratings from './components/ratings/ratings'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
const ERR_OK = 0;
export default {
  components: {
    'v-header': header,
    shopcart,
    ratings,
    goods,
    seller

  },
  data() {
    return {
      seller: {},
      oneX:"",
      twoX:"",
      aaa:'goods',
      act:0
    }
  },
  created() {
    this.$http.get('/api/seller').then(response => {
      if (response.data.errno === ERR_OK)
        this.seller = response.data.data;
    }, response => {
      console.log('error,no data');
    });
  },
  computed: {
    selectedFoods() {
      return this.$store.state.foods;
    }
  },
  methods: {
    move(n){
      let arr = ['goods','seller','ratings']
      this.act = n
      this.aaa = arr[n]
    },
    change (food) {
      this.foods = food;
    },
    touchstart(e){
      this.oneX = e.changedTouches[0].clientX;
    },
    touchend(e){
      this.twoX = e.changedTouches[0].clientX;
      // console.log(this.oneX + '**' +this.twoX)
      if (this.oneX == this.twoX) {
        //当滑动距离等于0时触发点击事件
        window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
      }else if(this.oneX > this.twoX && (this.oneX-this.twoX)>50){
        // 向右走一个
        if(this.$route.fullPath == '/ratings'){
          this.$router.push('/goods')
        }
        if(this.$route.fullPath == '/seller'){
          this.$router.push('/ratings')
        }
      }else if(this.oneX < this.twoX && (this.twoX-this.oneX)>50){
        // 向左走一个
        if(this.$route.fullPath == '/ratings'){
          this.$router.push('/seller')
        }
        if(this.$route.fullPath == '/goods'){
          this.$router.push('/ratings')
        }
      }

    }
  }
}
</script>

<style lang="stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
       display: block
       margin 0 auto
       height 92%
       width 33%
       font-size: 14px
       color: rgb(77,85,93)
       &.router-link-active
        color: rgb(240,20,20)
        border-bottom 1px solid #e92322

    .actived
      color: rgb(240,20,20)
</style>
