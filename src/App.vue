<template>
  <div id="calendar">

    <div class="row">
      <div class="col-md-8 order-md-12">

        <nav is="calendar-nav"></nav>
        <section is="calendar-month"></section>

      </div>
      <div class="col-md-4 order-md-1">

        <ul class="list-unstyled">
          <li v-for="cat in categories">
            <label>
              <input type="checkbox">
              <span :title="cat.title" :aria-label="cat.title" :style="'color:'+cat.color">&#9679;</span>
              {{ cat.title }}
            </label>
          </li>
        </ul>

        <ul class="list-unstyled small">
          <li v-for="location in locations" class="mb-1">
            <label>
              <input type="checkbox">
              {{ location.title }}
            </label>
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import CalendarNav from '@/components/Navigation'
import CalendarMonth from '@/components/Month'

export default {
  name: 'calendar',
  components: {
    CalendarNav,
    CalendarMonth
  },
  methods: {
    ...mapActions([
      'fetchEvents'
    ])
  },
  computed: {
    ...mapState({
      locations: state => state.locations.index
    }),
    ...mapGetters([
      'categories'
    ])
  },
  mounted () {
    this.fetchEvents()
  }
}
</script>

<style lang="css">
#calendar-month {
  border: solid 1px #ccc;
  text-align: center;
}

.calendar-slot {
  background: #fff;
  border: solid 1px #ddd;
  padding: 1rem 0;
}

.calendar-day-list:not(:empty) {
  border: solid 1px #ddd;
  text-align: left;
  padding: .5rem;
}

.calendar-slot-empty {
  color: #aaa;
}
</style>
