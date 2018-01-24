<template>
  <div id="outer" class="outer">
    <script src="https://use.fontawesome.com/f8cbf6b46f.js"></script>
    <div class="content">
      <div class="nav" v-bind:class="{ 'nav-style-fixer': souldFix }">
        <Navbar/>
      </div>
      <div class="main-contents">
        <nuxt/>
      </div>
    </div>
    <PulseFooter/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import PulseFooter from '~/components/PulseFooter.vue'

export default {
  components: {
    Navbar, PulseFooter
  },
  data() {
    return {
      souldFix: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 5) {
        this.souldFix = true;
      } else {
        this.souldFix = false;
      }
    }
  }
}
</script>

<style>
.outer {
  box-sizing: border-box;
}

.content {
  max-width: 980px;
  margin: 0 auto;
}

.bc {
  margin-bottom: 40px;
}

.nav {
  margin-bottom: 40px;

  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 5px;
  z-index: 100;
  background-color: rgba(255,255,255,0.85);
}

.nav-style-fixer {
  top: 0px;
  padding-top: 5px;
}

.main-contents {
  min-height: 750px;
}
</style>
