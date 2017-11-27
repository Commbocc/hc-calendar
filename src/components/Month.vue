<template lang="html">
  <div id="calendar-month" class="row no-gutters">

    <div class="col calendar-slot" v-for="header in monthHeaders">
      <strong>
        {{ header }}
      </strong>
    </div>
    <div class="w-100"></div>

    <template v-for="(slot, index) in slots">

      <!--  -->
      <router-link v-if="slot.active" :to="slot.link" class="col calendar-slot">
        <!-- <span @click="openSlot(slot)"></span> -->
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

      <!--  -->
      <div class="w-100" v-if="slot.endOfWeek">
        <div v-if="isActiveList(slot.woy)" class="calendar-day-list" :ref="`week${slot.woy}`">
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
      'setActiveDateWithParams'
    ])
  },
  computed: {
    ...mapGetters([
      'slots',
      'monthHeaders',
      'isActiveList'
    ])
  // },
  // watch: {
  //   '$route': function (e) {
  //     console.log('watched in month comp')
  //     this.setActiveDateWithParams(e.params)
  //   }
  }
}
</script>
