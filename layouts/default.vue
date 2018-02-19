<template>
  <div id="outer" class="outer">
    <script src="https://use.fontawesome.com/f8cbf6b46f.js"></script>
    <div class="content">
      <div class="nav">
        <Navbar/>
      </div>
      <div class="main-contents">
        <nuxt/>
      </div>
    </div>
    <PulseFooter/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import PulseFooter from '~/components/PulseFooter.vue'

export default {
  components: {
    Navbar, PulseFooter
  }
}
</script>

<style scoped>
.content {
  max-width: 980px;
  margin: 0 auto;
}

.nav {
  margin-bottom: 40px;
}

.main-contents {
  min-height: 750px;
  font-family: PT Sans,Helvetica Neue,Arial,Hiragino Kaku Gothic Pro,Meiryo,MS PGothic,sans-serif;
}
</style>
