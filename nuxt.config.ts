export default defineNuxtConfig({
  ssr: true,
  telemetry: false,
  srcDir: 'src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
// TODO : have to configure in order to make SSR build work (pobably strapi url's called at build time)
//    '@nuxtjs/strapi',
    '@nuxtjs/seo',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
    process.env.NODE_ENV !== 'production' && '@nuxt/devtools',
    process.env.NODE_ENV !== 'production' && '@nuxtjs/storybook',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ].filter(Boolean),
  devtools: {
    enabled: process.env.NODE_ENV !== 'production'
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default'
  },
  runtimeConfig: {
    strapiToken: process.env.STRAPI_TOKEN,
    public: {
      strapiUrl: process.env.STRAPI_URL || 'http://localhost:1337',
      plausibleDomain: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nudger',
      short_name: 'Nudger',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/nudger-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },
  vite: {
    workerThreads: true,
    cacheDir: '.nuxt/.vite-cache',
    ssr: {
      noExternal: ['vue-lazy-hydration', '@nuxt/ui']
    },
    resolve: {
      alias: {
        vue: 'vue/dist/vue.runtime.esm-bundler.js'
      }
    }
  },
  experimental: {
    inlineSSRStyles: true
  },
  vite: {
    logLevel: 'info', // ou 'debug' si besoin
  },
  nitro: {
    logLevel: 3
  }

})
