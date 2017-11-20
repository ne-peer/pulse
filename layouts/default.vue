<template>
  <div class="outer">
    <navbar/>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
.outer {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 980px;
}
</style>
