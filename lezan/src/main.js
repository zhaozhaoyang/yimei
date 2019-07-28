import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import router from './router'
import Vant from 'vant'
import FastClick from 'fastclick'
FastClick.attach(document.body)
import 'vant/lib/index.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
Vue.config.productionTip = false
import store from './store'
import 'lib-flexible/flexible'
import mixins from './mixins'
import install from './components/commons/index';
Vue.use(Vant)
Vue.use(install)
Vue.mixin(mixins)

require('es6-promise').polyfill()
Es6Promise.polyfill()

router.beforeEach((to, from, next) => {
	//必须调用到next()  要不就挂	
	if(window.localStorage.getItem('uid') != ''){
		next()
	}else{
		if(to.path == '/login'){
			next()
		}else{
			next('/login')
		}
	}
	
})


new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
