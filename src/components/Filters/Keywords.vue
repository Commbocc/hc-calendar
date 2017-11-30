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

    <ul v-if="activeKeywords.length" class="list-unstyled mb-0">
      <li v-for="keyword in activeKeywords" class="my-2">
        <a @click.prevent="removeKeyword(keyword)" href="#" class="text-danger">
          <span  class="fa fa-fw fa-remove" aria-label="Remove Keword"></span>
        </a>
        {{ keyword }}
      </li>
    </ul>

    <p v-else class="text-muted text-center small">
      <strong>No Keywords</strong>
    </p>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
    ...mapGetters([
      'activeKeywords'
    ])
  }
}
</script>
