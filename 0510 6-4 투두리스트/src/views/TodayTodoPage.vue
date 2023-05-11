<template>
  <div class="todaytodopage m-3">
    <h3> 오늘 할 일 </h3>
      <button class="plus me-2" @click="createTodo">+</button>
      <input type="text" v-model.trim="todoTitle" @keyup.enter="createTodo" placeholder="할일 작성해줘요">
    <hr>
    <h5 v-for="(todo,index) in todayTodo" :key="index" class="m-3">
      <input type="checkbox" data-toggle="toggle">
      {{ todo.content }}
      <button v-if="todo.isImportant">★</button>
      <button v-else>☆</button>
    </h5>


  </div>
</template>

<script>


export default {
  name: 'TodayTodoPage',
  data() {
    return {
      todoTitle: null,
    }
  },
  computed: {
    todayTodo() {
      const nowDateObj = new Date()
      const today = nowDateObj.toJSON().slice(0, 10) + 'T00:00'
      return this.$store.state.todo.list.filter(todo=>todo.dueDateTime === today && todo.isCompleted===false)
      // return this.$store.state.todo.list
    }
  },
  methods: {
    createTodo() {
      if (this.todoTitle) {
        this.$store.dispatch('createTodo', this.todoTitle)
      } else {
        alert('todo 입력하세요!')
      }
      this.todoTitle=null
    }
  }
}
</script>
