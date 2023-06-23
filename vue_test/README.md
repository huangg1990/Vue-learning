# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




## vue.config.js 配置文件
>  使用 vue inspect > output.js 可以查看到Vue脚手架的默认配置
>  使用 vue.config.js 可以对脚手架进行个性化定制,详见 https://cli.vuejs.org/zh/config/ 

## ref 标签
    1,被用来给元素或子组件注册引用信息(id的替代者)
    2,应用在html标签上获取的是真实DOM元素,应用在组件标签上是组件实例对象(vc)
    3,使用方式
        打标识: <h1 ref="xxx"> </h1>  或 <Schoole ref="xxx"></Schoole>
        获取 this.$refs.xxx

## 配置项 props 让组件接收外部传过来的数据
    1,传递数据 <Demo name="xxx" />
    2,接收数据 
        第一种方式  props:['name']
        第二种方式  props:{name:String}
        第三种方式 props:{
                name:{
                    type:String, //数据类型
                    required:true, // 必传
                    default:'小黄' // 默认值
                }

        }
    备注:props是只读的,Vue底支会监测你对props的修改,如果进行了修改,就会发出警告 
        可以在内部data格外添加属性(复制props的内容到data中一份,然后去修改data中的数据) 解决
        传参数是避免关键词 key,ref 等等

## mixin(混入) 可以把多个组件的配制提取碾一个混入对象
    使用方式
        1 定义混合, eg.
            export const hunhe ={
                data(){
                    return {
                        x:1,y:2
                    }
                },
                methods:{
                    xxx
                }
            }
        2 使用混入, eg.
            import {xxx} from './xxx.js'
            全局混入 Vue.mixin(xx)
            局部混入 mixins[xx,xx]

## 插件 plugins (用于增强Vue)
    本质:包含install 方法的一个对象,install 的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据.
    定义插件
        对象 .install = function(Vue,options){
            // 添加全局过滤器
            Vue.filter(....)

            // 添加全局指令
            Vue.directive(.....)

            // 配制全局混入(合)
            Vue.mixin(..)

            // 添加实例方法、属性
            Vue.prototype.$myMethod= function(){....}
            Vue.prototype.$myProperty =xxx
        }
    使用插件
        import xxx from xxx.js
        Vue.use(xxx)

## scoped样式 (防止样式冲突)
    让样式在局部生效,防止冲突 (原理 格式生成了 一个随机标签)
    写法 
    <style scoped>
    设置 样式 less 语法,不写 默认是 css
    <style lang="less" scoped>  
    安装 npm i less-loader@7  安装指定版本
    查看 版本 npm view less-loader versions
