import Vue from 'vue'
import moment from 'moment'
import { Category } from '@/store/modules/categories'

export class Event {
  constructor (result) {
    // console.log(result)
    this.start = moment(result.start)
    this.end = moment(result.end)
    this.title = result.title
    this.url = result.url
    this.date = moment(this.start).startOf('day')
    this.category = new Category(result.type, result.color)
    this.image = `http://hcflgov.net${result.img}`
  }
}

export default {
  state: {
    activeDate: moment(),
    index: []
  },
  actions: {
    fetchEvents ({getters, commit}) {
      commit('setEvents', [])
      commit('setLocationFacets', [])
      // var url = '/calendar/GetEvents'
      var url = 'http://localhost:3000/events'

      var params = {
        from: getters.firstOfMonth.valueOf(),
        to: getters.lastOfMonth.valueOf()
        // Calendars:
        // Locations:
      }

      Vue.http.get(url, {params}).then(response => {
        response.body.result.forEach(result => {
          commit('addEvent', result)
        })
        commit('setLocationFacets', response.body.locationFacets)
      }, err => {
        console.error(err)
        // commit('setEvents', [])
      })
    }
  },
  mutations: {
    setActiveDate (state, data) {
      state.activeDate = data
    },
    setEvents (state, data) {
      state.index = data
    },
    addEvent (state, data) {
      state.index.push(new Event(data))
    }
  },
  getters: {
    eventsOfDate: (state) => (date) => {
      return state.index.filter(e => e.date.valueOf() === date.valueOf())
    },
    eventsOfDateByParams: (state, getters) => (dateParams) => {
      var date = moment(dateParams)
      return getters.eventsOfDate(date)
    },
    firstOfMonth: (state, getters) => {
      return moment(state.activeDate).startOf('month')
    },
    lastOfMonth: (state, getters) => {
      return moment(state.activeDate).endOf('month')
    },
    monthHeaders: () => {
      return moment()._locale._weekdaysMin
    },
    daysInMonth: (state, getters) => {
      return getters.lastOfMonth.date()
    }
  }
}
