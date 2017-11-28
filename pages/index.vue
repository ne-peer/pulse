<template>
  <section class="container">
    <div>
      <div class="logo">
        <logo/>
      </div>
      <div class="title-section">
        <p class="title">Pulse</p>
        <p class="subtitle">Portal site of Pulse.</p>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.logo {
  margin-bottom: 25px;
  width: 200px;
  margin: 0 auto;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 64px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.title-section {
  margin: 0 auto;
  margin-top: 40px;
  width: 700px;
}
</style>
