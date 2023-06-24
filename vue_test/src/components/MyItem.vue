<template>
   <li>
        <label>
          <!-- @click="handlerCheck(todo.id)" -->
          <input type="checkbox" :checked="todo.completed"  @change="handlerCheck(todo.id)"/>
         
          <!-- 不建议这么写~~ 不能修改props 中的数据 ,违反原则 只不过 vm没有监测到 -->
          <!-- <input type="checkbox" v-model="todo.completed"/> -->

          <!-- <input type="checkbox" v-model="todo.completed"/> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handlerDelete(todo.id)" >删除</button>
    </li>
</template>

<script>
export default {
    name :'Item',
    props:['todo','chageCompleted','deleteItem'],


    // props 是不可以修改的 ,但 使用v-model 把 数据修改了
    // 深度监视 ()
    // props:['todo'],
    methods:{
      handlerCheck(id){
          //通知  todos 修改数据
          this.chageCompleted(id)
      },

      //删除
      handlerDelete(id){
        if(confirm('确认[删除吗]?')){
          this.deleteItem(id)
        }
      }
    }

}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}
li:hover button{
  display:block;
}
</style>