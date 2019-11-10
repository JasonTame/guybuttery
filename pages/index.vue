<template>
  <div class="has-background-grey-darker has-text-white">
    <!-- Home Banner -->
    <hero :image="homePage.banner_image" title="Guy Buttery" />

    <div class="section has-background-white has-text-dark is-medium">
      <div class="container">
        <h1 class="section-title has-text-centered">{{homePage.intro_title}}</h1>
        <div class="columns">
          <div class="column is-half">
            <div v-html="homePage.body"></div>
            <a href="/about" class="cta-btn button is-primary">Read More</a>
          </div>
          <div class="column is-half">
            <div class="embed-container">
              <iframe :src="homePage.intro_video" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section is-medium has-text-centered">
      <h1 class="section-title has-text-white has-text-centered">Upcoming shows & tours</h1>
      <TourList :tours="tours" />

      <a
        v-if="toursListLength > 4"
        href="/tours"
        class="tour-cta button is-primary"
      >View more tours and shows</a>
      <h1 class="section-title has-text-white has-text-centered album-title">Albums</h1>
      <div class="column is-half has-text-centered vertically-centered">
        <div class="buttons music-buttons are-medium">
          <div class="button is-primary is-outlined">Bandcamp</div>
          <div class="button is-primary is-outlined">Spotify</div>
          <div class="button is-primary is-outlined">Apple</div>
        </div>
      </div>

      <!-- Albums -->
      <album-list :albums="albums" />
    </div>

    <div class="section has-background-white has-text-dark">
      <contact-form />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Config from '~/assets/config'

import AlbumList from '@/components/AlbumList.vue'
import ContactForm from '@/components/ContactForm.vue'
import Hero from '@/components/Hero.vue'
import TourList from '@/components/TourList.vue'

export default {
  components: {
    AlbumList,
    ContactForm,
    Hero,
    TourList
  },
  async asyncData({ payload }) {
    if (payload) return { homePage: payload }
    else
      return {
        homePage: await require(`~/assets/content/home.json`)
      }
  },
  computed: {
    albums() {
      return this.$store.state.albums
    },
    tours() {
      let tours = this.$store.state.tours
      return tours.slice(0, 4)
    },
    toursListLength() {
      let tours = this.$store.state.tours
      return tours.length
    }
  },
  head() {
    return {
      title: this.$store.state.homePage.title,
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.music-buttons {
  margin-bottom: 2rem;
  justify-content: center;
}

.cta-btn {
  margin: 1rem 0;
}

.tour-cta {
  margin-top: 3rem;
}

.album-title {
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>
