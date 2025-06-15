import { defineNuxtConfig } from 'nuxt/config'
import { nuxt } from '@storybook-vue/nuxt'

export default defineNuxtConfig({
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],
  addons: ['@storybook/addon-essentials'],
  extends: [nuxt()],
})
