<template lang="html">
  <nav class="card card-header mb-2">
    <div class="row no-gutters align-items-center text-center">
      <div class="col">
        <a href="#" @click.prevent="prevMonth()">Prev</a>
      </div>
      <div class="col">
        <h6 class="font-weight-bold mb-0">
          {{ header }}
        </h6>
        <small>
          <a href="#" @click.prevent="goTo()">Today</a>
        </small>
      </div>
      <div class="col">
        <a href="#" @click.prevent="nextMonth()">Next</a>
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
