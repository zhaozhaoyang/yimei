import Vue  from 'vue'
import Vuex from 'vuex'
import VuePersist from 'vuex-persist'
Vue.use(Vuex)
const vuexSession = new VuePersist({
    storage:window.sessionStorage
})
const state = {
    navInde:0,
    swiperIndex:0
}
const getters = {}
const mutations = {
    saveNavIndex:function (state , roslov) {
        state.navInde = roslov
    },
    saveSwiperIndex:function (state , res) {
        state.swiperIndex = res
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    plugins:[vuexSession.plugin]
})