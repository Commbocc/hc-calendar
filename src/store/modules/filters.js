import _ from 'underscore'

import locations from '@/store/modules/filters/locations'
import categories from '@/store/modules/filters/categories'
import keywords from '@/store/modules/filters/keywords'

export default {
  modules: {
    locations,
    categories,
    keywords
  },
  actions: {
    clearFilters ({state, commit, dispatch}) {
      var shouldRefreshEvents = (state.keywords.active.length)
      commit('clearFilters')
      if (shouldRefreshEvents) dispatch('fetchEvents')
    }
  },
  mutations: {
    clearFilters (state) {
      state.categories.active = []
      state.locations.active = []
      state.keywords.active = []
    }
  },
  getters: {
    filterEvents: (state, getters) => (events) => {
      if (events.length) {
        return events.filter(e => {
          if (state.categories.active.length) {
            return (state.categories.active.map(c => c.title).indexOf(e.category.title) !== -1)
          } else {
            return true
          }
        })
        .filter(e => {
          if (state.locations.active.length) {
            return (state.locations.active.map(l => l.title).indexOf(e.location.title) !== -1)
          } else {
            return true
          }
        })
      } else {
        return events
      }
    },
    hasFiltersApplied: state => {
      return _.union(
        state.categories.active,
        state.locations.active,
        state.keywords.active
      ).length
    }
  }
}
