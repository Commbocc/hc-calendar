<template lang="html">
  <div class="">
    <ul class="list-unstyled mb-0 small">
      <li v-for="location in locations" class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" v-model="$store.state.locations.activeLocations" :value="location.id">
          {{ location.title }}
        </label>
      </li>
    </ul>
    <!-- <pre>{{ $store.state.locations.activeLocations }}</pre> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      locations: state => state.locations.index
    })
  }
}
</script>
