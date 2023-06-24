<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->

            <input type="checkbox" v-model="isAll" />
        </label>
        <span>已完成{{doneTotal}} / 全部{{total}} </span>
        <button class="btn btn-danger" @click="clearAllDoneItems">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos','batchCheckTodo','delAllDoneItems'],
    computed:{
      total(){
        return this.todos.length
      },
      // 计算属性
      doneTotal(){
        // return this.todos.filter( todo => todo.completed ).length

       return this.todos.reduce((pre,current) => {
          pre += current.completed?1:0
          return pre
        },0)

      },
      // isAll(){
      //   if(this.total>0) return  this.total == this.doneTotal
      // }
      isAll:{
        get(){
          return this.doneTotal === this.total && this.total>0
        },
        set(value){
          console.log('@',value)
          this.batchCheckTodo(value)
        }
      }
    },

    methods:{
      // 全选或反选
      // checkAll(e){
      //     //console.log(e.target.checked)
      //     this.batchCheckTodo(e.target.checked)
      // },

      clearAllDoneItems(){
        if(confirm('确认清除所有已完成的TODO吗?'))
          this.delAllDoneItems()
      }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>