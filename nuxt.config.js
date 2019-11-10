
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Crimson+Pro|Maven+Pro&display=swap"
      }
    ]
  },
  manifest: {
    name: "Advantage Learn Wiki App",
    short_name: "A+ Wiki",
    icons: [
      {
        src: "/icons/icon-72x72.png",
        type: "image/png",
        sizes: "72x72"
      },
      {
        src: "/icons/icon-96x96.png",
        type: "image/png",
        sizes: "96x96"
      },
      {
        src: "/icons/icon-128x128.png",
        type: "image/png",
        sizes: "128x128"
      },
      {
        src: "/icons/icon-144x144.png",
        type: "image/png",
        sizes: "144x144"
      },
      {
        src: "/icons/icon-152x152.png",
        type: "image/png",
        sizes: "152x152"
      },
      {
        src: "/icons/icon-192x192.png",
        type: "image/png",
        sizes: "192x192"
      },
      {
        src: "/icons/icon-384x384.png",
        type: "image/png",
        sizes: "384x384"
      },
      {
        src: "/icons/icon-512x512.png",
        type: "image/png",
        sizes: "512x512"
      }
    ],
    "name": "Guy Buttery",
    "short_name": "Guy Buttery",
    "theme_color": "#d0bb73",
    "background_color": "#363636",
    "display": "browser",
    "scope": "/",
    "start_url": "/"
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: '741263916286111',
      disabled: false
    }],
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
    '@nuxtjs/pwa',

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
