export default {
  getters: {
    isActiveWeek: (state, getters, rootState) => (weekOfYear) => {
      return (rootState.activeDate ? (rootState.activeDate.week() === weekOfYear) : false)
    }
  }
}
