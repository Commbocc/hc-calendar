import Vue from 'vue'
import moment from 'moment'
import { Category } from '@/store/modules/filters/categories'
import { Location } from '@/store/modules/filters/locations'
// import router from '@/router'

export class Event {
  constructor (result) {
    // console.log(result)
    this.start = moment(result.start)
    this.end = moment(result.end)
    this.title = result.title
    this.url = result.url
    this.date = moment(this.start).startOf('day')
    this.image = `http://hcflgov.net${result.img}`
    this.category = new Category(result.type, result.color)
    this.location = new Location(result.location)

    this.hasPast = (this.end.valueOf() < moment().valueOf())
  }

  eventClasses () {
    var classes = []
    if (this.hasPast) classes.push('past-event')
    return classes.join(' ')
  }

  timeRange () {
    // date range function
    if (this.start.valueOf() === this.end.valueOf()) {
      return this.start.format('LT')
    } else {
      return `${this.start.format('LT')} - ${this.end.format('LT')}`
    }
  }
}

export default {
  state: {
    index: []
  },
  actions: {
    fetchEvents ({state, getters, commit, rootState}) {
      commit('setEvents', [])

      var url = process.env.EVENTS_URL

      var data = {
        from: getters.firstOfMonth.valueOf(),
        to: getters.lastOfMonth.valueOf(),
        Keywords: getters.activeKeywords
      }

      Vue.http.post(url, data).then(response => {
        response.body.result.forEach(result => {
          commit('addEvent', result)
        })

        commit('setCategoryFacets', getters.uniqCategoriesOf(state.index))
        commit('setLocationFacets', getters.uniqLocationsOf(state.index))
      }, err => {
        console.error(err)
        // commit('setEvents', [])
      })
    }
  },
  mutations: {
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
    eventsOfActiveDate: (state, getters, rootState) => {
      return getters.eventsOfDate(rootState.activeDate)
    },
    activeEvents: (state, getters) => {
      return getters.filterEvents(state.index)
    },
    activeEventsOfActiveDate: (state, getters) => {
      return getters.filterEvents(getters.eventsOfActiveDate)
    }
  }
}
