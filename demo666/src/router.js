import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Adress from './views/adress.vue'
import luckwheel from './views/luckwheel.vue'
import slot from './views/slot.vue'
import xuanzhuan from './views/xuanzhuan.vue'
import list from './views/list.vue'  //这个为vant
import listscroll from './views/listscroll.vue'
import shopcar from './views/shopcar.vue'
import shop from './views/shop/shop.vue'


Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: () => import('./components/canvas.vue')
    },
    {
      path: '/mycanvas',
      name: 'mycanvas',
      component: () => import('./components/mycanvas.vue')
    },
    {
      path: '/adress',
      name: 'adress',
      component: Adress
    },
    {
      path: '/luckwheel',
      name: 'luckwheel',
      component: luckwheel
    },
    {
      path: '/slot',
      name: 'slot',
      component: slot
    },
    {
      path: '/xuanzhuan',
      name: 'xuanzhuan',
      component: xuanzhuan
    },
    {
      path: '/list', //这个为vant
      name: 'list',
      component: list
    },
    {
      path: '/listnew',
      name: 'listnew',
      component: () => import('./views/listnew.vue')
    },
    {
      path: '/listscroll', //better-scroll
      name: 'listscroll',
      component: listscroll
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },{
      path: '/vant',
      name: 'vant',
      component: () => import('./views/vant.vue')
    },{
      path: '/swiper',
      name: 'swiper',
      component: () => import('./views/swiper.vue')
    },{
      path: '/pay',
      name: 'pay',
      component: () => import('./views/pay.vue')
    }

    
  ]
})
