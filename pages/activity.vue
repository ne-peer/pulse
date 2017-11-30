<template>
  <div>
    <div class="divider text-center" data-content="ポートフォリオ" lang="ja"></div>
    <div class="section">
        <Portfolio/>
    </div>
  </div>
</template>

<script>
import Portfolio from '~/components/Portfolio.vue'

export default {
  components: {
    Portfolio
  }
}
</script>

<style>
.section {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
