<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image"/>
      </van-swipe-item>
    </van-swipe>
    <div :class="[issticky?'sticky2':'sticky']" ref="zzz">
        粘你的头
    </div>
    <div class="goods" ref="box">
      <!-- <scroll  class="menu-wrapper"> -->
        <div ref="menu" class="menu-wrapper">
          <ul>
            <li class="menu-item" v-for="(item,index) in goods" :class="{active:currentIndex===index}" :key="index" @click="scrollTo(index)">
              <span class="text border-1px">
                <span v-if="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
              </span>
            </li>
          </ul>
        </div>
      <!-- </scroll>
      <scroll class="foods-wrapper"> -->
      <div ref="foods" class="foods-wrapper" @touchstart='touchstart' @touchend="touchend" @touchmove="touchmove">
        <ul>
          <li v-for="item in goods" class="food-list food-list-hook" :key="item.name">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item border-1px" :key="food.name">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="description">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span class="">好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    ￥
                    <span class="now">{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- </scroll> -->
    </div>
  </div>
</template>
<script>
import cartcontrol from '@/components/cartcontrol'
// import scroll from '@/components/scroll.vue'
import BScroll from 'better-scroll'
const ERR_OK = 0;
export default {
  components:{cartcontrol,BScroll},
  data() {
    return {       
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      goods:[],
      foodListHeights:[],
      currentY:0 ,  //右边当前位置
      issticky:false,

      cache: 0 ,// 吸顶首次存放位置高度
      toucharr:[]
    };
  },
  created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.http.get('/api/goods').then(response=>{        
        if (response.data.errno === ERR_OK) {
          this.goods = response.data.data;
        }
        this.$nextTick(() => {
          this.initScroll();
          this.calcHeight();
        })
      }, response => {
        console.log('error,no data');
      });
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
    this.cache = this.$refs.zzz.offsetTop
  },
  computed:{
    currentIndex(){
      for(let i=0; i<this.foodListHeights.length-1;i++){
        if(Math.abs(this.currentY)>= this.foodListHeights[i] && Math.abs(this.currentY)<this.foodListHeights[i+1]){
          return i
        }
      }

    }
  },
  methods: {
    initScroll(){
      var that = this
      this.menuScroll = new BScroll(this.$refs.menu,{click: true})
      this.foodsScroll = new BScroll(this.$refs.foods,{click: true,probeType:3})  //可选值：1、2、3 ;其默认值为 0，即不派发 scroll 事件。
      this.foodsScroll.on('scroll',function(){
        that.currentY = this.y   //这里的this指向 foodsScroll对象
      })
    },
    //计算每一个foodlist元素的高度，累加并输出为一个数组
    calcHeight() {
      var foodList = this.$refs.foods.getElementsByClassName('food-list-hook')   
      var height = 0   
      this.foodListHeights.push(height)
      for(let i of foodList){
        // console.log(i.clientHeight+'***'+i.offsetHeight) //offsetHeight包括边框
        height += i.clientHeight
        this.foodListHeights.push(height)
      }      

    },
    scrollTo(index){
      var target = this.foodListHeights[index]
      this.foodsScroll.scrollTo(0,-target,300)  //scrollTo(x, y, time, easing)
    },
    handleScroll(){      
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.$refs.zzz.offsetTop +'**'+ this.$refs.zzz.offsetHeight + '**' +window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) 
      if(scrollTop > this.$refs.zzz.offsetTop - this.$refs.zzz.offsetHeight *2){ //不懂       
        this.issticky = true
      }if(scrollTop <= this.cache - this.$refs.zzz.offsetHeight){
        this.issticky = false
      }
    },
    touchstart(e){
      this.toucharr = []
      this.oneX = e.changedTouches[0].clientY;
    },
    touchend(e){
      this.twoX = e.changedTouches[0].clientY;
      // 判断下滑商品自动吸顶
      if(this.oneX>this.twoX){
        this.$nextTick(()=>{
          window.scrollTo({top:160,behavior: "smooth"})
        })       
      }
    },
    touchmove(e){
      this.sanX = e.changedTouches[0].clientY; 
      this.toucharr.push(this.sanX-this.oneX)
      //滑动里面包含上下犹豫的不取消吸顶，直接向下的取消吸顶
      if(this.toucharr[0]<0){
        return;
      }else if(this.sanX-this.oneX>80 && this.toucharr[0]>0 && this.currentY==0){
        window.scrollTo({top:0,behavior: "smooth"})
      }
    }
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
<style lang="stylus">
@import "../../common/stylus/mixin.styl"
  .sticky
    width 100%
    height 40px
    line-height 40px
    border-bottom 1px solid #eee 
    background #fff
    color #333
    text-align center
    z-index 10
    position absolute
    top 160px
  .sticky2 
    width 100%
    height 40px
    line-height 40px
    border-bottom 1px solid #eee 
    background #fff
    color #333
    text-align center
    z-index 11
    position fixed
    top 0
    left 0
  .van-swipe
    width 100%
    height 160px
    img 
      width 100%
      height 100%
  .goods
    display: flex
    position: absolute
    top: 201px
    height:100vh 
    width: 100%
    overflow: hidden
    .menu-wrapper
      touch-action: none
      position: relative
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        padding: 0 12px
        font-size: 0
        color: rgb(20,20,20)
        &:last-child > .text
          border-none()
        &.active
          position: relative
          margin-top: -1px
          background: #fff
          z-index: 10
          .text
            border-none()
            font-weight: 700
        .text
          display: table-cell
          vertical-align: middle
          line-height: 14px
          width: 56px
          font-size: 12px
          border-1px(rgba(7,17,27,0.2))
          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin-top: 1px
            margin-right: 2px
            vertical-align: top
            background-size: 12px 12px
            background-repeat: no-repeat
            &.discount
              bg-image("discount_3")
            &.decrease
              bg-image("decrease_3")
            &.guarantee
              bg-image("guarantee_3")
            &.invoice
              bg-image("invoice_3")
            &.special
              bg-image("special_3")
        .title
          font-size: 10px
    .foods-wrapper
      touch-action: none
      position: relative
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        border-left: 2px solid #d0dde1
        line-height: 26px
        font-size: 12px
        color: rgb(147,153,159)
        background: #f3f5f7
      .food-item
        display: flex
        padding-bottom: 16px
        margin: 18px
        border-1px(rgba(7,17,27,0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7,17,27)
          .description, .extra
            line-height: 12px
            font-size: 10px
            color: rgb(147,153,159)
          .description
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            line-height: 24px
            font-size: 10px
            font-weight: 700
            color: rgb(240,20,20)
            .now
              margin-right: 8px
              font-size: 14px
            .old
              text-decoration: line-through
              color: rgb(147,153,159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
