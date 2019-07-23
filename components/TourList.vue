<template>
  <div>
    <h1 class="has-text-centered title">Tour List</h1>
    <div class="tour-list container">
      <div :key="tour.id" v-for="tour in tours" class="tour-event">
        <p class="tour-date">{{tour.date}}</p>
        <p class="tour-venue">{{tour.venue}}</p>
        <p class="tour-location">{{tour.location}}</p>
        <div class="tour-buttons">
          <a href="/" class="button is-dark">Get tickets</a>
          <a href="/" class="button is-dark">RSVP</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    tours() {
      return this.$store.state.tours.all
    }
  }
}
</script>

<style lang="scss" scoped>
.tour-list {
  .tour-event {
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    display: flex;
    justify-content: space-between;
    padding: 0.25rem;
    margin: 1rem;
  }
}
</style>

