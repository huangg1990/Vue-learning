<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学生名称:{{name}}</h2>
        <h2>学生年龄:{{age}}</h2>
    </div>
</template>

<script>
     
    export default {
        name:'Student',
        data(){
            return{
                name:' 小 黄 ',
                age:19
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        }
    }

</script>