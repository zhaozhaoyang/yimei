import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import Rank from '@/components/rank'
import My from '@/components/my'
import news from '@/components/news'
import set from '@/components/set'
import aboutUs from '@/components/aboutUs'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '*',
			redirect: '/index'
		},
		{
			path: '/index',
			name: 'index',
			component: Index
		},
		{
			path: '/login',
			name:'login',
			component: Login
		},
		{
			path: '/rank',
			name:'rank',
			component: Rank
		},
		{
			path: '/my',
			name:'my',
			component: My
		},
		{
			path: '/set',
			name:'set',
			component: set
		},
		{
			path: '/aboutUs',
			name:'aboutUs',
			component: aboutUs
		}	,
		{
			path: '/news',
			name:'news',
			component: news
		},
		{
			path: '/taskdetail',
			name:'taskdetail',
			component: () => import("@/components/taskdetail")
		},
		{
			path: '/newsdetail',
			name:'newsdetail',
			component: () => import("@/components/newsdetail")
		},
		{
			path: '/subtask',
			name:'subtask',
			component: () => import("@/components/subtask")
		},
		{
			path: '/success',
			name:'success',
			component: () => import("@/components/success")
		},
		{
			path: '/myshlist',
			name:'myshlist',
			component: () => import("@/components/myshlist")
		},
		{
			path: '/mytaskdetail',
			name:'mytaskdetail',
			component: () => import("@/components/mytaskdetail")
		},
		{
			path: '/tixian',
			name:'tixian',
			component: () => import("@/components/tixian")
		},
		{
			path: '/tixian2',
			name:'tixian2',
			component: () => import("@/components/tixian2")
		},
		{
			path: '/yajin',
			name:'yajin',
			component: () => import("@/components/yajin")
		},
		{
			path: '/runlist',
			name:'runlist',
			component: () => import("@/components/runlist")
		},
		{
			path: '/myfriend',
			name:'myfriend',
			component: () => import("@/components/myfriend")
		},
		{
			path: '/myinvate',
			name:'myinvate',
			component: () => import("@/components/myinvate")
		},
		{
			path: '/myquestion',
			name:'myquestion',
			component: () => import("@/components/myquestion")
		},
		{
			path: '/mytuiguang',
			name:'mytuiguang',
			component: () => import("@/components/mytuiguang")
		},
		{
			path: '/resetpsd',
			name:'resetpsd',
			component: () => import("@/components/resetpsd")
		}
		
		
	]
})
