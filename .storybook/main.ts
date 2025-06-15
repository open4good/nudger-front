import { defineNuxtConfig } from 'nuxt/config'
import { nuxt } from '@storybook-vue/nuxt'

// Storybook's Vue preset expects a browser-like global `window` object even
// when executed in Node during Nuxt's module initialization. Creating a stub
// avoids `STORYBOOK_ENV` assignment errors when starting the dev server.
const g = globalThis as unknown as { window?: unknown }
if (typeof g.window === 'undefined') {
  g.window = g
}

export default defineNuxtConfig({
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],
  addons: ['@storybook/addon-essentials'],
  extends: [nuxt()],
})
