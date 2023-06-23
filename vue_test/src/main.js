
// 引入Vue 
import Vue from 'vue'

// 引用 App
import App from './App'  

// 设置生产提示
Vue.config.productionTip = false 

new Vue({
    el:'#app',
    render: h => h(App)
})
