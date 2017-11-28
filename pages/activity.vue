<template>
  <div>
    <div class="divider text-center" data-content="contents"></div>
    <div>
      <ContentsLink/>
    </div>
  </div>
</template>

<script>
import ContentsLink from '~/components/ContentsLink.vue'

export default {
  components: {
    ContentsLink
  }
}
</script>
