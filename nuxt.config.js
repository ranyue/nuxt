module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wechat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
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
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
    vendor: [
      'axios',
      'js-cookie',
      'element-ui',
      'mint-ui'
    ],
    babel: {
      plugins: [['component', [
        {
          libraryName: 'element-ui',
          styleLibraryName: 'theme-default'
        },
        {
          libraryName: 'mint-ui',
          style: true
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]]
    }
  },
  cache: true,
  css: [
    // { src: '~assets/css/sass-functions.scss', lang: 'scss' },
    // { src: '~assets/css/common.scss', lang: 'scss' },
    '~assets/css/a.css',
    'element-ui/lib/theme-default/index.css',
    'mint-ui/lib/style.min.css',
    'normalize.css/normalize.css'
  ],
  plugins: [
    { src: '~plugins/element-ui', ssr: false },
    { src: '~plugins/mint-ui', ssr: false }
  ],
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}
