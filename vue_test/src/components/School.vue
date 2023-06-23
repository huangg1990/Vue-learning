<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称:{{name}}</h2>
        <h2>学校名称:{{address}}</h2>
        <button @click="showName">点我提示</button>
    </div>
</template>

<script>
    export default {
        name:'MySchool',
        data(){
            return{
                name:' 小 黄 职业技术学院 ',
                address:'北京市 朝阳区'
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
        background-color:cadetblue ;
    }
</style>