import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mixins from './mixins'
import Vant from 'vant';
import Qloading from './components/loading'
import 'vant/lib/index.css';
import  VueJsonp  from  'vue-jsonp'

Vue.use(VueJsonp)

Vue.config.productionTip = false
Vue.prototype.http = axios
Vue.mixin(mixins)

Vue.use(Vant);
Vue.use(Qloading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
