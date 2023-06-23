<template>
    <div> 
        <h2 @click="showName">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2> 
    </div>
</template>

<script>
import {hunhe,hunhe2} from '../mixin.js'

export default {
    name:'Schoole',
    data(){
        return{
            name:'小黄职业技术学院',
            address:'北京-朝阳区'
        }
    }, 
    // methods: {
    //     showName(){
    //        alert(this.name)
    //     }
    // },
 
    mixins:[hunhe,hunhe2]
}
</script>