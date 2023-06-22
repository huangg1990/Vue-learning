<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称:{{name}}</h2>
        <h2>学校名称:{{address}}</h2>
        <button @click="showName">点我提示</button>
    </div>
</template>

<script>
    //组件交互相关的代码 (数据 , 方法等等)
    // export const school 暴露    
    // const school={
    //     name:'School',
    //     data(){
    //         return{
    //             name:' 小 黄 ',
    //             address:'北京'
    //         }
    //     },
    //     methods: {
    //         showName(){
    //             alert(this.name)
    //         }
    //     },
    // }

    // export {school}
    // export default school

    // export default Vue.extend({})
    export default {
        name:'School',
        data(){
            return{
                name:' 小 黄 ',
                address:'北京'
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        }
    }

</script>

<style>
    /*  组件的样式 */
    .demo {
        background-color: cadetblue;
    }
</style>