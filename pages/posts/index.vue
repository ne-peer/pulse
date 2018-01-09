<template>
  <section class="posts">
    <div class="container">

      <div class="columns">
        <div class="col-4 col-md-6 col-sm-12" v-for="post in posts">
          <nuxt-link tag="div" :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}" class="card">
            <div class="card-header">
              <div class="card-title h5">{{ post.fields.title }}</div>
              <div class="card-subtitle text-gray">{{ ( new Date(post.fields.publishDate)).toDateString() }}</div>
            </div>
            <div class="card-image">
              <img 
                v-if="post.fields.heroImage.fields.file.url != undefined"
                :src="post.fields.heroImage.fields.file.url"
                class="img-responsive" alt="hero image">
            </div>
            <div class="card-body">
              {{ post.fields.description }}
            </div>
            <div class="card-footer">
              <p>Read More</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()
export default {
  head: {
    title: 'Post'
  },
  data () {
    return {
      posts: []
    }
  },
  asyncData ({ env }) {
    return client.getEntries({
      // fetch all blog posts sorted by creation date
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishDate'
    }).then(entries => {
      return {
        posts: entries.items
      }
    }).catch(console.error)
  }
}
</script>

<style>
.posts {
  margin-left: 14px;
  margin-right: 14px;
}

.posts .card {
  /* position:relative; */
  /* height: 250px; */
  background-color: #f8f9fa;
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 8px;
}

.posts .card .card-footer {
  /* position:absolute;
  bottom: -18px; */
  width: 100%;
  text-align: right;
  vertical-align: bottom;
  color: #00acaa;
}
</style>