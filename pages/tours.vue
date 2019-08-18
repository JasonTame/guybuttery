<template>
  <div>
    <Hero image="guybuttery_1.jpg" title="Tours" />
    <div class="section is-small">
      <h1 class="section-title has-text-centered">Upcoming shows & tours</h1>
      <TourList :tours="tours" />
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import TourList from '@/components/TourList.vue'

export default {
  components: {
    Hero,
    TourList
  },
  computed: {
    tours() {
      return this.$store.state.tours.all
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

