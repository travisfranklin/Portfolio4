export default {
  // Target
  target: 'static',

  // Global page headers
  head: {
    title: 'p4',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' }
    ]
  },

  // Global CSS
  css: [
    'assets/scss/my-style.scss'
  ],

  // Plugins to run before rendering page
  plugins: [
  ],

  // Auto import components
  components: true,

  // content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Modules for dev and build (recommended)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules
  modules: [
    'nuxt-buefy',
    '@nuxt/content'
  ],

  // Style Resources
  styleResources: {
    scss: [
      '~/assets/scss/my-style.scss'
    ]
  },

  // Build Configuration
  build: {
  }
}
