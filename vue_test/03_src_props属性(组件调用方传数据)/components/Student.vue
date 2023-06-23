<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>学生年龄:{{myAge}}</h2>
        <h2>虚岁:{{age+1}}</h2>
        <button @click="updateAge">尝试修改传进来的参数</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        //console.log(this)
        return{
            msg:'我是一个打工仔~',
            myAge:this.age
        }
    },
    // 使用props 外传参数  简单声明接收
    props:['name','age','sex'],
    methods: {
        updateAge(){
            this.myAge ++
        }
    },


    // 接收时 强制数据类型 (数据类型限制)
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String,
    // }


    // 最全写法
    // props:{
    //     name:{
    //         type:String, //类型
    //         required:true // 必须
    //     },
    //     age:{
    //         type:Number, //类型
    //         default:-1 // 默认值
    //     },
    //     sex:{
    //         type:String, //类型
    //         required:true, // 必须
    //     }
    // }
}
</script>