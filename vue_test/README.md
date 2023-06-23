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




# vue.config.js 配置文件
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