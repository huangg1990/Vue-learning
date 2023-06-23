<template>
  <div>  
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