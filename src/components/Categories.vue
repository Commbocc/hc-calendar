<template lang="html">
  <div class="">
    <ul class="list-unstyled mb-0">
      <li v-for="cat in categories" class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" :value="cat.title" v-model="$store.state.categories.activeCategories">
          <span :title="cat.title" :aria-label="cat.title" :style="'color:'+cat.color">&#9679;</span>
          {{ cat.title }}
        </label>
      </li>
    </ul>
    <!-- <pre>{{ $store.state.categories.activeCategories }}</pre> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      categories: state => state.categories.index
    })
  }
}
</script>
