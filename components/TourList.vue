<template>
  <div>
    <div class="tour-list container has-text-centered">
      <div :key="tour.id" v-for="tour in tours" class="tour-event">
        <p class="tour-date">{{tour.date}}</p>
        <p class="tour-venue has-text-primary">{{tour.venue}}</p>
        <p class="tour-location">{{tour.location}}</p>
        <div class="tour-buttons">
          <a href="/" class="button is-primary is-outlined">Tickets</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tours']
}
</script>

<style lang="scss" scoped>
</style>

