<template lang="html">
  <div class="">
    <ul v-if="activeAndAvailableLocations.length" class="list-unstyled mb-0 small">
      <li v-for="location in activeAndAvailableLocations" class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="$store.state.filters.locations.active" :value="location">
          {{ location.title }}
        </label>
      </li>
    </ul>
    <div v-else class="text-muted text-center small">
      <strong>No Locations</strong>
    </div>
    <!-- <pre>{{ $store.state.filters.locations.active }}</pre> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'activeAndAvailableLocations'
    ])
  }
}
</script>
