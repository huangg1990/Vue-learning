<template>
  <div> 
    <hr/>
    <Student name="李四" sex="男" :age="19"></Student>

    <hr/>
    <Student  sex="女" ></Student>

    <hr/>
    <Student name="王一一" sex="男" age="12"></Student>
    
  </div>  
</template>

<script>

import Student from './components/Student.vue'

export default {
    name:'App',
    components:{
        Student
    }
}

/**
 * 
## 配置项 props 让组件接收外部传过来的数据
    1,传递数据 <Demo name="xxx" />
    2,接收数据 
        第一种方式  props:['name']
        第二种方式  props:{name:String}
        第三种方式 props:{
                name:{
                    type:String, //数据类型
                    required:true, // 必传
                    default:'小黄' // 默认值
                }

        }
    备注:props是只读的,Vue底支会监测你对props的修改,如果进行了修改,就会发出警告 
        可以在内部data格外添加属性(复制props的内容到data中一份,然后去修改data中的数据) 解决
        传参数是避免关键词 key,ref 等等
 */
</script>