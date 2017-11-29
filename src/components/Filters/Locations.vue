<template lang="html">
  <div class="">
    <ul v-if="activeAndAvailableLocations.length" class="list-unstyled mb-0 small">
      <li v-for="location in activeAndAvailableLocations" class="form-check">
        <label class="form-check-label">
          <input @change="updateLocations" class="form-check-input" type="checkbox" v-model="$store.state.filters.locations.activeLocations" :value="location">
          {{ location.title }}
        </label>
      </li>
    </ul>
    <div v-else class="text-muted text-center small">
      <strong>No Locations</strong>
    </div>
    <!-- <pre>{{ $store.state.filters.locations.activeLocations }}</pre> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'updateLocations'
    ])
  },
  computed: {
    ...mapGetters([
      'activeAndAvailableLocations'
    ])
  }
}
</script>
