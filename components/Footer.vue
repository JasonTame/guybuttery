<template>
  <footer class="footer is-small has-background-black-ter">
    <div class="content has-text-centered has-text-white">
      <a class="footer-icons" href="#">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a class="footer-icons" href="#">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a class="footer-icons" href="#">
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </a>
      <a class="footer-icons" href="#">
        <font-awesome-icon :icon="['fab', 'spotify']" />
      </a>
      <a class="footer-icons" href="#">
        <font-awesome-icon :icon="['fas', 'music']" />
      </a>
    </div>
    <Signup />
  </footer>
</template>

<script>
// import Signup from '@/components/Signup.vue'

// export default {
//   components: {
//     Signup
//   }
// }
</script>

<style lang="scss" scoped>
.footer-icons {
  color: #c3cccf;
  font-size: 2rem;
  padding: 0.25rem;
  &:hover {
    color: #fff;
  }
}
</style>

