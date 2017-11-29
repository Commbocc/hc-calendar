<template lang="html">
  <div id="calendar-month" class="row no-gutters mb-3">

    <div class="col calendar-slot" v-for="header in monthHeaders">
      <strong>
        {{ header }}
      </strong>
    </div>
    <div class="w-100"></div>

    <template v-for="slot in slots">

      <!-- day -->
      <router-link v-if="slot.active" :to="slot.link" class="col calendar-slot" :class="(slot.isToday) ? 'calendar-slot-today' : null">
        {{ slot.dom }}
        <ul class="list-inline small my-0">
          <li v-for="cat in slot.categories" class="list-inline-item m-0">
            <span v-html="cat.icon"></span>
          </li>
        </ul>
      </router-link>
      <div v-else class="col calendar-slot calendar-slot-empty" aria-hidden="true">
        {{ slot.dom }}
      </div>

      <!-- week -->
      <div class="w-100" v-if="slot.endOfWeek">
        <div v-if="isActiveWeek(slot.woy)" class="calendar-day-list" :ref="`week${slot.woy}`">
          <router-view/>
        </div>
      </div>

    </template>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'calendar-month',
  methods: {
    ...mapActions([
      'fetchEvents',
      'setDatesWithRouteParams'
    ])
  },
  computed: {
    ...mapGetters([
      'monthHeaders',
      'isActiveWeek',
      'slots'
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
