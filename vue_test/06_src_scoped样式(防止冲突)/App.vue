<template>
  <div>  
    <h1 class="title">你好啊!!</h1>
    <Schoole></Schoole>
    <hr/>
    <Student></Student> 
  </div>  
</template>

<script>
import Schoole from './components/Schoole.vue'
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{
        Student,
        Schoole
    }
}
</script>


<style>
  /* App中的样式一般都是全局使用的 所以不加 scoped */ 
  .title{
    color: rebeccapurple;
  }
</style>