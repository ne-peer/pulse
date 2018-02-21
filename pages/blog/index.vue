<template>
  <section class="blog">
    <div class="parallax">
      <div class="parallax-content">
        <div class="parallax-front">
          <h2>Blog</h2>
        </div>
        <div class="parallax-back">
          <img src="~static/bheader.jpg" class="img-responsive rounded" height="400">
        </div>
      </div>
    </div>
    
    <div class="pulse-border"></div>
    
    <div id="contents" class="contents">
      <paginate-links v-scroll-to="{ element: '.outer' }" @change="onLangsPageChange" for="blog" :show-step-links="true"
        :step-links="{ next: 'Next', prev: 'Prev' }" :classes="{ 'ul': 'pagination', 'li': 'page-item', '.next > a': 'next-link', '.prev > a': 'prev-link' }"
      ></paginate-links>
      <paginate name="blog" :list="blog" :per="6" tag="div">
        <div class="container">
          <div class="timeline">
            <div class="columns" v-for="post in paginated('blog')">
              <div class="column col-2 col-lg-3 col-md-12 timeline-item">
                <div class="timeline-left">
                  <a class="timeline-icon"></a>
                </div>
                <div class="timeline-content text-gray">
                  # {{ (new Date(post.fields.publishDate)).getFullYear() }}.{{ (new Date(post.fields.publishDate)).getMonth() + 1 }}.{{ (new Date(post.fields.publishDate)).getDate() }}
                </div>
              </div>
              <nuxt-link class="column col-9 col-md-12" tag="div" :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}">
                <div class="panel">
                  <div class="panel-header">
                  </div>
                  <div class="panel-body">
                    <div class="container">
                      <div class="columns">
                        <div class="column show-sm photo img-center singlecolumn-img">
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
      
      <paginate-links v-scroll-to="{ element: '#contents' }" @change="onLangsPageChange()" for="blog" :show-step-links="true"
        :step-links="{ next: 'Next', prev: 'Prev' }" :classes="{ 'ul': 'pagination', 'li': 'page-item', '.next > a': 'next-link', '.prev > a': 'prev-link' }"
      ></paginate-links>
    </div>
  </section>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  head() {
    return {
      title: 'Pulse | 日記',
      meta: [
        { hid: 'description', name: 'description', content: '他愛のない話' },
        { hid: 'og:description', name: 'og:description', content: '他愛のない話' }
      ]
    }
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

<style scoped>
.blog {
  max-width: 1090px;
  margin: 0 auto;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 20px;
}

.contents {
  margin-top: 20px;
}

.panel {
  margin-bottom: 30px;
  padding: 2%;
  cursor: pointer;
}

.parallax {
  max-height: 400px;
}

.panel-header {
  margin-bottom: -22px;
}

.panel-body {
  padding-top: 8px;
  overflow-y: hidden;
}

.publish-date {
  color: #777777;
  font-size: 14px;
  padding-bottom: 10px;
}

.description {
  letter-spacing: 2px;
}

.action {
  text-align: right;
  color: #009391;
}

.page-item {
  cursor: pointer;
}

.photo {
  max-width: 192px;
}

.img-center {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}

.singlecolumn-img {
  padding-bottom: 10px;
}

.timeline-content {
  font-size: 22px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}

ul, li {
  cursor: pointer;
}
</style>