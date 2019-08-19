<template>
  <div class="has-background-grey-darker has-text-white">
    <!-- Home Banner -->
    <hero :image="$store.state.homePage.acf.header_image" title="Guy Buttery" />

    <div class="section has-background-white has-text-dark is-medium">
      <div class="container">
        <h1 class="section-title has-text-centered">{{$store.state.homePage.acf.intro_title}}</h1>
        <div class="columns">
          <div class="column is-half">
            <div v-html="$store.state.homePage.acf.intro_text"></div>
            <a href="/about" class="cta-btn button is-primary">Read More</a>
          </div>
          <div class="column home-image">
            <img :src="$store.state.homePage.acf.intro_image" alt="About Guy image" />
          </div>
        </div>
      </div>
    </div>

    <div class="section is-medium has-text-centered">
      <h1 class="section-title has-text-white has-text-centered">Upcoming shows & tours</h1>
      <TourList :tours="tours" />
      <a href="/tours" class="tour-cta button is-primary">View more tours and shows</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Config from '~/assets/config'

import Hero from '@/components/Hero.vue'
import TourList from '@/components/TourList.vue'

export default {
  components: {
    Hero,
    TourList
  },
  async fetch({ store, params }) {
    let { data } = await axios.get(Config.wpDomain + Config.api.homePage)
    store.commit('setHomePage', data)
  },
  computed: {
    tours() {
      return this.$store.state.tours.subset
    }
  },
  head() {
    return {
      title: this.$store.state.homePage.title.rendered
    }
  }
}
</script>

<style lang="scss" scoped>
.cta-btn {
  margin: 1rem 0;
}

.tour-cta {
  margin-top: 3rem;
}

@media screen and (min-width: 768px) {
  .home-image {
    margin: 0 15px;
  }
}
</style>
