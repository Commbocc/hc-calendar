<template lang="html">
  <nav class="card card-header mb-2">
    <div class="row no-gutters justify-content-between align-items-center text-center">
      <div class="col">
        <a href="#" @click.prevent="prevMonth()">Prev</a>
      </div>
      <div class="col">
        <strong>
          {{ header }}
        </strong>
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
      activeDate: state => state.events.activeDate
    }),
    header () {
      return this.activeDate.format('MMMM YYYY')
    }
  },
  methods: {
    ...mapActions([
      'prevMonth',
      'nextMonth'
    ])
  }
}
</script>
