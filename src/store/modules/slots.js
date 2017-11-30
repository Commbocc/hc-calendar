import moment from 'moment'

export class Slot {
  constructor (date, categories, inCurrentMonth = true) {
    this.date = date
    this.categories = categories
    this.inCurrentMonth = inCurrentMonth

    this.dom = this.date.date()
    this.dow = this.date.day() + 1
    this.woy = this.date.week()

    this.endOfWeek = (this.dow % 7 === 0)

    this.link = this.date.format('/YYYY/MM/DD')

    this.isToday = (this.date.valueOf() === moment().startOf('date').valueOf())
  }

  slotClasses (activeDate) {
    var classes = []
    if (this.isToday) classes.push('calendar-slot-today')
    if (this.isToday) classes.push('font-weight-bold')
    if (activeDate && this.date.valueOf() === activeDate.valueOf()) classes.push('calendar-slot-active')
    return classes.join(' ')
  }
}

export default {
  getters: {
    leadingDaySlots: (state, getters) => {
      return getters.firstOfMonth.day()
    },
    trailingDaySlots: (state, getters) => {
      var total = getters.daysInMonth + getters.leadingDaySlots
      return (total % 7 === 0) ? 0 : 7 - (total % 7)
    },
    slots: (state, getters, rootState) => {
      var slots = []
      var i = 0
      var date = null

      for (i = 0; i < getters.leadingDaySlots; i++) {
        date = moment(getters.firstOfMonth).subtract(getters.leadingDaySlots - i, 'days')
        slots.push(new Slot(date, [], false))
      }

      for (i = 0; i < getters.daysInMonth; i++) {
        date = moment(getters.firstOfMonth).add(i, 'days')
        var events = getters.activeEvents.filter(event => event.date.valueOf() === date.valueOf())
        slots.push(new Slot(date, getters.uniqCategoriesOf(events)))
      }

      for (i = 0; i < getters.trailingDaySlots; i++) {
        date = moment(getters.lastOfMonth).add(i + 1, 'days')
        slots.push(new Slot(date, [], false))
      }

      return slots
    }
  }
}
