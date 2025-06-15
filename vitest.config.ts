import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#app': fileURLToPath(new URL('./node_modules/nuxt/dist/app', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom'
  }
})
