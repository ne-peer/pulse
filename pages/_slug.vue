<template>
  <section>
    <component :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
    <script src="//app.storyblok.com/f/storyblok-latest.js?t=YOUR_DRAFT_TOKEN" type="text/javascript"></script>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      story: {
        content: {
          body: []
        }
      },
      draft: false
    }
  },
  asyncData (context) {
    let version = 'published'

    if (context.isDev) {
      version = 'draft'
    }

    return axios.get(`https://api.storyblok.com/v1/cdn/stories/${context.params.slug}?version=${version}&token=${process.env.storyblok.token}`)
      .then((result) => {
        return { story: result.data.story, draft: context.isDev }
      })
      .catch((error) => {
        context.error({ statusCode: 404, message: 'Page not found' + (context.isDev ? error : '') })
      })
  }
}
</script>