<template>
  <section>
    <div class="divider text-center" data-content="経歴" lang="ja"></div>
    <div class="section">
      <Career/>
    </div>
    <div class="divider text-center" data-content="技能" lang="ja"></div>
    <div class="section">
      <Skill/>
    </div>
  </section>
</template>

<script>
import Career from '~/components/Career.vue'
import Skill from '~/components/Skill.vue'

export default {
  components: {
    Career, Skill
  }
}
</script>

<style>
.section {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
