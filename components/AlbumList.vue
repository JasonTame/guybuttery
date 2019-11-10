<template>
  <div class="columns">
    <div v-for="album in albums" :key="album.slug" class="column is-one-third">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="album.album_image" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{album.title}}</p>
              <p class="subtitle is-6">by {{album.author}}</p>
            </div>
          </div>

          <div class="content">
            <div class="buttons">
              <div class="button is-primary is-outlined album-button">
                <span class="album-button-icon">
                  <font-awesome-icon icon="shopping-cart" />
                </span>
                <a target="_blank" class="has-text-primary" :href="`${album.link}?action=buy`">Buy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['albums']
}
</script>

<style lang="scss" scoped>
.album-button {
  &:hover {
    a {
      color: #ffffff !important;
    }
  }
  &-icon {
    padding-right: 0.5rem;
  }
}
</style>