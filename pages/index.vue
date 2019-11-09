<template>
  <div class="has-background-grey-darker has-text-white">
    <!-- Home Banner -->
    <hero :image="$store.state.homePage.acf.intro_image" title="Guy Buttery" />

    <div class="section has-background-white has-text-dark is-medium">
      <div class="container">
        <h1 class="section-title has-text-centered">{{$store.state.homePage.acf.intro_title}}</h1>
        <div class="columns">
          <div class="column is-half">
            <div v-html="$store.state.homePage.acf.intro_text"></div>
            <a href="/about" class="cta-btn button is-primary">Read More</a>
          </div>
          <div class="column is-half">
            <div class="embed-container">
              <iframe
                src="https://www.youtube.com/embed/ib5fPlBR7rc"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section is-medium has-text-centered">
      <h1 class="section-title has-text-white has-text-centered">Upcoming shows & tours</h1>
      <TourList :tours="tours" />
      <a href="/tours" class="tour-cta button is-primary">View more tours and shows</a>

      <h1 class="section-title has-text-white has-text-centered album-title">Albums</h1>
      <div class="column is-half has-text-centered vertically-centered">
        <div class="buttons music-buttons are-medium">
          <div class="button is-primary is-outlined">Bandcamp</div>
          <div class="button is-primary is-outlined">Spotify</div>
          <div class="button is-primary is-outlined">Apple</div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://f4.bcbits.com/img/a4124745363_2.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://f4.bcbits.com/img/a1219572654_2.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="https://f4.bcbits.com/img/a4287895255_2.jpg" alt="Placeholder image" />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://f4.bcbits.com/img/a1599008708_2.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://f4.bcbits.com/img/a2664165749_2.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Test Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://f4.bcbits.com/img/a4287895255_2.jpg" alt="Placeholder image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">@johnsmith</p>
                </div>
              </div>

              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a>@bulmaio</a>.
                <a href="#">#css</a>
                <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section has-background-white has-text-dark has-text-centered">
      <div class="column is-two-thirds vertically-centered">
        <h1 class="section-title has-text-centered">Fill in the form below to get in touch</h1>
        <div class="columns">
          <div class="column is-half">
            <div class="field">
              <label class="label">First Name</label>
              <div class="control">
                <input class="input" type="text" placeholder />
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="field">
              <label class="label">Last Name</label>
              <div class="control">
                <input class="input" type="text" placeholder />
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email input" value="hello@" />
          </div>
        </div>
        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <input class="input" type="text" placeholder value />
          </div>
        </div>
        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-medium is-primary">Submit</button>
          </div>
        </div>
      </div>
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
