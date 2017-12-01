import moment from 'moment'
import router from '@/router'

export default {
  actions: {
    prevMonth ({rootState, dispatch}) {
      var date = moment(rootState.focusDate).startOf('month').subtract(1, 'months')
      dispatch('navigate', date)
    },
    nextMonth ({rootState, dispatch}) {
      var date = moment(rootState.focusDate).startOf('month').add(1, 'months')
      dispatch('navigate', date)
    },
    goTo ({dispatch}, date = moment()) {
      dispatch('navigate', date)
    },
    // DRY
    navigate ({commit, dispatch}, date) {
      commit('setFocusDate', date)
      commit('setActiveDate', null)
      dispatch('fetchEvents')
      router.replace(date.format('/YYYY/MM'))
    }
  }
}
