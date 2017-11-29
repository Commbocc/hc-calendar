import _ from 'underscore'

export class Category {
  constructor (title, color) {
    this.title = title
    this.color = color
    this.icon = `<span title="${this.title}" aria-label="${this.title}" style="color: ${this.color} !important;">&#9679;</span>`
  }
}

export default {
  state: {
    index: [],
    activeCategories: []
  },
  mutations: {
    setCategoryFacets (state, data) {
      state.index = data
    }
  },
  getters: {
    uniqCategoriesOf: state => (events) => {
      return _.chain(events.map(e => e.category))
      .sortBy(c => c.title)
      .uniq(true, c => c.title)
      .value()
    },
    activeAndAvailableCategories: state => {
      return _.chain(_.union(state.index, state.activeCategories))
      .sortBy(c => c.title)
      .uniq(true, c => c.title)
      .value()
    }
  }
}
