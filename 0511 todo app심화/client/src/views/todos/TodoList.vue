<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span 
          @click="updateTodoStatus(todo)" 
          :class="{ 'is-completed': todo.is_completed }"
        >
        {{ todo.title }}
        </span>
        <button @click="deleteTodo(todo)" class="todo-btn">X</button>
      </li>
    </ul>
    <button @click="getTodos">Get Todos</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodoList',
  data: function () {
    return {
      todos: null,
    }
  },
  created() {
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/todos/',
      })
        .then(res => {
          this.todos = res.data
        })
        .catch(err => {
          console.log(err)
        })
  },
  methods: {
    getTodos: function () {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/todos/',
      })
        .then(res => {
          this.todos = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTodo: function (todo) {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/todos/${todo.id}/`,
      })
      .then((res)=> {
        this.todos = res.data
      })
      .catch((err)=> {
        console.log(err)
      })
    },
    updateTodoStatus: function (todo) {
      const is_completed = !todo.is_completed
      const title = todo.title

      axios({
        method:'put',
        url: `http://127.0.0.1:8000/todos/${todo.id}/`,
        data: {
          title, is_completed
        }
      })
      .then(()=>{
        this.getTodos()
        // console.log(res.data)
      })
      .catch((err)=> {
        console.log(err)
      })
      // todo.is_completed=true
      // console.log(todo.is_completed)
    },
  },
}
</script>

<style scoped>
  .todo-btn {
    margin-left: 10px;
  }

  .is-completed {
    text-decoration: line-through;
    color: rgb(112, 112, 112);
  }
</style>
