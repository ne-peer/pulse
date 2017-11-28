<template>
  <div class="outer">
    <div class="content">
      <div class="nav">
        <Navbar/>
      </div>
      <!-- <div class="bc">
        <Breadcrumbs/>
      </div> -->
      <nuxt/>
    </div>
    <PulseFooter/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import PulseFooter from '~/components/PulseFooter.vue'

export default {
  components: {
    Navbar, Breadcrumbs, PulseFooter
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

.nav {
  margin-bottom: 40px;
}
</style>
