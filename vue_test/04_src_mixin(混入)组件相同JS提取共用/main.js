
// 引入Vue 
import Vue from 'vue'

// 引用 App
import App from './App'
import { hunhe,hunhe2 } from './mixin'

// 设置生产提示
Vue.config.productionTip = false

// 全局混合 hunhe 每个组件都会有 这个
Vue.mixin(hunhe)
// 全局混合 hunhe2
Vue.mixin(hunhe2)

new Vue({
    el:'#app',
    render: h => h(App)
})
