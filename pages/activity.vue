<template>
  <div>
    <div class="divider text-center" data-content="コンテンツ" lang="ja"></div>
    <div class="section">
        <ContentsLink/>
    </div>
  </div>
</template>

<script>
import ContentsLink from '~/components/ContentsLink.vue'

export default {
  components: {
    ContentsLink
  }
}
</script>

<style>
.section {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
