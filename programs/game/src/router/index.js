import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    { 
        path: '/',
        component:() =>import("@/components/Login.vue")
    },{
        path:'/index',
        component: () => import("@/components/index.vue"),
    },{
        path:'/list',
        component: () => import("@/components/list.vue"),
    },{
        path:'/detail',
        component: () => import("@/components/detail.vue"),
    },{
        path:'/del',
        component: () => import("@/components/del.vue"),
    }
]
const router = new Router({
    routes
})

export default router
