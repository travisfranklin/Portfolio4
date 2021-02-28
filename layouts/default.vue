<template>
  <div class="main">
    <div class="container">
      <section class="pt-5 pb-5-tablet hero is-small bloghead">
        <div class="hero-body is-flex is-justify-content-space-between is-align-items-center">
          <NuxtLink
            :to="{ name: 'index' }"
          >
            <p class="title is-2 has-text-white has-text-weight-heavy">
              Marilyn
            </p>
          </NuxtLink>
          <p class="subtitle is-6 has-text-peach-lighter">
            {{ quirkyMessage }}
          </p>
        </div>
      </section>
      <section class="main-content pb-6">
        <div class="container mb-6">
          <nuxt />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  computed: {
    quirkyMessage () {
      const messages = [
        'Hey!',
        'Hi!',
        'Howdy!',
        'Nice weather, eh?',
        'How are ya?',
        'Velcro—what a rip-off!',
        '“Um.” —First horse ever ridden',
        'Not as lazy as the person who named fireplaces',
        "If at first you don't succeed, have some cake."
      ]

      return messages[Math.floor((Math.random() * messages.length))]
    }
  }
}
</script>

<style lang="scss">
body,
html {
  background-color: #282c35;
}

.main {
  .container {
    max-width: 42rem !important;
  }

  header {
    margin-top: 10rem;
  }
}
</style>
