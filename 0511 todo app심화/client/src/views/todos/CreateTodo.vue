<template>
  <div>
    <input 
      type="text" 
      v-model.trim="title" 
      @keyup.enter="createTodo"
    >
    <button @click="createTodo">+</button>
  </div>
</template>

<script>
// import axios from'axios'
import axios from 'axios'


export default {
  name: 'CreateTodo',
  data: function () {
    return {
      title: null,
    }
  },
  methods: {
    createTodo: function () {
      const title = this.title;

      if (!title) {
        alert('할 일을 입력해주세요!')
      }
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/todos/',
        data : {title},
      })
      .then(() => {
        this.$router.push({name: 'TodoList'})
        // console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
