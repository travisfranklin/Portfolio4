<template>
  <div class="is-flex is-flex-direction-column is-align-items-stretch">
    <article class="is-mobile is-centered p-5">
      <h1 class="title is-1 has-text-peach has-text-weight-heavy mb-6">
        {{ article.title }}
      </h1>
      <p class="subtitle has-text-white mb-1">
        {{ article.description }}
      </p>
      <small class="has-text-grey-light">Article last updated: {{ formatDate(article.updatedAt) }}</small>

      <b-image
        v-if="article.img"
        :src="article.img"
        :alt="article.alt"
        ratio="6by3"
        class="my-5"
        lazy
      />

      <nuxt-content :document="article" />
      <prev-next :prev="prev" :next="next" />
    </article>
    <bio :bio="bio[0]" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    const bio = await $content('bio').fetch()

    return {
      article,
      prev,
      next,
      bio
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style lang="scss" scoped>
  .nuxt-content {
    & h2 {
      font-weight: bold;
      font-size: 28px;
    }

    & h3 {
      font-weight: bold;
      font-size: 22px;
    }

    & p {
      margin-bottom: 20px;
    }

    & a,
    & a:visited {
      color: $primary;
    }

    &__highlight {
      position: relative;

      & .filename {
        position: absolute;
        right: 0;
        color: rgb(75, 85, 99);
        font-weight: light;
        z-index: 10;
        margin-right: 2em;
        margin-top: 1em;
        font-size: 0.975rem;
      }
    }
  }
</style>
