module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pulse Portal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portal site of Pulse.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '~assets/css/pulse.scss', lang: 'scss' },
    // 'node_modules/spectre.css/dist/spectre.min.css',
    'node_modules/spectre.css/dist/spectre-exp.min.css',
    'node_modules/spectre.css/dist/spectre-icons.min.css',
    'assets/main.css'
  ],
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
  }
}
