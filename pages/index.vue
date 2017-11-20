<template>
  <section class="container">
    <div>
      <div class="logo">
        <logo/>
      </div>
      <div>
        <h1 class="title">
          Pulse
        </h1>
        <h2 class="subtitle">
          Portal site of Pulse.
        </h2>
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 42px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 16px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
