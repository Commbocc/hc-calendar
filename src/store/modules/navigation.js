import moment from 'moment'

export default {
  actions: {
    prevMonth ({rootState, commit, dispatch}) {
      var d = moment(rootState.events.activeDate)
      commit('setActiveDate', d.startOf('month').month(d.month() - 1))
      commit('setActiveList', null)
      dispatch('fetchEvents')
    },
    nextMonth ({rootState, commit, dispatch}) {
      var d = moment(rootState.events.activeDate)
      commit('setActiveDate', d.startOf('month').month(d.month() + 1))
      commit('setActiveList', null)
      dispatch('fetchEvents')
    }
  }
}
