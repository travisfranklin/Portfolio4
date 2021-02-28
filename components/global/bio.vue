<template>
  <section
    v-if="bio"
    :class="`bio ${ bioActive ? 'bioActive' : '' }`"
    @click="bioActive = !bioActive"
    @mouseenter="bioActive = true"
    @mouseleave="bioActive = false"
  >
    <div class="bio__inner px-5 pt-2">
      <div class="is-flex is-align-items-center is-justify-content-space-between">
        <div class="is-flex is-align-items-center column px-0">
          <b-image rounded ratio="square" class="bio__image avatar column p-0 mr-2 mr-4-tablet" :src="bio.avatar" />
          <p class="column p-1 is-size-7 is-size-6-tablet has-text-white">
            <span class="has-text-weight-bold" v-html="bio.subhead" />
            <br>
            {{ bio.subsubhead }}
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M11 18.59V3a1 1 0 0 1 2 0v15.59l5.3-5.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 0 1 1.4-1.42l5.3 5.3z" /></svg>
      </div>
      <p class="bio__inner__sneaky has-text-white px-2">
        <nuxt-content :document="bio" />
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Bio',

  props: {
    bio: {
      type: Object,
      default: () => null
    }
  },
  data () {
    return {
      bioActive: false
    }
  },
  mounted () {
    console.log('bio = ', this.bio)
  }
}
</script>
