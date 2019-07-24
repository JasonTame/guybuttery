<template>
  <div>
    <Hero image="guybuttery_3.jpg" title="Contact" />
    <div class="section is-medium contact-form">
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
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-large is-primary">Submit</button>
        </div>
        <div class="control">
          <button class="button is-large is-text">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Hero
  }
}
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .contact-form {
    margin: 0rem 5rem;
  }
}
</style>
