<template>
    <div class="schoole">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点我</button>
    </div>
</template>

<script>

/**
 * 
    1,被用来给元素或子组件注册引用信息(id的替代者)
    2,应用在html标签上获取的是真实DOM元素,应用在组件标签上是组件实例对象(vc)
    3,使用方式
        打标识: <h1 ref="xxx"> </h1>  或 <Schoole ref="xxx"></Schoole>
        获取 this.$refs.xxx
 */

export default {
    name:'Schoole',
    data(){
        return {
            name:'小黄职业技术学院',
            address:'北京-朝阳区'
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    }
}
</script>

<style>
    .schoole{
        border: 1px 1 px ;
        border-color: black;
    }
</style>