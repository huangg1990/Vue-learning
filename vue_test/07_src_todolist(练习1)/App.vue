<template>
  <div id="root">  
    <div class="todo-container">
      <div class="todo-wrap">
          <!-- 将方法传递给子组件 让 子组件调用把需要添加的数据 传递过来 -->
          <MyHeader :addTodoItem="addTodoItem"/>

          <!-- 将 数据传递给子组件 让子组件展示 -->
          <MyList :todos="todos" 
          :chageCompleted="chageCompleted" 
          :deleteItem="deleteItem"/>

          <!-- <MyList :todos="todos"/> -->
          <MyFooter :todos="todos" 
          :batchCheckTodo="batchCheckTodo" 
          :delAllDoneItems="delAllDoneItems" />
      </div>
    </div>
  </div>  
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyList from './components/MyList.vue';

export default {
    name:'App',
    components:{
        MyHeader,
        MyList,
        MyFooter
    },
    // 放在这里的原因是 Header 需要向里面加数据 
    // MyList中需要 读取 显示数据
    // 子组件给父组件传递数据 : 原始方法 1,先让父组件给 子组件传递一个方法 .2 让子组件调用父组件传递过来的方法

    data(){
        return {
            todos:[
              {id:'001',title:'吃饭',completed:true},
              {id:'002',title:'睡觉',completed:false},
              {id:'003',title:'打豆豆',completed:false},
              {id:'004',title:'抽烟',completed:true},
              {id:'005',title:'喝酒',completed:false}
            ]
        }
    },
    methods:{
      // 添加
      addTodoItem(todoItem){
        // console.log('我是APP的receive 我收到了 todoItem',todoItem)
        this.todos.unshift(todoItem)
      },

      // 修改完成状态
      chageCompleted(id){
        this.todos.forEach((todo) =>{
          if(todo.id == id){
            todo.completed = !todo.completed
          }
        })
      },

      //删除
      deleteItem(id){
          this.todos= this.todos.filter((todo) => {
            return todo.id !== id
          })
      },

      // 全选或反选
      batchCheckTodo(ck){
        this.todos.forEach( (item) => {
          item.completed = ck
        })
      },

      // 清除所有已完成的 事项
      delAllDoneItems(){
        this.todos=this.todos.filter(item => !item.completed)
      },

    }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>