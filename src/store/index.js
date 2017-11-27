import Vue from 'vue'
import Vuex from 'vuex'

import events from '@/store/modules/events'
import locations from '@/store/modules/locations'
import navigation from '@/store/modules/navigation'
import slots from '@/store/modules/slots'
import categories from '@/store/modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    events,
    locations,
    navigation,
    slots,
    categories
  }
})
