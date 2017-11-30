import _ from 'underscore'

export class Location {
  constructor (title) {
    this.title = title
  }
}

export default {
  state: {
    index: [],
    active: []
  },
  mutations: {
    setLocationFacets (state, data) {
      state.index = data
    }
  },
  getters: {
    uniqLocationsOf: state => (events) => {
      return _.chain(events.map(e => e.location))
      .reject(l => l.title === null)
      .sortBy(l => l.title)
      .uniq(true, l => l.title)
      .value()
    },
    activeAndAvailableLocations: state => {
      return _.chain(_.union(state.index, state.active))
      .sortBy(l => l.title)
      .uniq(true, l => l.title)
      .value()
    }
  }
}
