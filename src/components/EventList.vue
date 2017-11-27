<template lang="html">
  <section v-if="list" class="">

    <p class="h5 text-center my-2">
      {{ list.date.format("LL") }}
      <small v-if="!events.length">
        <br>
        No Events
      </small>
    </p>

    <div v-if="events.length" class="list-group">
      <a v-for="event in events" :href="event.url" class="list-group-item list-group-item-action flex-column align-items-start">

        <div class="d-flex w-100 justify-content-between">
          <!-- <img :src="event.image" :alt="event.title" class="img-fluid"> -->
          <h6 class="mb-1 font-weight-bold">
            {{ event.title }}
          </h6>
          <small>{{ event.start.format("LT") }}</small>
        </div>

        <!-- <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> -->

        <small>
          <span v-html="event.category.icon"></span>
          {{ event.category.title }}
        </small>

      </a>
    </div>

  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'event-list',
  props: ['events'],
  computed: {
    ...mapState({
      list: state => state.slots.activeList
    })
  }
}
</script>
