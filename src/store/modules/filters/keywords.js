export default {
  state: {
    active: []
  },
  actions: {
    addKeyword ({commit, dispatch}, keyword) {
      commit('addKeyword', keyword)
      dispatch('fetchEvents')
    },
    removeKeyword ({commit, dispatch}, keyword) {
      commit('removeKeyword', keyword)
      dispatch('fetchEvents')
    }
  },
  mutations: {
    addKeyword (state, data) {
      data.split(',').forEach(word => state.active.push(word))
    },
    removeKeyword (state, data) {
      state.active.splice(state.active.indexOf(data), 1)
    }
  },
  getters: {
    activeKeywords: state => {
      return state.active
    }
  }
}
