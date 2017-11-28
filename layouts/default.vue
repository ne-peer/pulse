<template>
  <div class="outer">
    <div class="content">
      <Navbar/>
      <div class="bc">
        <Breadcrumbs/>
      </div>
      <nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar, Breadcrumbs, Footer
  }
}
</script>

<style>
.outer {
  box-sizing: border-box;
}

.content {
  max-width: 980px;
  margin: 0 auto;
}

.bc {
  margin-bottom: 40px;
}
</style>
