<template>
  <div id="calendar" class="hc-calendar-container">

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

<style lang="scss"></style>
