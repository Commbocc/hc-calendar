import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Month from '@/components/Month'
import EventList from '@/components/Month/EventList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calendar',
      component: Month
    },
    {
      path: '/:year/:month',
      name: 'Month',
      component: Month,
      children: [
        {
          path: ':day',
          name: 'MonthEventList',
          component: EventList
        }
      ]
    }
  ]
})
