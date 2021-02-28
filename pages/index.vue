<template>
  <div class="is-mobile is-centered">
    <bio :bio="bio[0]" />
    <ul class="flex flex-wrap">
      <li
        v-for="article of articles"
        :key="article.slug"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >
          <section class="pt-2 hero is-small">
            <div class="hero-body">
              <h3 class="title is-3 mb-1 has-text-weight-heavy">
                {{ article.title }}
              </h3>
              <small class="has-text-grey-light">{{ formatDate(article.updatedAt) }}</small>
              <p class="subtitle is-6 has-text-white">
                {{ article.description }}
              </p>
            </div>
          </section>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  async asyncData ({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author', 'updatedAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    const bio = await $content('bio')
      .limit(1)
      .fetch()

    return {
      articles,
      bio
    }
  },
  data () {
    return {
      bioActive: false
    }
  },
  mounted () {
    console.log('index bio =', this.bio)
  },
  methods: {
    formatDate (date) {
      console.log(date)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
