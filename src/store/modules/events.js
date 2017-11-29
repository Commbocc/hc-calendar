import Vue from 'vue'
import moment from 'moment'
import { Category } from '@/store/modules/filters/categories'
// import router from '@/router'

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

    this.hasPast = (this.end.valueOf() < moment().valueOf())
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
        Locations: getters.activeLocationIds,
        Keywords: getters.activeKeywords
        // Calendars: [] // rootState.filters.categories.activeCategories
      }

      Vue.http.post(url, data).then(response => {
        response.body.result.forEach(result => {
          commit('addEvent', result)
        })

        commit('setCategoryFacets', getters.uniqCategoriesOf(state.index))
        commit('setLocationFacets', response.body.locationFacets)
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
      return getters.filterActiveEvents(state.index)
    },
    activeEventsOfActiveDate: (state, getters) => {
      return getters.filterActiveEvents(getters.eventsOfActiveDate)
    },
    // DRY
    filterActiveEvents: (state, getters, rootState) => (events) => {
      if (events.length) {
        return events.filter(e => {
          if (rootState.filters.categories.activeCategories.length) {
            return (rootState.filters.categories.activeCategories.map(c => c.title).indexOf(e.category.title) !== -1)
          } else {
            return true
          }
        })
      } else {
        return events
      }
    }
  }
}
