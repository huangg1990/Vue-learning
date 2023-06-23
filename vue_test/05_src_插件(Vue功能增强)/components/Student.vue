<template>
    <div> 
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2> 
        <!-- 因为  plugins 中 添加了自定义 标签所以能使用了 -->
        <input type="text" v-fbind:value="name" />
    </div>
</template>

<script> 
export default {
    name:'Student',
    data(){
        return{
            name:'李四',
            sex:'男'
        }
    }
}
</script>