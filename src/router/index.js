import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import EventList from '@/components/EventList'

import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calendar',
      component: null
    },
    {
      path: '/:year/:month/:day',
      name: 'EventList',
      component: EventList,
      props: (route) => ({
        events: store.getters.eventsOfDateByParams(route.params)
      })
    }
  ]
})
