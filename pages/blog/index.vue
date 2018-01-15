<template>
  <section class="blog">

      <paginate name="blog" :list="blog" :per="1" tag="div">
        <div class="container">
          <div class="columns">
            <div class="column col-12" v-for="post in paginated('blog')">
              <nuxt-link tag="div" :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
                <div class="panel">
                  <div class="panel-body">
                    <h4>{{ post.fields.title }}</h4>
                    <div class="description text-gray">{{ post.fields.description }}</div>
                    <div class="action">Read More</div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </paginate>
      
      <paginate-links
        @change="onLangsPageChange"
        for="blog"
        :show-step-links="true"
        :step-links="{
          next: 'Next',
          prev: 'Prev'
        }"
        :classes="{
          'ul': 'pagination',
          'li': 'page-item',
          '.next > a': 'next-link',
          '.prev > a': ['prev-link', 'another-class']
        }"
      ></paginate-links>
      
  </section>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  head: {
    title: 'Pulse | 日記'
  },
  data () {
    return {
      blog: [],
      paginate: ['blog']
    }
  },
  asyncData ({ env }) {
    return client.getEntries({
      // fetch all blog blog sorted by creation date
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishDate'
    }).then(entries => {
      return {
        blog: entries.items
      }
    }).catch(console.error)
  },
  methods: {
    // ページング
    onLangsPageChange (toPage, fromPage) {
      if (this.$refs.paginator) {
        this.$refs.paginator.goToPage(toPage)
      }
    }
  }
}
</script>

<style>
.blog {
  margin-left: 14px;
  margin-right: 14px;
}

.blog .panel {
  margin-bottom: 10px;
  padding: 20px;
  cursor: pointer;
}

.blog .description {
  letter-spacing: 2px;
  text-align: justify;
}

.blog .action {
  margin-top: 10px;
  text-align: right;
  color: #009391;
}

.blog .page-item {
  cursor: pointer;
}
</style>