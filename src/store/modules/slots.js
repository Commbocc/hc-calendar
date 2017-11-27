import moment from 'moment'

export class Slot {
  constructor (date, events, categories, active = true) {
    this.date = date
    this.events = events
    this.categories = categories

    this.active = active

    this.dom = this.date.date()
    this.dow = this.date.day() + 1
    this.woy = this.date.week()

    this.endOfWeek = (this.dow % 7 === 0)

    this.link = this.date.format('/YYYY/MM/DD')
  }
}

export default {
  state: {
    activeList: null
  },
  actions: {
    // openSlot ({state, commit}, slot) {
    //   if (slot === state.activeList) {
    //     commit('setActiveList', null)
    //   } else {
    //     commit('setActiveList', slot)
    //   }
    // },
    setActiveListByDate ({getters, commit}, date) {
      commit('setActiveList', getters.findSlotByDate(date))
    },
    setActiveListDateParams ({dispatch}, params) {
      var moddedParams = params
      moddedParams.month--
      var d = moment(moddedParams)
      dispatch('setActiveListByDate', d)
    }
  },
  mutations: {
    setActiveList (state, data) {
      state.activeList = data
    }
  },
  getters: {
    findSlotByDate: (state, getters) => (date) => {
      return getters.slots.find(s => s.date.valueOf() === date.valueOf())
    },
    isActiveList: state => (weekOfYear) => {
      return (state.activeList) ? (state.activeList.woy === weekOfYear) : false
    },
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
        slots.push(new Slot(date, [], [], false))
      }

      for (i = 0; i < getters.daysInMonth; i++) {
        date = moment(getters.firstOfMonth).add(i, 'days')
        var events = rootState.events.index.filter(event => event.date.valueOf() === date.valueOf())
        slots.push(new Slot(date, events, getters.uniqCategoriesOf(events)))
      }

      for (i = 0; i < getters.trailingDaySlots; i++) {
        date = moment(getters.lastOfMonth).add(i + 1, 'days')
        slots.push(new Slot(date, [], [], false))
      }

      return slots
    }
  }
}
