import moment from 'moment'

export class Cell {
  constructor (date, categories, inCurrentMonth = true) {
    this.date = date
    this.unix = this.date.valueOf()
    this.categories = categories
    this.inCurrentMonth = inCurrentMonth

    this.dom = this.date.date()
    this.dow = this.date.day() + 1
    this.woy = this.date.week()

    this.endOfWeek = (this.dow % 7 === 0)

    this.isToday = (this.unix === moment().startOf('date').valueOf())
  }
}

export default {
  getters: {
    leadingDayCells: (state, getters) => {
      return getters.firstOfMonth.day()
    },
    trailingDayCells: (state, getters) => {
      var total = getters.daysInMonth + getters.leadingDayCells
      return (total % 7 === 0) ? 0 : 7 - (total % 7)
    },
    cells: (state, getters, rootState) => {
      var cells = []
      var i = 0
      var date = null

      for (i = 0; i < getters.leadingDayCells; i++) {
        date = moment(getters.firstOfMonth).subtract(getters.leadingDayCells - i, 'days')
        cells.push(new Cell(date, [], false))
      }

      for (i = 0; i < getters.daysInMonth; i++) {
        date = moment(getters.firstOfMonth).add(i, 'days')
        var events = getters.activeEvents.filter(event => event.date.valueOf() === date.valueOf())
        cells.push(new Cell(date, getters.uniqCategoriesOf(events)))
      }

      for (i = 0; i < getters.trailingDayCells; i++) {
        date = moment(getters.lastOfMonth).add(i + 1, 'days')
        cells.push(new Cell(date, [], false))
      }

      return cells
    }
  }
}
