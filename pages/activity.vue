<template>
  <section>
    <div class="divider text-center" data-content="ポートフォリオ" lang="ja"></div>
    <div class="section">
        <Portfolio/>
    </div>
    <div class="divider text-center" data-content="ソーシャル" lang="ja"></div>
    <div class="section">
        <Social/>
    </div>
  </section>
</template>

<script>
import Portfolio from '~/components/Portfolio.vue'
import Social from '~/components/Social.vue'

export default {
  components: {
    Portfolio, Social
  }
}
</script>

<style>
.section {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
