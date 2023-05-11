import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      // console.log(todoItem)
      state.todo.list.push(todoItem)
    },
  },
  actions: {
    createTodo(context,todoTitle) {
      const nowDateObj = new Date()
      const todoItem = {
        content: todoTitle,
        isCompleted: false,
        isImportant: false,
        dueDateTime: nowDateObj.toJSON().slice(0, 10) + 'T00:00',
        id: nowDateObj.getTime(),
      }
      context.commit('CREATE_TODO', todoItem)
    },
    createImportantTodo(context,todoTitle) {
      const nowDateObj = new Date()
      const todoItem = {
        content: todoTitle,
        isCompleted: false,
        isImportant: true,
        dueDateTime: nowDateObj.toJSON().slice(0, 10) + 'T00:00',
        id: nowDateObj.getTime(),
      }
      context.commit('CREATE_TODO', todoItem)
    }
  },
  modules: {
    todo
  }
})
