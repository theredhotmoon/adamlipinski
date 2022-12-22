import FilterWarningsPlugin from 'webpack-filter-warnings-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import { theme } from './config/vuetify.options'
import languages from './static/lang/languages'
import brand from './static/text/brand'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      dir: 'ltr'
    },
    title: brand.education.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: brand.education.desc },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
      // PWA primary color
      { name: 'theme-color', content: theme.primary},
      // Facebook
      { property: 'author', content: 'luxi' },
      { property: 'og:site_name', content: 'luxi.ux-maestro.com' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      // Twitter
      { property: 'twitter:site', content: 'luxi.ux-maestro.com' },
      { property: 'twitter:domain', content: 'luxi.ux-maestro.com' },
      { property: 'twitter:creator', content: 'luxi' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:image:src', content: '/images/logo.png' },
      { property: 'og:url', content: brand.education.url },
      { property: 'og:title', content: brand.education.projectName },
      { property: 'og:description', content: brand.education.desc },
      { name: 'twitter:site', content: brand.education.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: brand.education.img },
      { property: 'og:image', content: brand.education.img },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
    link: [
      // Favicon
      { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      // Fonts and Icons
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: theme.primary },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/transition.scss',
    '~/assets/vuetify-overide.scss',
    '~/assets/vendors/animate.css',
    '~/assets/vendors/animate-extends.css',
    '~/assets/vendors/hamburger-menu.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/slick-carousel/slick-theme.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-wow-config',
    '~/plugins/vue-fragment-config',
    { src: '~/plugins/countup-config', ssr: false },
    { src: '~/plugins/vue-youtube-config', ssr: false },
    { src: '~plugins/i18n-config.js' },
    { src: '~/plugins/caroussel-config', ssr: false },
    { src: '~/plugins/vue-scroll-nav', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  target: 'static',
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/router',
    '@nuxtjs/axios',
    ['@nuxtjs/html-minifier', { log: 'once', logHtml: true }],
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          xsDown: 599,
          xsUp: 600,
          smDown: 959,
          smUp: 960,
          mdDown: 1279,
          mdUp: 1280,
          lgDown: 1919,
          lgUp: 1920,
          xl: Infinity
        }
      }
    ],
    ['nuxt-gmaps', { key: '' }],
    '@nuxtjs/i18n',
  ],
  axios: {
    headers : {
      common: {
        'Authorization' : 'Bearer 31f306eea70571c309840600c9f88cf34b53af640ebcfd6965cac07b755b2167f0d01e39cc07085f1247d91572c31ea5fcd06402e6fd95d05a67091f466730f6bfe699265209e3bb0cc74fd8945a4f90ed97259dd9cb37130ffb6b5d2ee8487a77cb6cba174e67c9d22a7ef4dbcdeaaf5c7f2cfd9e8b15279ead6162f191ea57'
      }
    },
    // baseURL: 'http://localhost:1337', // Used as fallback if no runtime config is provided
  },
  i18n: {
    locales: languages,
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    redirectCookieKey: 'redirected',
    useRedirectCookie: true,
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true
    },
    langDir: 'static/lang/'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js'
  },
  /*
  ** Render configuration
  */
  render: {
    bundleRenderer: {
      directives: {
        shouldPreload: (file, type) => {
          return ['script', 'style', 'font'].includes(type)
        },
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // cssSourceMap: false,
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false }
    },
    extend (config, ctx) {
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: [/Critical dependency: the request of a dependency is an expression/, /Emitted value instead of an instance of Error/]
        })
      );
      //      if (ctx.isDev && ctx.isClient) {
      //        config.plugins.push(
      //          new ESLintPlugin({
      //            extensions: ["js", "vue"],
      //            exclude: ["node_modules", "static"],
      //            fix: false
      //          })
      //        );
      //      }
    }
  },
  /*
  ** Page Layout transition
  */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  /*
  ** Application Port
  */
  server: {
    port: 8011, // default: 3000
  }
}
