// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import Calendar from './App'
import CalendarNav from '@/components/Navigation'
import CalendarFilters from '@/components/Filters'

import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */

// Calendar
window.HcCalendar = Vue.extend({
  router,
  store,
  template: '<Calendar/>',
  components: { Calendar }
})
document.querySelectorAll('.hc-calendar').forEach(elem => {
  new window.HcCalendar().$mount(elem)
})

// Calendar Navigation
window.HcCalendarNav = Vue.extend({
  router,
  store,
  template: '<CalendarNav/>',
  components: { CalendarNav }
})
document.querySelectorAll('.hc-calendar-nav').forEach(elem => {
  new window.HcCalendarNav().$mount(elem)
})

// Calendar Filters
window.HcCalendarFilters = Vue.extend({
  router,
  store,
  template: '<CalendarFilters/>',
  components: { CalendarFilters }
})
document.querySelectorAll('.hc-calendar-filters').forEach(elem => {
  new window.HcCalendarFilters().$mount(elem)
})
