const obj={
    install(Vue,x,y,z){
        // console.log('@@install',Vue)
        console.log(x,y,z)

        // 全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        // 全局自定义 指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时)(——上来)
            bind(elemelt,binding){
                elemelt.value=binding.value
            },
            // 指令所在元素被插入页面时
            inserted(elemelt,binding){
                elemelt.focus()
            },

            // 指令所在的模版被重新解析时
            update(elemelt,binding){
                elemelt.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            },
        })

        // 给Vue 原型上 添加一个方法
        Vue.prototype.hello = () => {alert('你好啊!!')}
    }
}

// 暴露  插件 
export default obj

