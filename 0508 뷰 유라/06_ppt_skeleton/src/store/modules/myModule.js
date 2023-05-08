const myModule = {
  state: {
    level: 20
  },
  mutations: {
    INCREMENT_level(state){
      state.level +=1;
    }
  },
  actions: {
    incrementLevel(context) {
      context.commit('INCREMENT_level');
    }
  },
}

export default myModule