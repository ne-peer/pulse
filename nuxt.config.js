const config = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pulse',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'site_name', content: 'Pulse' },
      { name: 'keywords', content: 'Pulse,ne-peer,レビュー' },
      { name: 'description', content: '@ne-peerの個人的なサイトです。日記、ガジェットのレビュー、ポートフォリオなど。' },
      { name: 'image', content: 'https://ne-peer.ams3.digitaloceanspaces.com/resource/personal-icon.png' },
      { name: 'google-site-verification', content: 'iGhRc61DwuR7ZSRhxXiZe9PT10azGlsZ51_OtyVzXbE' },
      { name: 'og:type', content: 'website' },
      { name: 'og:site_name', content: 'Pulse' },
      { name: 'og:title', content: 'Pulse' },
      { name: 'og:description', content: '@ne-peerの個人的なサイトです。日記、ガジェットのレビュー、ポートフォリオなど。' },
      { name: 'og:url', content: 'https://ne-peer.xyz' },
      { name: 'og:image', content: 'https://ne-peer.ams3.digitaloceanspaces.com/resource/personal-icon.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', hrefrang: 'ja', href: 'https://ne-peer.xyz' }
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
          test: /\.(js)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~plugins/contentful',
    '~plugins/paginate',
    '~plugins/scrollto'
  ],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-80675437-3'
    }],
    ['@nuxtjs/sitemap', {
      path: '/sitemap.xml',
      hostname: 'https://ne-peer.com',
      generate: true,
      routes: [
        // 自動生成されないためダイナミックルートを手動で定義する
        '/review/happy-hacking-keyboard-bt',
        '/review/amsterdam-pc-bag',
        '/review/iphone-x-review',
        '/review/bookarc',
        '/review/essential-phone-ph1',
        '/review/supernote-a5-review'
      ]
    }]
  ]
}
