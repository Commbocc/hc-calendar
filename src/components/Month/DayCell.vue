<template lang="html">
  <router-link v-if="cell.inCurrentMonth" :to="link" class="col calendar-cell" :class="cellClasses">
    {{ cell.dom }}
    <ul class="list-inline small my-0">
      <li v-for="cat in cell.categories" class="list-inline-item m-0">
        <span v-html="cat.icon"></span>
      </li>
    </ul>
  </router-link>
  <div v-else class="col calendar-cell calendar-cell-empty" aria-hidden="true">
    {{ cell.dom }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'day-cell',
  props: ['cell'],
  computed: {
    ...mapState({
      activeDate: state => state.activeDate
    }),
    isActiveCell () {
      return (this.activeDate && this.cell.unix === this.activeDate.valueOf())
    },
    link () {
      return (this.isActiveCell) ? this.cell.date.format('/YYYY/MM') : this.cell.date.format('/YYYY/MM/DD')
    },
    cellClasses () {
      var classes = []
      if (this.cell.isToday) classes.push('calendar-cell-today font-weight-bold')
      if (this.isActiveCell) classes.push('calendar-cell-active')
      return classes.join(' ')
    }
  }
}
</script>
