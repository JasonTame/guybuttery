<template>
  <div>
    <nuxt />
    <TheFooter :links="socialLinks" />
  </div>
</template>

<script>
import TheFooter from '@/components/Footer.vue'

export default {
  components: {
    TheFooter
  },
  computed: {
    socialLinks() {
      return this.$store.state.socialLinks
    }
  }
}
</script>


<style>
</style>
