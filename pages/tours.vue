<template>
  <div>
    <Hero image="guybuttery_3.jpg" title="Tours" />
    <div class="section is-medium">
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

