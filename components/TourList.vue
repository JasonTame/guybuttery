<template>
  <div>
    <div class="tour-list container has-text-left-mobile has-text-centered-tablet">
      <!-- Mobile view -->
      <div :key="tour.id" v-for="tour in tours" class="tour-event is-hidden-tablet">
        <div class="tour-details is-flex-tablet">
          <p class="tour-date">{{tour.date}}</p>
          <p class="tour-venue has-text-primary">{{tour.venue}}</p>
          <p class="tour-location">{{tour.location}}</p>
        </div>
        <div class="tour-buttons is-flex-mobile">
          <a href="/" class="button is-primary is-outlined">Tickets</a>
        </div>
      </div>
      <!-- Desktop view -->
      <div :key="tour.id" v-for="tour in tours" class="tour-event tour-details is-hidden-mobile">
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
.tour-details {
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    & {
      margin: 0 30px;
    }
  }
}

.tour-buttons {
  align-items: center;
}
</style>

