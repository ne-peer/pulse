<template>
  <header class="navbar">
    <div class="navbar-section">
     <nuxt-link tag="a" to="/" class="navbar-brand mr-2" lang="en">Pulse</nuxt-link>
    </div>
    <div class="navbar-section navlink">
      <div class="btn-group btn-group-block">
        
        <div class="container grid-lg">
          <div class="columns">
                <nuxt-link tag="button" to="/introduction" class="btn">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span class="hide-md">About</span>
                </nuxt-link>
                <nuxt-link tag="button" to="/activity" class="btn">
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <span class="hide-md">Portfolio</span>
                </nuxt-link>
                <nuxt-link tag="button" to="/contact" class="btn">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  <span class="hide-md">Contact</span>
                </nuxt-link>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<style>
header.navbar {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 18px;
  padding-right: 18px;
}

header .btn-group-block button {
  width: 140px;
  font-size: 14px;
}

header i {
  font-size: 12px;
}

header button span {
  margin-left: 12px;
}
</style>
