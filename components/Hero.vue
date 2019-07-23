<template>
  <section class="home-banner hero is-success is-large has-background-image">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
      </div>
      <div class="navbar-menu">
        <a
          role="button"
          class="navbar-burger burger is-flex has-text-white"
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
        <h1 class="title">Guy Buttery</h1>
        <h2 class="subtitle">Amazing musician</h2>
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
        <p class="has-text-centered">Modal content</p>
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
  methods: {
    hideModal() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.home-banner {
  background-image: url('https://images.squarespace-cdn.com/content/v1/5c9f1e6dfb182014576de348/1554291693911-N3FSRWI5GRUPGFWJ81X0/ke17ZwdGBToddI8pDm48kJqIgasHBYIscIzFwRBpKeh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdPj6ZbBj5d4yIRHhbxHokfGXbLXw_2fxZsL37bl5fs10XfLCQDpnY7FxMb_ifd4GA/small+%C2%A9+Gillian+Coetzee++%283%29.jpg');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

.modal-background {
  background-color: #363636 !important;
}
</style>
