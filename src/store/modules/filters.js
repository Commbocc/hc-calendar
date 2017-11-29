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
    clearFilters ({commit, dispatch}) {
      commit('clearFilters')
      dispatch('fetchEvents')
    }
  },
  mutations: {
    clearFilters (state) {
      state.categories.activeCategories = []
      state.locations.activeLocations = []
      state.keywords.activeKeywords = []
    }
  },
  getters: {
    hasFiltersApplied: state => {
      return _.union(
        state.categories.activeCategories,
        state.locations.activeLocations,
        state.keywords.activeKeywords
      ).length
    }
  }
}
