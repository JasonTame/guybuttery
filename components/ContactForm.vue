<template>
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
          <input name="email" class="input" type="email" placeholder="Email input" value="hello@" />
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
</template>