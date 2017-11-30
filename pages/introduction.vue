<template>
  <section class="introduction">
    <div class="divider text-center" data-content="プロフィール"></div>
    <div class="section">
      <Profile/>
    </div>
    <div class="divider text-center" data-content="経歴"></div>
    <div class="section">
      <Career/>
    </div>
    <div class="divider text-center" data-content="スキル"></div>
    <div class="section">
      <Skill/>
    </div>
  </section>
</template>

<script>
import Profile from '~/components/Profile.vue'
import Career from '~/components/Career.vue'
import Skill from '~/components/Skill.vue'

export default {
  components: {
    Career, Skill, Profile
  }
}
</script>

<style>
.introduction .section {
  margin-top: 40px;
  margin-bottom: 110px;
}
</style>
