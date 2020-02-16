'use strict'

const resolve = require('path').resolve 
// const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */

  modules: [
    '@nuxtjs/axios'

    // With options
    // ['vue-scrollto/nuxt', { duration: 300 }],

  ],

  axios: {
      baseURL: 'http://dental.kollol.me' 
                            
  },
  // build: { 
    // mdsadek1 Juan_goFlank@360
  //   plugins: [
  //     new webpack.ProvidePlugin({\

  //       '_': 'lodash'
  //       // ...etc.
  //     })
  //   ]
  // },
  plugins: [
    '~plugins/vuecommon',
    '~plugins/ivuew',
    { src: '~/plugins/vue-masonry', ssr: false },
    { src: '~/plugins/quill', ssr: false }
  ],
  head: {
    title: 'Authentic Dental Studio',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      },

      { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,300i,400,400i,600,600i,700,700i,900&display=swap' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/common.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/vue', body: true },
      { src: 'https://code.jquery.com/jquery-3.4.0.min.js', body: true },
      { src: '/js/owl.carousel.min.js', body: true },
      { src: '/js/script.js', body: true },
      { src: 'https://cdn.jsdelivr.net/npm/vue-scrollto', body: true },
    ]
    

  },
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'orange' },
  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources')
}
