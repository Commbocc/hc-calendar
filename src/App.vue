<template>
  <div id="calendar">

    <div class="row">
      <div class="col-md-8 order-md-12">

        <!-- navigation -->
        <nav is="calendar-nav"></nav>

        <!-- calendar view -->
        <router-view/>

      </div>
      <div class="col-md-4 order-md-1">

        <!-- categories -->
        <div class="card mb-3">
          <h6 class="card-header">
            Calendars
          </h6>
          <div is="categories" class="card-body hc-facet-container px-2 py-1"></div>
        </div>

        <!-- locations -->
        <div class="card mb-3">
          <h6 class="card-header">
            Locations
          </h6>
          <div is="locations" class="card-body hc-facet-container px-2 py-1"></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import CalendarNav from '@/components/Navigation'
import CalendarMonth from '@/components/Month'
import Categories from '@/components/Categories'
import Locations from '@/components/Locations'

export default {
  name: 'calendar',
  components: {
    CalendarNav,
    CalendarMonth,
    Categories,
    Locations
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

.hc-facet-container {
  max-height: 250px;
  overflow-y: auto;
}
</style>
