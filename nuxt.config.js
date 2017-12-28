const config = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pulse Freelance',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'site_name', content: 'Pulse Freelance' },
      { name: 'keywords', content: 'Pulse,パルス,フリーランス' },
      { name: 'description', content: 'フリーランス Pulse のポートフォリオサイトです。' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Pulse Freelance' },
      { name: 'og:title', content: 'Pulse Freelance' },
      { name: 'og:description', content: 'フリーランス Pulse のポートフォリオサイトです。' }
      // { name: 'og:url', content: 'https://example.com' },
      // { name: 'og:image', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', hrefrang: 'ja', href: 'https://example.com' }
    ]
  },
  css: [
    { src: '~assets/css/pulse.scss', lang: 'scss' },
    // 'node_modules/spectre.css/dist/spectre.min.css',
    'node_modules/spectre.css/dist/spectre-exp.min.css',
    'node_modules/spectre.css/dist/spectre-icons.min.css',
    'assets/main.css'
  ],
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~plugins/contentful']
}
