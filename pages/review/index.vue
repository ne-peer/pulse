<template>
  <section class="review">
    <div class="page-title">
      <h2>Review</h2>
      <div class="pulse-border"></div>
    </div>
    <div class="container">

      <div class="columns">
        <div class="col-4 col-md-6 col-sm-12" v-for="post in review">
          
          <!-- for Desktop -->
          <section class="desktop hide-sm">
            <nuxt-link tag="div" class="card" :to="{ name: 'review-slug', params: { slug: post.fields.slug }}">
              <div class="card-header">
                <div class="card-title h5">{{ shorter(post.fields.title) }}</div>
                <div class="card-subtitle text-gray">
                  {{ (new Date(post.fields.publishDate)).getFullYear() }}年 
                  {{ (new Date(post.fields.publishDate)).getMonth() + 1 }}月 
                  {{ (new Date(post.fields.publishDate)).getDate() }}日
                </div>
              </div>
              <div class="card-image">
                <div class="trim">
                  <img 
                    v-if="post.fields.heroImage.fields.file.url != undefined"
                    :src="post.fields.heroImage.fields.file.url"
                    class="img-responsive" alt="hero image">
                </div>
              </div>
              <div class="card-body">
                {{ post.fields.description }}
              </div>
              <div class="card-footer">
                Read More
              </div>
            </nuxt-link>
          </section>
          <!-- for smartphone -->
          <section class="smartphone show-sm">
            <nuxt-link tag="div" class="tile" :to="{ name: 'review-slug', params: { slug: post.fields.slug }}">
              <div class="tile-icon">
                <img 
                  v-if="post.fields.heroImage.fields.file.url != undefined"
                  :src="post.fields.heroImage.fields.file.url"
                  class="img-responsive" alt="hero image">
              </div>
              <div class="tile-content">
                <p class="tile-title">{{ post.fields.title }}</p>
                <p class="tile-subtitle text-gray">{{ post.fields.description }}</p>
              </div>
              <div class="tile-action">
                <button class="btn btn-primary">View</button>
              </div>
            </nuxt-link>
          </section>

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
    title: 'Pulse | レビュー'
  },
  data () {
    return {
      review: []
    }
  },
  asyncData ({ env }) {
    return client.getEntries({
      // fetch all blog review sorted by creation date
      'content_type': 'reviewPost', 
      order: '-fields.publishDate'
    }).then(entries => {
      return {
        review: entries.items
      }
    }).catch(console.error)
  },
  methods: {
    shorter(str) {
      if (str.length > 25) {
        return str.slice(0, 25) + '..';
      }
      return str;
    }
  }
}
</script>

<style>
.review {
  margin-left: 14px;
  margin-right: 14px;
}

.review .page-title {
  text-align:center;
}

.review .desktop .card {
  background-color: #f8f9fa;
  cursor: pointer;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: 8px;
}

.review .desktop .card .trim {
  width: auto;
  height: 250px;
  overflow: hidden;
  position: relative;
}

.review .desktop .card .trim img {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.review .desktop .card .card-body {
  height: 80px;
}

.review .desktop .card .card-footer {
  width: 100%;
  text-align: right;
  vertical-align: bottom;
  color: #00acaa;
}

.review .smartphone {
  background-color: #f8f9fa;
  border-radius: 2px;
}

.review .smartphone .tile {
  min-height: 110px;
  margin-bottom: 10px;
  padding: 5px;
}

.review .smartphone .tile-title {
  margin-bottom: 10px;
  padding-top: 5px;
}

.review .smartphone .tile-subtitle {
  font-size: 10px;
  line-height: 1.4;
  margin-bottom: 0px;
}

.review .smartphone .tile img {
  width: 100px;
  padding-top: 5px;
}
</style>