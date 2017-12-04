<template lang="html">
  <nav class="card card-header mb-2 bg-white hc-calendar-container">
    <div class="d-flex justify-content-between align-items-center text-center">
      <div class="">
        <a href="#" @click.prevent="prevMonth()">
          <span class="h2 font-weight-bold">&#8249;</span>
          <span class="sr-only">Previous Month</span>
        </a>
      </div>
      <div class="">
        <h5 class="font-weight-bold mb-0">
          {{ header }}
        </h5>
        <small>
          <a href="#" @click.prevent="goTo()">Today</a>
        </small>
      </div>
      <div class="">
        <a href="#" @click.prevent="nextMonth()">
          <span class="h2 font-weight-bold">&#8250;</span>
          <span class="sr-only">Next Month</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'navigation',
  computed: {
    ...mapState({
      focusDate: state => state.focusDate
    }),
    header () {
      return this.focusDate.format('MMMM YYYY')
    }
  },
  methods: {
    ...mapActions([
      'prevMonth',
      'nextMonth',
      'goTo'
    ])
  }
}
</script>
