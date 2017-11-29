<template lang="html">
  <div class="">
    <!-- categories -->
    <div class="card mb-3">
      <h6 class="card-header p-2 font-weight-bold bg-info text-white">
        Calendars
      </h6>
      <div is="categories" class="card-body hc-facet-container p-2"></div>
    </div>

    <!-- locations -->
    <div class="card mb-3">
      <h6 class="card-header p-2 font-weight-bold bg-info text-white">
        Locations
      </h6>
      <div is="locations" class="card-body hc-facet-container p-2"></div>
    </div>

    <!-- keywords -->
    <div is="keywords"></div>

    <p v-if="hasFiltersApplied">
      <button @click.prevent="clearFilters" type="reset" class="btn btn-sm btn-block btn-warning text-white">Clear Filters</button>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Categories from '@/components/Filters/Categories'
import Locations from '@/components/Filters/Locations'
import Keywords from '@/components/Filters/Keywords'

export default {
  name: 'filters',
  components: {
    Categories,
    Locations,
    Keywords
  },
  methods: {
    ...mapActions([
      'clearFilters'
    ])
  },
  computed: {
    ...mapGetters([
      'hasFiltersApplied'
    ])
  }
}
</script>
