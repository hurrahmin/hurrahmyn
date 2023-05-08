import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
    ]
  },
  getters: {
    allTodosCount(state) {
      return state.todos.length
    },
    completedCount(state) {
      console.log(state.todos);
    }
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem) {
      // console.log(todoItem) 삭제 버튼 누른 todo 찾아서 state.todos에서 삭제
      const index = state.todos.indexOf(todoItem) //todoitem 찾아라 indexof로 인덱스 찾고
      state.todos.splice(index, 1) //인덱스에서 삭제~~
    },
    UPDATE_TODO(state, todoItem) {
      // 함수 -> state.todos 배열에서 클릭한 todo item 찾고, todo.iscomplted를 반대로 뒤집는다. true->false로 토글
      state.todos = state.todos.map((todo) => {
        if (todo === todoItem) { //내가 클릭한 todoitem을 state.todos 배열에서 찾아서
          todo.isCompleted= !todo.isCompleted //todoitem의 iscompleted 뒤집기
        }
        return todo
      })
    },
    LOAD_TODOS(state) {
      const localStorageTodos = localStorage.getItem('todos')
      const parsedTodos = JSON.parse(localStorageTodos)
      state.todos=parsedTodos
    }
  },
  actions: {
    createTodo(context, todoTitle) {
      // console.log(context)
      const todoItem = {
        title: todoTitle,
        isCompleted: false
      }
      context.commit('CREATE_TODO', todoItem)
      context.dispatch('saveTodosToLocalStorage')
    },
    deleteTodo(context, todoItem) {
      context.commit('DELETE_TODO', todoItem)
      context.dispatch('saveTodosToLocalStorage')
    },
    updateTodo(context, todoItem) {
      context.commit('UPDATE_TODO',todoItem)
      context.dispatch('saveTodosToLocalStorage')
    },
    saveTodosToLocalStorage(context) {
      const jsonTodos = JSON.stringify(context.state.todos)
      localStorage.setItem('todos',jsonTodos)
    },
    loadTodos(context) {
      context.commit('LOAD_TODOS')
    }
  },
  modules: {
  }
})
