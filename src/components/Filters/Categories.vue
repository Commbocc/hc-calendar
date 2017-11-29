<template lang="html">
  <div class="">
    <ul v-if="activeAndAvailableCategories.length" class="list-unstyled mb-0 small">
      <li v-for="cat in activeAndAvailableCategories" class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" :value="cat" v-model="$store.state.filters.categories.activeCategories">
          <span :title="cat.title" :aria-label="cat.title" :style="'color:'+cat.color">&#9679;</span>
          {{ cat.title }}
        </label>
      </li>
    </ul>
    <div v-else class="text-muted text-center small">
      <strong>No Calendars</strong>
    </div>
    <!-- <pre>{{ $store.state.filters.categories.activeCategories }}</pre> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      categories: state => state.categories.index
    }),
    ...mapGetters([
      'activeAndAvailableCategories'
    ])
  }
}
</script>
