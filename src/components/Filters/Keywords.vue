<template lang="html">
  <div class="mb-3">

    <form @submit.prevent="submitKeyword" class="mb-1">
      <div class="input-group input-group-sm card-heder">
        <input v-model="keywordInput" type="text" class="form-control" placeholder="Enter Keywords" aria-label="Enter Keywords" required>
        <span class="input-group-btn">
          <button class="btn btn-secondary" type="submit">Add</button>
        </span>
      </div>
    </form>

    <ul v-if="keywords.length" class="list-group small rounded-0 mb-0">
      <li v-for="keyword in keywords" class="list-group-item d-flex justify-content-between align-items-center rounded-0 px-2 py-1">
        {{ keyword }}
        <button class="badge badge-danger badge-pill" @click="removeKeyword(keyword)">
          <span class="fa fa-fw fa-remove" :aria-label="`Remove ${keyword} as a keyword`"></span>
        </button>
      </li>
    </ul>

    <p v-else class="text-muted text-center small">
      <strong>No Keywords</strong>
    </p>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'keywords',
  data () {
    return {
      keywordInput: null
    }
  },
  methods: {
    ...mapActions([
      'addKeyword',
      'removeKeyword'
    ]),
    submitKeyword () {
      this.addKeyword(this.keywordInput)
      this.keywordInput = null
    }
  },
  computed: {
    ...mapState({
      keywords: state => state.filters.keywords.activeKeywords
    })
  }
}
</script>
