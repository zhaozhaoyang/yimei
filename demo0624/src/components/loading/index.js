import loading from './loading.vue'

// const install = function(){
//     Vue.component("loading",loading)
// }
const Qloading ={
    install:function(Vue){
        Vue.component("Qloading",loading)
    }
}
export default Qloading;