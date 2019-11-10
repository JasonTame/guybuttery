<template>
  <footer class="footer is-small has-background-black-ter">
    <div class="content has-text-centered has-text-white">
      <a
        target="_blank"
        class="footer-icons"
        :href="link.url"
        v-bind:key="link"
        v-for="link in links"
      >
        <font-awesome-icon :icon="['fab', link.title]" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['links']
}
</script>


<style lang="scss" scoped>
.footer-icons {
  color: #c3cccf;
  font-size: 2rem;
  padding: 0.5rem;
  &:hover {
    color: #fff;
  }
}
</style>

