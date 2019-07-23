<template>
  <div class="container">
    <h1 class="section-title has-text-centered">Latest News</h1>
    <div class="columns">
      <div class="column is-one-third" v-for="post in news" :key="post.id">
        <img class="image" :src="'/' + post.image" alt />
        <p>{{post.snippet}}</p>
        <div class="columns details">
          <div class="column is-half">
            <small>{{post.date}}</small>
          </div>
          <div class="column is-half has-text-right">
            <a href="/" class="button is-outlined is-primary">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['news']
}
</script>

<style scoped>
.details {
  margin-top: 0.5rem;
}
.title {
  margin-bottom: 2.5rem;
}
</style>
