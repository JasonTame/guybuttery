<template>
  <section
    class="hero is-dark is-fullheight has-background-image landing-page"
    :style="{backgroundImage:'url(' + bgImage + ')'}"
  >
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half"></div>
          <div class="column is-half">
            <h1 class="is-size-2 landing-page-title">{{landingPage.title}}</h1>
            <div
              class="landing-page-text has-text-white markdown"
              v-html="$md.render(landingPage.body)"
            ></div>
            <div class="buttons landing-page-buttons">
              <div class="button is-medium is-white">
                <a class="has-text-dark" :href="landingPage.link" target="_blank">Check it out!</a>
              </div>
              <div class="button is-medium is-white">
                <a class="has-text-dark" href="https://guybuttery.netlify.com">View website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column signup has-text-centered">
      <p class="has-text-white is-size-4">Sign up for the latest Guy Buttery news</p>
      <form
        action="https://quicket.us20.list-manage.com/subscribe/post?u=18bfacf1203a5423ff7b5b682&amp;id=59f193132a"
        method="POST"
      >
        <div class="field is-horizontal signup-form">
          <div class="control">
            <input name="MERGE1" id="MERGE1" class="input" type="text" placeholder="Name" />
          </div>
          <div class="control">
            <input name="MERGE0" id="MERGE0" type="email" class="input" placeholder="Email address" />
          </div>
          <div class="control">
            <button class="button is-white" type="submit">Sign up</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'landing',
  async asyncData({ payload }) {
    if (payload) return { landingPage: payload }
    else
      return {
        landingPage: await require(`~/assets/content/landing.json`)
      }
  },
  computed: {
    bgImage() {
      return this.landingPage.cover_image
    }
  },
  head() {
    return {
      title: this.landingPage.title
    }
  }
}
</script>

<style lang="scss" scoped>
.landing-page {
  background-position: center;
  background-size: cover;
  .signup {
    &-form {
      justify-content: center;
    }
    .control {
      padding: 0.5rem 0.25rem;
    }
  }
  &-title {
    margin: 2rem 0;
  }
  &-buttons {
    margin: 2rem 0;
  }
}
</style>