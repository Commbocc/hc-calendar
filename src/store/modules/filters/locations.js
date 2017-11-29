import _ from 'underscore'

export class Location {
  constructor (facet) {
    // console.log(facet)
    this.title = facet.Text
    this.id = facet.Key
    // this.selected = facet.Selected
  }
}

export default {
  state: {
    index: [],
    activeLocations: []
  },
  actions: {
    updateLocations ({dispatch}) {
      // console.log('updateLocations')
      dispatch('fetchEvents')
    }
  },
  mutations: {
    setLocationFacets (state, data) {
      state.index = data.map(f => new Location(f))
    }
  },
  getters: {
    activeLocationIds: state => {
      return state.activeLocations.map(l => l.id)
    },
    activeAndAvailableLocations: state => {
      return _.chain(_.union(state.index, state.activeLocations))
      .sortBy(c => c.title)
      .uniq(true, c => c.id)
      .value()
    }
  }
}
