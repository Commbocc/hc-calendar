import _ from 'underscore'

export class Location {
  constructor (facet) {
    // console.log(facet)
    this.title = facet.Text
    this.id = facet.Key
    this.selected = facet.Selected
  }
}

export default {
  state: {
    index: [],
    activeLocations: []
  },
  mutations: {
    setLocationFacets (state, data) {
      state.index = _.sortBy(data.map(f => new Location(f)), 'title')
    }
  },
  getters: {
    activeLocationKeysUrlEncoded: (state, getters) => {
      return (state.activeLocations.length) ? state.activeLocations.map(id => `calendars=${id}`).join('&') : null
    }
  }
}
