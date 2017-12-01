import Vue from 'vue'
import Vuex from 'vuex'

import moment from 'moment'

import events from '@/store/modules/events'
import navigation from '@/store/modules/navigation'
import cells from '@/store/modules/cells'
import lists from '@/store/modules/lists'
import filters from '@/store/modules/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    focusDate: moment(),
    activeDate: null
  },
  actions: {
    setDatesWithRouteParams ({state, commit}, params) {
      if (params.month--) {
        commit('setFocusDate', moment({year: params.year, month: params.month}))
        commit('setActiveDate', (params.day) ? moment(params) : null)
      }
    }
  },
  mutations: {
    setFocusDate (state, data) {
      state.focusDate = data
    },
    setActiveDate (state, data) {
      state.activeDate = data
    }
  },
  getters: {
    firstOfMonth: state => {
      return moment(state.focusDate).startOf('month')
    },
    lastOfMonth: state => {
      return moment(state.focusDate).endOf('month')
    },
    monthHeaders: () => {
      return moment()._locale._weekdaysMin
    },
    daysInMonth: (state, getters) => {
      return getters.lastOfMonth.date()
    }
  },
  modules: {
    events,
    navigation,
    cells,
    lists,
    filters
  }
})
