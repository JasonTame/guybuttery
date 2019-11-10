<template>
  <section
    class="home-banner hero is-dark is-large has-background-image"
    :style="{backgroundImage:'url(' + bgImage + ')'}"
  >
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">{{title}}</h1>
        <!-- <h2 class="subtitle">Amazing musician</h2> -->
      </div>
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
