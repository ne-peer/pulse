<template>
  <section class="padding">
    <div class="ps-width">
      <h3 class="en-font">Contents</h3>
      <div class="ps-width">
        <pulse-content-list></pulse-content-list>
      </div>
    </div>

    <div class="ps-width">
      <div class="divider text-center"></div>
    </div>

    <div class="ps-width">
      <h3 class="en-font">Site Updates</h3>
      <div class="meta desc">
        <p>このサイトにおける大きなコンテンツ内容の変更についてのチェンジログです。思いつきで弄って遊んでいます。</p>
      </div>
      <div class="ps-width-mi">
        <pulse-update-log></pulse-update-log>
      </div>
    </div>
  </section>
</template>

<script>
import PulseUpdateLog from '~/components/PulseUpdateLog.vue'
import PulseContentList from '~/components/PulseContentList.vue'

export default {
  components: {
    PulseUpdateLog, PulseContentList
  },
  head: {
    title: 'Pulse | Home'
  },
}
</script>

<style>
.padding {
  padding: 14px;
}

.divider {
  margin: 70px 0px 70px 0px;
}

.desc {
  padding: 0px 12px 0px 12px;
}

h3 {
  font-weight: lighter;
  font-size: 36px;
}
</style>
