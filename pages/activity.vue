<template>
  <section class="activity">
    <div class="divider text-center" data-content="個人的に作ったもの" lang="ja"></div>
    <div class="section">
        <PortfolioPrivate/>
    </div>
    <div class="divider text-center" data-content="ソーシャル" lang="ja"></div>
    <div class="section">
        <Social/>
    </div>
  </section>
</template>

<script>
import PortfolioPrivate from '~/components/PortfolioPrivate.vue'
import Social from '~/components/Social.vue'

export default {
  components: {
    PortfolioPrivate, Social
  }
}
</script>

<style>
.activity .section {
  margin-top: 40px;
  margin-bottom: 200px;
}
</style>
