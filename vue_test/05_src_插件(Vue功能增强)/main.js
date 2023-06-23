
// 引入Vue 
import Vue from 'vue'

// 引用 App
import App from './App' 

import plugins from './plugins'

// 设置生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(plugins,1,2,3)

new Vue({
    el:'#app',
    render: h => h(App)
})
