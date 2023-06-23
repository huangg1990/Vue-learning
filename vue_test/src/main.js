import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/**
 * 
 *  关于不同版本的Vue:
 *    1 vue.js 与 vue.runtime.xxx.js 的区别
 *       vue.js 是完整版的Vue, 包含:核心功能 + 模版解析器.
 *       vue.runtime.xxx.js 是运行版本的Vue,只包含:核心功能,没有模版解析器
 *   
 *    2 因为Vue.runtime.xx.js 没有模版解析器,所以不能使用 template配置模版,需要使用render函数接收到的createElement函数去指定具体模内容.
 * 
 *   而组件中的 template 有"devDependencies":{ 
       "vue-template-compiler": "^2.6.14"
      }, 解析
 */

new Vue({
  el:'#app',
  // render: h => h(App),

  // 原始写法
  // render(createElement){
  //   return createElement('h1','hello')
  // }

  // 进阶 
  // render: createElement=> createElement('h1','hello')

  // render: p => p('h1','hello')

  render : p => p(App)

})
