<template>
  <footer class="footer is-small has-background-black-ter">
    <div class="content has-text-centered has-text-white">
      <a
        target="_blank"
        class="footer-icons"
        :href="link.link"
        v-bind:key="link.link"
        v-for="link in links"
      >
        <font-awesome-icon :icon="['fab', link.name]" />
      </a>
      <signup-form />
    </div>
  </footer>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'

export default {
  props: ['links'],
  components: {
    SignupForm
  }
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

