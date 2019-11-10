<template>
  <div class="album-container">
    <div v-for="album in albums" :key="album.slug" class="album">
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
.album-container {
  display: flex;
  flex-wrap: wrap;
}
.album {
  margin: 1rem;
  @media only screen and (min-width: 1025px) {
    width: 30%;
  }
  width: 100%;
  .card {
    @media only screen and (min-width: 1025px) {
      min-height: 460px;
    }
  }

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
}
</style>