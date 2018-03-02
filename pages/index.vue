<template>
  <section>
    <div class="ps-width-mi padd">
      <pulse-update-log></pulse-update-log>
    </div>
  </section>
</template>

<script>
import PulseUpdateLog from '~/components/PulseUpdateLog.vue'

export default {
  components: {
    PulseUpdateLog
  },
  head: {
    title: 'Pulse | Home'
  },
}
</script>

<style>
.padd {
  padding: 20px;
}
</style>
