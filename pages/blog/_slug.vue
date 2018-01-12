<template>
  <section class="post">
    <header class="header">
    </header>

    <article class="section">
      <div class="headline">
        <h1 class="title has-text-centered">{{ currentPost.fields.title }}</h1>
        <p class="headline__date has-text-right">{{ ( new Date(currentPost.fields.publishDate)).toDateString() }}</p>
      </div>
      
      <vue-markdown class="content md-preview">{{ currentPost.fields.body }}</vue-markdown>

      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <div class="container">
          <div class="columns col-oneline">
            <div class="column col-6">
              <nuxt-link v-if="prevPost" class="pagination-previous" :to="prevPost.fields.slug">&laquo; {{ prevPost.fields.title }}</nuxt-link>
            </div>
            <div class="column col-6" style="text-align:right;">
              <nuxt-link v-if="nextPost" class="pagination-next" :to="nextPost.fields.slug">{{ nextPost.fields.title }} &raquo;</nuxt-link>
            </div>
          </div>
        </div>
      </nav>

    </article>

  </section>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()
  export default {
    head () {
      return {
        title: this.currentPost.fields.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.currentPost.fields.description
          }
        ]
      }
    },
    data () {
      return {
        allPosts: [],
        currentPost: []
      }
    },
    components: {
      VueMarkdown
    },
    asyncData ({ env, params }) {
      return client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.publishDate'
      }).then(entries => {
        const posts = entries.items
        const current = posts.filter(function (item) {
          return item.fields.slug === params.slug
        })
        return {
          allPosts: posts,
          currentPost: current[0]
        }
      }).catch(console.error)
    },
    computed: {
      dateOrder: function () {
        for (let i = 0; i < this.allPosts.length; i++) {
          if (this.allPosts[i].fields.publishDate === this.currentPost.fields.publishDate) {
            return i
          }
        }
      },
      nextPost: function () {
        if (this.dateOrder === 0) {
          return false
        } else {
          return this.allPosts[this.dateOrder - 1]
        }
      },
      prevPost: function () {
        if (this.dateOrder === this.allPosts.length - 1) {
          return false
        } else {
          return this.allPosts[this.dateOrder + 1]
        }
      }
    }
  }
</script>

<style>
.post {
  max-width: 740px;
  margin: 0 auto;
  letter-spacing: 1.5px;
}

.post .headline {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 1.5rem;
}

.post .headline__date {
  font-size: .8rem;
}

.post .content {
  padding-left: 20px;
  padding-right: 20px;
}

.post .pagination {
  margin-top: 50px;
}

.post a {
  font-weight: bold;
}

.post pre {
  background-color: #374549;
  padding: 14px;
  border-radius: 4px;
  letter-spacing: normal;
  overflow: auto;
  font-size: 14px;
  line-height: 20px;
}

.post pre code {
  color: #eeeeee;
  background: transparent;
}
</style>