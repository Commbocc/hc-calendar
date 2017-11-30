<template lang="html">
  <section v-if="activeDate" class="">

    <p class="h5 text-center my-2">
      {{ activeDate.format("LL") }}
      <small v-if="!activeEventsOfActiveDate.length">
        <br>
        No Events
      </small>
    </p>

    <div v-if="activeEventsOfActiveDate.length" class="list-group">
      <a v-for="event in activeEventsOfActiveDate" :href="event.url" class="list-group-item list-group-item-action flex-column align-items-start" :class="event.eventClasses()">

        <div class="d-flex w-100 justify-content-between">
          <!-- <img :src="event.image" :alt="event.title" class="img-fluid"> -->
          <h6 class="mb-1 font-weight-bold">
            {{ event.title }}
            <small v-if="event.location.title" class="">
              <br>
              {{ event.location.title }}
            </small>
          </h6>
          <small>{{ event.timeRange() }}</small>
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
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'event-list',
  computed: {
    ...mapState({
      activeDate: state => state.activeDate
    }),
    ...mapGetters([
      'activeEventsOfActiveDate'
    ])
  }
}
</script>
