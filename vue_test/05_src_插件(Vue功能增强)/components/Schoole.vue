<template>
    <div> 
        <!-- 因为  plugins 中 添加了自定义 过滤器 所以能直接使用了 -->
        <h2>学校名称:{{name | mySlice}}</h2>
        <h2>学校地址:{{address}}</h2> 
        <button @click="hello">点我测试plugins中的hello</button>
    </div>
</template>

<script> 
export default {
    name:'Schoole',
    data(){
        return{
            name:'小黄职业技术学院',
            address:'北京-朝阳区'
        }
    } 
}
</script>