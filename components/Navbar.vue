<template>
  <header class="navbar">
    <div class="navbar-section">
     <nuxt-link tag="a" to="/blog" class="navbar-brand mr-2" lang="en">Pulse</nuxt-link>
    </div>
    <div class="navbar-section navlink">
      <div class="btn-group btn-group-block">
        <div class="container grid-lg">
          <div class="columns">
            <nuxt-link tag="button" to="/blog" class="btn">
              <i class="fa fa-bookmark" aria-hidden="true"></i>
              <span class="hide-sm">Blog</span>
            </nuxt-link>

            <nuxt-link tag="button" to="/review" class="btn">
              <i class="fa fa-dollar" aria-hidden="true"></i>
              <span class="hide-sm">Reviews</span>
            </nuxt-link>

            <nuxt-link tag="button" to="/about" class="btn">
              <i class="fa fa-user" aria-hidden="true"></i>
              <span class="hide-sm">About</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.navbar {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 18px;
  padding-right: 18px;
}

.navbar .navbar-brand {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 400;
  letter-spacing: 4px;
}

.navbar .btn:hover,
.navbar .btn:focus {
  color: #ffffff;
}

.btn-group-block button {
  width: 140px;
  font-size: 14px;
}

.navbar i {
  font-size: 12px;
}

.navbar button span {
  margin-left: 12px;
}
</style>
