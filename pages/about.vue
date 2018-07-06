<template>
  <section class="introduction ps-width">
    <div class="divider text-center" data-content="プロフィール"></div>
    <div class="section">
      <pulse-profile></pulse-profile>
      <pulse-skill></pulse-skill>
    </div>
    <div class="divider text-center" data-content="過去に作ったもの" lang="ja"></div>
    <div class="section">
      <pulse-portfolio></pulse-portfolio>
    </div>
  </section>
</template>

<script>
import PulseProfile from '~/components/PulseProfile.vue'
import PulseSkill from '~/components/PulseSkill.vue'
import PulsePortfolio from '~/components/PulsePortfolio.vue'

export default {
  components: {
    PulseSkill, PulseProfile, PulsePortfolio
  },
  head: {
    title: 'Pulse | About'
  },
}
</script>

<style scoped>
.introduction .section {
  margin-top: 40px;
  margin-bottom: 80px;
}
</style>
