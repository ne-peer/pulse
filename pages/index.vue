<template>
  <section class="index">
    <div>
      <div class="logo">
        <logo/>
      </div>
      <div class="main container">
        <div class="columns">
          <div class="column col-8 col-mx-auto">
            <p class="title">Pulse</p>
            <p class="subtitle">Portal site of Pulse.</p>
          </div>
        </div>
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
section.index .logo {
  margin-bottom: 25px;
  width: 200px;
  margin: 0 auto;
}

section.index .title {
  display: block;
  font-weight: 300;
  font-size: 64px;
  color: #35495e;
  letter-spacing: 1px;
}

section.index .subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
