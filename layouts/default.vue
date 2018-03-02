<template>
  <div id="outer" class="outer">
    <script src="https://use.fontawesome.com/f8cbf6b46f.js"></script>
    <div class="content">
      <div class="nav">
        <the-navbar></the-navbar>
      </div>
      <div class="main-contents">
        <nuxt/>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheNavbar, TheFooter
  }
}
</script>

<style scoped>
.nav {
  max-width: 980px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.main-contents {
  min-height: 750px;
  font-family: PT Sans,Helvetica Neue,Arial,Hiragino Kaku Gothic Pro,Meiryo,MS PGothic,sans-serif;
}
</style>
