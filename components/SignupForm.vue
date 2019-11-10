<template>
  <div class="has-text-centered signup">
    <p class="has-text-white is-size-4">Sign up for the latest news about Guy</p>
    <form
      action="https://quicket.us20.list-manage.com/subscribe/post?u=18bfacf1203a5423ff7b5b682&amp;id=59f193132a"
      method="POST"
    >
      <div class="field is-horizontal signup-form">
        <div class="control">
          <input name="MERGE1" id="MERGE1" class="input" type="text" placeholder="Name" />
        </div>
        <div class="control">
          <input name="MERGE0" id="MERGE0" type="email" class="input" placeholder="Email address" />
        </div>
        <div class="control">
          <button class="button is-primary" type="submit">Sign up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.signup {
  margin-top: 2rem;
  &-form {
    justify-content: center;
  }
  .control {
    padding: 0.5rem 0.25rem;
  }
}
</style>