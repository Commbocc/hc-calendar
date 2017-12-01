<template lang="html">
  <div class="hc-calendar-container">
    <div class="calendar-month row no-gutters mb-3">

      <div class="col calendar-cell" v-for="header in monthHeaders">
        <strong>
          {{ header }}
        </strong>
      </div>
      <div class="w-100"></div>

      <template v-for="cell in cells">

        <!-- day -->
        <div is="day-cell" :cell="cell"></div>

        <!-- week -->
        <div class="w-100" v-if="cell.endOfWeek">
          <div v-if="isActiveWeek(cell.woy)" class="calendar-day-list" :ref="`week${cell.woy}`">
            <router-view/>
          </div>
        </div>

      </template>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import DayCell from '@/components/Month/DayCell'

export default {
  name: 'calendar-month',
  components: {
    DayCell
  },
  methods: {
    ...mapActions([
      'fetchEvents',
      'setDatesWithRouteParams'
    ])
  },
  computed: {
    ...mapState({
      activeDate: state => state.activeDate
    }),
    ...mapGetters([
      'monthHeaders',
      'isActiveWeek',
      'cells'
    ])
  },
  mounted () {
    // console.log('month mounted')
    this.setDatesWithRouteParams(this.$route.params)
    this.fetchEvents()
  },
  watch: {
    '$route': function (e) {
      // console.log('watched from month component')
      this.setDatesWithRouteParams(this.$route.params)
    }
  }
}
</script>
