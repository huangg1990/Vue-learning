<template>
    <div class="demo"> 
        <h2>学生姓名:{{name}}</h2>
        <h2 class="title">学生性别:{{sex}}</h2> 
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

<!-- <style scoped> 
    .demo{
        background-color:aqua ;
    }
</style> -->

<style lang="less" scoped>
     .demo{
        background-color:aqua ;

        .title {
            color: blueviolet;
            font-size: large;
        }
    }
</style>