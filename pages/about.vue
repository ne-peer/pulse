<template>
  <section class="introduction">
    <div class="divider text-center" data-content="プロフィール"></div>
    <div class="section">
      <Profile/>
      <Skill/>
    </div>
    <div class="divider text-center" data-content="経歴"></div>
    <div class="section">
      <Career/>
    </div>
    <div class="divider text-center" data-content="過去に作ったもの" lang="ja"></div>
    <div class="section">
        <PortfolioPrivate/>
    </div>
    <div class="divider text-center" data-content="SNS" lang="ja"></div>
    <div class="section">
        <Social/>
    </div>
  </section>
</template>

<script>
import Profile from '~/components/Profile.vue'
import Career from '~/components/Career.vue'
import Skill from '~/components/Skill.vue'
import PortfolioPrivate from '~/components/PortfolioPrivate.vue'
import Social from '~/components/Social.vue'

export default {
  components: {
    Career, Skill, Profile, PortfolioPrivate, Social
  }
}
</script>

<style>
.introduction .section {
  margin-top: 40px;
  margin-bottom: 80px;
}
</style>
