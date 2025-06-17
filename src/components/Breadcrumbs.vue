<template>
  <nav class="text-sm text-gray-500" aria-label="Breadcrumb" v-if="items?.length">
    <ol class="flex space-x-1">
      <li v-for="(item, idx) in items" :key="item.href" class="flex items-center">
        <NuxtLink :to="item.href" class="hover:underline">{{ item.text }}</NuxtLink>
        <span v-if="idx < items.length - 1" class="px-2">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
export interface CrumbItem {
  text: string
  href: string
}

const _props = defineProps<{ items?: CrumbItem[] }>()
</script>
