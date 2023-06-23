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
</script>