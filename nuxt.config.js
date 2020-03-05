import dotenv from 'dotenv'

dotenv.config()

export default {
    mode: 'universal',

    /*
     * Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://use.fontawesome.com/releases/v5.12.1/css/all.css',
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Staatliches',
          }
        ],
    },

    /*
     * Customize the progress-bar color
     */
    loading: { color: '#FFF' },

    /*
     * Global CSS
     */
    css: [
        '@/assets/css/reset.css',
        '@/assets/css/app.css',
        '@/assets/css/transitions.css'
    ],

    /*
     * Plugins to load before mounting the App
     */
    plugins: [],

    /*
     * Nuxt.js dev-modules
     */
    buildModules: [],

    /*
     * Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
    ],

    /*
     * Axios module configuration
     * See https://axios.nuxtjs.org/options
     */
    axios: {},

    /*
     * Server Middleware
     */
    serverMiddleware: [
        '@/server/middleware.js',
    ],

    /*
    ** Server configuration
    */
    server: {
        port: process.env.PORT, // default: 3000
        host: process.env.HOST, // default: localhost
    },

    /*
     * Build configuration
     */
    build: {

        /*
         * You can extend webpack config here
         */
        extend(config, ctx)
        {
        },
    },
}
