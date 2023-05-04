import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: '할일1',
        iscompleted: false
      },
      {
        title: '할일2',
        iscompleted: false
      },
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    }
  },
  actions: {
    createTodo(context, todoTitle) {
      const todoItem ={
        title: todoTitle,
        iscompleted: false,
      }
      console.log(todoItem)
      context.commit('CREATE_TODO',todoItem) 
      
    }
  },
  modules: {
  }
})
