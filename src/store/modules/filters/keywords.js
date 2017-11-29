export default {
  state: {
    activeKeywords: []
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
      state.activeKeywords.push(data)
    },
    removeKeyword (state, data) {
      state.activeKeywords.splice(state.activeKeywords.indexOf(data), 1)
    }
  },
  getters: {
    activeKeywords: state => {
      return state.activeKeywords
    }
  }
}
