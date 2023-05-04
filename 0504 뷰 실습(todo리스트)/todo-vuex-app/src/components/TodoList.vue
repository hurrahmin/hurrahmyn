<template>
  <div>
    <TodoListitem v-for="(todo,index) in todos" :key="index" :todoitem="todo"/>
  </div>
</template>

<script>
import TodoListitem from '@/components/TodoListitem.vue'

export default {
  name: 'TodoList',
  components: { TodoListitem },
  computed : {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>

</style>