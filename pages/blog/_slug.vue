<template>
  <section class="post">
    <header class="header">
    </header>

    <article class="section">
      <div class="headline">
        <h1>{{ currentPost.fields.title }}</h1>
        <span class="publish-date">
          {{ (new Date(currentPost.fields.publishDate)).getFullYear() }}年 
          {{ (new Date(currentPost.fields.publishDate)).getMonth() + 1 }}月 
          {{ (new Date(currentPost.fields.publishDate)).getDate() }}日
        </span>
      </div>

      <div class="pulse-border"></div>
      
      <vue-markdown class="content md-preview">{{ currentPost.fields.body }}</vue-markdown>

      <div class="container">
        <div class="columns">
          <div class="column hide-sm">
            <ul class="pagination">
              <li class="page-item page-next" style="text-align:left;">
                <nuxt-link v-if="nextPost" class="pagination-next page-nav" :to="nextPost.fields.slug">
                  <div class="page-item-subtitle">Next</div>
                  <div class="page-item-title h5">{{ nextPost.fields.title }}</div>
                </nuxt-link>
              </li>
              <li class="page-item page-prev" style="text-align:right;">
                <nuxt-link v-if="prevPost" class="pagination-previous page-nav" :to="prevPost.fields.slug">
                  <div class="page-item-subtitle">Previous</div>
                  <div class="page-item-title h5">{{ prevPost.fields.title }}</div>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="column show-sm">
            <ul class="pagination">
              <li class="page-item page-next" style="text-align:left;">
                <nuxt-link v-if="nextPost" class="pagination-next page-nav" :to="nextPost.fields.slug">
                  <div class="page-item-subtitle">Next</div>
                  <div class="page-item-title h6">次の記事</div>
                </nuxt-link>
              </li>
              <li class="page-item page-prev" style="text-align:right;">
                <nuxt-link v-if="prevPost" class="pagination-previous page-nav" :to="prevPost.fields.slug">
                  <div class="page-item-subtitle">Previous</div>
                  <div class="page-item-title h6">前の記事</div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
        title: 'Pulse Blog | ' + this.currentPost.fields.title,
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
}

.post .publish-date {
  color: #00ACAA;
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

.post .page-nav {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 12px;
}

.post .page-nav i {
  margin-top: -2px;
}
</style>
