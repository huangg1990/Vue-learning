<template>
    <div> 
        <h2 @click="showName">学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2> 
    </div>
</template>

<script>
import {hunhe} from '../mixin.js'

export default {
    name:'Student',
    data(){
        return{
            name:'李四',
            sex:'男',
            // 如果mixin中有 & Data中也有 使用 组件中的数据 如x 
            x:666
        }
    },
    // 生命周期 2个都生效
    mounted() {
        console.log('@@ 你好啊! Schoole')
    },
    mixins:[hunhe]
}
</script>