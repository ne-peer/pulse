<template>
  <section class="padding-top">
    <pulse-social></pulse-social>
  </section>
</template>

<script>
import PulseSocial from '~/components/PulseSocial.vue'

export default {
  components: {
    PulseSocial
  },
  head: {
    title: 'Pulse | Home'
  },
}
</script>

<style scoped>
.padding-top {
  padding-top: 80px;
  padding-bottom: 80px;
}
</style>
