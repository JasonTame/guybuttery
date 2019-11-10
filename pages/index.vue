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
      <div class="column is-two-thirds vertically-centered">
        <h1 class="section-title has-text-centered">Fill in the form below to get in touch</h1>
        <form name="contact" method="POST" data-netlify="true">
          <div class="columns">
            <div class="column is-half">
              <div class="field">
                <label for="first_name" class="label">First Name</label>
                <div class="control">
                  <input name="first_name" class="input" type="text" placeholder />
                </div>
              </div>
            </div>
            <div class="column is-half">
              <div class="field">
                <label for="last_name" class="label">Last Name</label>
                <div class="control">
                  <input name="last_name" class="input" type="text" placeholder />
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <label for="email" class="label">Email</label>
            <div class="control">
              <input
                name="email"
                class="input"
                type="email"
                placeholder="Email input"
                value="hello@"
              />
            </div>
          </div>
          <div class="field">
            <label for="subject" class="label">Subject</label>
            <div class="control">
              <input name="subject" class="input" type="text" placeholder value />
            </div>
          </div>
          <div class="field">
            <label for="message" class="label">Message</label>
            <div class="control">
              <textarea name="message" class="textarea" placeholder></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-medium is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Config from '~/assets/config'

import AlbumList from '@/components/AlbumList.vue'
import Hero from '@/components/Hero.vue'
import TourList from '@/components/TourList.vue'

export default {
  components: {
    AlbumList,
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

.vertically-centered {
  margin: 0 auto;
}

.album-title {
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>
