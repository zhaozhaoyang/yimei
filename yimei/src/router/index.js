import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
    {
        path: '/',
        component:() => import("@/views/LoginR.vue"),
    },{
        path:'/111',
        component:() => import("@/views/111.vue"),

    },{
        path:'/Login',
        component:() => import("@/views/Login.vue"),

    },{
        path:'/regist',
        component:() => import("@/views/regist.vue"),
    },{
        path:'/index',
        component: () => import("@/views/Index.vue"),
    },{
        path: '/market',
        component: () => import("@/views/Index/market.vue")
    },{
        path: '/ok',
        component: () => import("@/views/Index/ok.vue")
    },{
        path: '/diary',
        component: () => import("@/views/Index/diary.vue")
    },{
        path: '/complete',
        component: () => import("@/views/Index/complete.vue")
    },{
        path: '/deal',
        component: () => import("@/views/Index/deal.vue")
    },{
        path: '/settled',
        component: () => import("@/views/Index/settled.vue")
    },{
        path: '/doctor',
        component: () => import("@/views/Index/doctor.vue")
    },{
        path: '/share',
        component: () => import("@/views/Index/share.vue")
    },{
        path: '/sharespend',
        component: () => import("@/views/share/sharespend.vue")
    },{
        path: '/sharedetails',
        component: () => import("@/views/share/sharedetails.vue")
    },{
        path: '/sharehuman',
        component: () => import("@/views/share/sharehuman.vue"),
        chlidren: [
            {
                path: 'first',
                component: () => import("@/views/share/sharehuman/first.vue"),
            }, {
                path: 'two',
                component: () => import("@/views/share/sharehuman/two.vue"),
            }, {
                path: 'three',
                component: () => import("@/views/share/sharehuman/three.vue"),
            }
        ]
    },{
        path:'/true',
        component:() => import("@/views/true.vue")
    },{
        path:'/advance',
        component:() => import("@/views/advance.vue")
    },{
        path:'/my',
        component:() => import("@/views/my.vue")
    },{
        path:'/userfuwu',
        component:() => import("@/views/Index/userfuWu.vue")
    },{
        path:'/menu',
        component:() => import("@/components/advance/menu.vue")
    },{
        path:'/eyeall',
        component:() => import("@/components/advance/eyeall.vue")
    },{
        path:'/detail',
        name:'detail',
        component:() => import("@/views/detail.vue")
    },{
        path:'/look',
        component:() => import("@/views/look.vue")
    },{
        path:'/lookc',
        component:() => import("@/views/lookC.vue")
    },{
        path:'/sure',
        component:() => import("@/views/sure.vue")
    },{
        path:'/sureC',
        component:() => import("@/views/sureC.vue")
    },{
        path:'/help',
        component:() => import("@/views/help.vue")
    },{
        path:'/mykeep',
        component:() => import("@/views/mykeep.vue")
    },{
        path:'/set',
        component:() => import("@/views/set.vue")
    },{
        path:'/sureorder',
        name:'sureorder',
        component:() => import("@/views/sureorder.vue")
    },{
        path:'/setpasd',
        component:() => import("@/views/setpasd.vue")
    },{
        path:'/successpay',
        component:() =>import("@/views/successpay.vue")
    },{
        path:'/revise',
        component:() =>import("@/views/revise.vue")
    },{
        path:'/bind',
        component:() =>import("@/views/bind.vue")
    },{
        path:'/addr',
        component:() =>import("@/views/addr.vue")
    },{
        path:'/respasd',
        component:() =>import("@/views/revisepassword.vue")
    },{
        path:'/reslp',
        component:() =>import("@/views/resivesloginpasd.vue")
    },{
        path:'/respp',
        component:() =>import("@/views/revisepaypassword.vue")
    },{
        path:'/reslp1',
        component:() =>import("@/views/resivesloginpasd1.vue")
    },{
        path:'/notice',
        component:() =>import("@/views/notice.vue")
    },{
        path:'/mydiary',
        component:() =>import("@/views/mydiary.vue")
    },{
        path:'/resot',
        component:() =>import("@/views/resiveoperatedtimer.vue")
    },{
        path:'/newdiary',
        component:() =>import("@/views/newdiary.vue")
    },{
        path:'/becpres',
        component:() =>import("@/views/beautyexperience.vue")
    },{
        path:'/odetail',
        component:() =>import("@/views/orderdetail.vue")
    },{
        path:'/refund',
        component:() =>import("@/views/refund.vue")
    },{
        path:'/appeal',
        component:() =>import("@/views/appeal.vue")
    },{
        path:'/appinfo',
        component:() =>import("@/views/appealmessage.vue")
    },{
        path:'/finish',
        component:() =>import("@/views/orderfinish.vue")
    },{
        path:'/purse',
        component:() =>import("@/views/purse.vue")
    },{
        path:'/cash',
        component:() =>import("@/views/cash.vue")
    },{
        path:'/succash',
        component:() =>import("@/views/cashsuccess.vue")
    },{
        path:'/mondet',
        component:() =>import("@/views/paydetail/moneydetail.vue")
    },{
        path:'/advancepay',
        component:() =>import("@/views/paydetail/advancepay.vue")
    },{
        path:'/return',
        component:() =>import("@/views/paydetail/return.vue")
    },{
        path:'/now',
        component:() =>import("@/views/paydetail/now.vue")
    },{
        path:'/spend',
        component:() =>import("@/views/paydetail/spend.vue")
    },{
        path:'/reward',
        component:() =>import("@/views/paydetail/reward.vue")
    },{
        path:'/breward',
        component:() =>import("@/views/paydetail/breward.vue")
    },{
        path:'/advice',
        component:() =>import("@/views/advice.vue")
    },{
        path:'/detailed',
        component:() =>import("@/views/share/detailed.vue")
    },{
        path:'/recommend',
        component:() =>import("@/views/recommend.vue")
    },{
        path:'/collect',
        component:() =>import("@/views/collect.vue")
    },{
        path:'/system',
        component:() =>import("@/views/system.vue")
    },{
        path:'/kefu',
        component:() =>import("@/views/kefu.vue")
    },{
        path:'/touch',
        component:() =>import("@/views/touch.vue")
    },{
        path:'/guide',
        component:() =>import("@/views/guide.vue")
    },{
        path:'/business',
        component:() =>import("@/views/business.vue")
    },{
        path:'/check',
        component:() =>import("@/views/check.vue")
    },{
        path:'/dcheck',
        component:() =>import("@/views/diarycheck.vue")
    },{
        path:'/header',
        component:() =>import("@/components/myorder/header.vue")
    },{
        path:'/pay',
        component:() =>import("@/components/myorder/pay.vue")
    },{
        path:'/remove',
        component:() =>import("@/components/myorder/remove.vue")
    },{
        path:'/nouse',
        component:() =>import("@/components/myorder/nouse.vue")
    },{
        path:'/returns',
        component:() =>import("@/components/myorder/returns.vue")
    },{
        path:'/jump',
        component:() =>import("@/components/myorder/jump.vue")
    },{
        path:'/wait',
        component:() =>import("@/components/myorder/wait.vue")
    },{
        path:'/finishs',
        component:() =>import("@/components/myorder/finish.vue")
    },{
        path:'/myorder',
        component:() =>import("@/views/myorder.vue"),
    },{
        path:'/alltalk',
        component:() =>import("@/views/alltalk.vue")
    },{
        path:'/money',
        component:() =>import("@/views/money.vue")
    },{
        path:'/goodfride',
        component:() =>import("@/views/goodfride.vue")
    },{
        path:'/daiaryR',
        component:() =>import("@/views/daiaryR.vue")
    },{
        path:'/connect',
        component:() =>import("@/views/connection.vue")
    },{
        path:'/updata',
        component:() =>import("@/views/updata.vue")
    },{
        path:'/finish',
        name:'finish',
        component:() =>import("@/components/myorder/finish.vue")
    },{
        path:'/jump',
        name:'jump',
        component:() =>import("@/components/myorder/jump.vue")
    },{
        path:'/nouse',
        name:'nouse',
        component:() =>import("@/components/myorder/nouse.vue")
    },{
        path:'/pay',
        name:'pay',
        component:() =>import("@/components/myorder/pay.vue")
    },{
        path:'/remove',
        name:'remove',
        component:() =>import("@/components/myorder/remove.vue")
    },{
        path:'/returns',
        name:'returns',
        component:() =>import("@/components/myorder/returns.vue")
    },{
        path:'/wait',
        name:'wait',
        component:() =>import("@/components/myorder/wait.vue")
    },{
        path:'/alls',
        name:'alls',
        component:() =>import("@/components/myorder/alls.vue")
    },
    // },{
    //     path:'/address',
    //     name:'address',
    //     component:() =>import("@/components/addr/address.vue")
    // }
]

const router = new Router({
    routes
})
export default router