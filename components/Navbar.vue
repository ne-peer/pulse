<template>
  <header class="navbar">
    <section class="navbar-section">
     <nuxt-link tag="a" to="/" class="navbar-brand mr-2" lang="en">Pulse</nuxt-link>
    </section>
    <section class="navbar-section navlink">
      <div class="btn-group btn-group-block">
        <nuxt-link tag="button" to="/introduction" class="btn" lang="ja">自己紹介</nuxt-link>
        <nuxt-link tag="button" to="/activity" class="btn" lang="ja">活動</nuxt-link>
        <nuxt-link tag="button" to="/contact" class="btn" lang="ja">連絡先</nuxt-link>
      </div>
    </section>
    <section class="navbar-section"></section>
    <section class="navbar-section"></section>
  </header>
</template>

<style>
.navbar {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 18px;
  padding-right: 18px;
}

.btn-group-block button {
  width: 140px;
  font-size: 14px;
}
</style>
