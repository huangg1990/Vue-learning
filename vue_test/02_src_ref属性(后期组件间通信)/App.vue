<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的Dom</button>
    <Schoole id="sch" ref="sch"></Schoole>
    <Student></Student>
    
  </div>  
</template>

<script>

import Schoole from './components/Schoole.vue'
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{
        Schoole,
        Student
    },
    data(){
      return {
        msg:'欢迎你!~'
      }
    },
    methods:{
      showDOM(){
        // console.log('@@')
        console.log(this.$refs.title) // 真实DOM元素
        console.log(this.$refs.btn)
        console.log(this.$refs.sch) // 拿到的是 Schoole的 VueComponent的实例对象

        // 这个 拿到的是HTML
        console.log(document.getElementById('sch'))
      }
    }
  
}
</script>