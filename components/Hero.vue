<template>
  <section
    class="home-banner hero is-dark is-large has-background-image"
    :style="{backgroundImage:'url(' + bgImage + ')'}"
  >
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <!-- <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img
            class="image"
            src="@/assets/basic_logo.png"
            alt="Site logo"
            height="auto"
            width="120px"
          />
        </a>
      </div>-->
      <div class="navbar-menu">
        <a
          role="button"
          class="navbar-burger burger is-flex has-text-white has-background-black-ter"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="showModal = true"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">{{title}}</h1>
        <!-- <h2 class="subtitle">Amazing musician</h2> -->
      </div>
    </div>

    <div
      class="modal"
      :class="{'is-active': showModal}"
      v-show="showModal"
      @close="showModal = false"
    >
      <div class="modal-background is-dark"></div>
      <div class="modal-content">
        <ul class="site-navigation has-text-centered">
          <li class>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tours">Tours</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
          <li>
            <a target="_blank" href="https://guybuttery.bandcamp.com/music">Store</a>
          </li>
        </ul>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="hideModal"></button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  props: ['image', 'title'],
  methods: {
    hideModal() {
      this.showModal = false
    }
  },
  computed: {
    bgImage() {
      return this.image
    }
  }
}
</script>

<style lang='scss' scoped>
.home-banner {
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

.modal-background {
  background-color: #363636 !important;
}

.title {
  font-size: 4rem;
}

@media screen and (min-width: 768px) {
  .title {
    font-size: 5rem;
  }
}

.navbar {
  position: fixed;
  right: 0px;
}
.navbar-menu {
  display: inline !important;
}

.site-navigation {
  a {
    color: #c3cccf;
    font-size: 2.5rem;
    &:hover {
      color: #fff;
    }
  }
}
</style>
