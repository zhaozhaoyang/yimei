import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import qs from 'qs'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import md5 from 'js-md5'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.$md5 = md5
Vue.config.productionTip = false
Vue.prototype.qs = qs 
Vue.prototype.$axios = axios

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
