import _ from 'underscore'

export class Category {
  constructor (title, color) {
    this.title = title
    this.color = color
    this.icon = `<span title="${this.title}" aria-label="${this.title}" style="color: ${this.color} !important;">&#9679;</span>`
  }
}

export default {
  getters: {
    uniqCategoriesOf: state => (events) => {
      return _.chain(events.map(e => e.category))
      .sortBy(c => c.title)
      .uniq(true, c => c.title)
      .value()
    },
    categories: (state, getters, rootState) => {
      return getters.uniqCategoriesOf(rootState.events.index)
    }
  }
}
