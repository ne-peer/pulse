<template>
  <div class="outer">
    <div class="content">
      <navbar/>
      <div class="bc">
        <breadcrumbs/>
      </div>
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

export default {
  components: {
    Navbar, Breadcrumbs
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
