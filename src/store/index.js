import Vue from 'vue'
import Vuex from 'vuex'

import moment from 'moment'

import events from '@/store/modules/events'
import locations from '@/store/modules/locations'
import navigation from '@/store/modules/navigation'
import slots from '@/store/modules/slots'
import lists from '@/store/modules/lists'
import categories from '@/store/modules/categories'

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
    locations,
    navigation,
    slots,
    lists,
    categories
  }
})
