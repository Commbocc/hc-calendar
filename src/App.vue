<template>
  <div id="calendar">

    <router-view/>

  </div>
</template>

<script>
import CalendarMonth from '@/components/Month'

export default {
  name: 'calendar',
  components: {
    CalendarMonth
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

.calendar-slot-today {
  /*background-color: #78ccd2;*/
  background-color: transparent;
  background-color: rgba(120,204,210, 0.25);
}

.calendar-slot-empty {
  color: #aaa;
}

.hc-facet-container {
  max-height: 250px;
  overflow-y: auto;
}
</style>
