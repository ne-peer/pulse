<template>
  <section class="blog">
    <div class="page-title">
      <h2>Blog</h2>
      <div class="pulse-border"></div>
    </div>
      <paginate name="blog" :list="blog" :per="6" tag="div">
        <div class="container">
          <div class="columns">
            <div class="column col-12" v-for="post in paginated('blog')">
              <nuxt-link tag="div" :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
                <div class="panel">
                  <div class="panel-header">
                    <div class="publish-date">
                      {{ (new Date(post.fields.publishDate)).getFullYear() }}年 
                      {{ (new Date(post.fields.publishDate)).getMonth() + 1 }}月 
                      {{ (new Date(post.fields.publishDate)).getDay() }}日
                    </div>
                  </div>
                  <div class="panel-body">
                    <div class="container">
                      <div class="columns">
                        <div class="column show-sm photo img-center">
                          <img
                            v-if="post.fields.heroImage"
                            class="img-responsive"
                            alt="heading photo"
                            :src="post.fields.heroImage.fields.file.url">
                        </div>
                      </div>

                      <template v-if="post.fields.heroImage">
                        <!-- 見出し画像あり -->
                        <div class="columns">
                          <div class="column col-18 col-sm-12 description">
                            <h4>{{ post.fields.title }}</h4>
                            <div class="description text-gray">{{ post.fields.description }}</div>
                          </div>
                          <div class="column col-4 hide-sm photo">
                            <img
                              v-if="post.fields.heroImage"
                              class="img-responsive"
                              alt="heading photo"
                              :src="post.fields.heroImage.fields.file.url">
                          </div>
                        </div>
                      </template>
                      <template v-else>
                        <!-- 見出し画像なし -->
                        <div class="columns">
                          <div class="column col-12 description">
                            <h4>{{ post.fields.title }}</h4>
                            <div class="description text-gray">{{ post.fields.description }}</div>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>
                  <div class="panel-footer">
                    <div class="action">Read More</div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </paginate>
      
      <paginate-links
        v-scroll-to="{ element: '.outer' }"
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
          '.prev > a': 'prev-link'
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
  max-width: 728px;
  margin: 0 auto;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 20px;
}

.blog .page-title {
  text-align:center;
}

.blog .panel {
  margin-bottom: 10px;
  padding: 2%;
  cursor: pointer;
}

.blog .panel-header {
  margin-bottom: -22px;
}

.blog .panel-body {
  padding-top: 8px;
}

.blog .publish-date {
  color: #777777;
  font-size: 14px;
  padding-bottom: 10px;
}

.blog .description {
  letter-spacing: 2px;
}

.blog .action {
  text-align: right;
  color: #009391;
}

.blog .page-item {
  cursor: pointer;
}

.blog .photo {
  max-width: 192px;
}

.blog .img-center {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
</style>