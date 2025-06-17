<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto flex justify-between items-center p-4">
      <slot name="brand">
        <NuxtLink to="/" class="font-bold text-xl">Nudger</NuxtLink>
      </slot>
      <ul class="flex space-x-4 text-sm text-gray-700" v-if="links?.length">
        <li v-for="link in links" :key="link.href">
          <NuxtLink :to="link.href" class="hover:underline">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
export interface NavLink {
  text: string
  href: string
}

const _props = defineProps<{ links?: NavLink[] }>()
</script>
