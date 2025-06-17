<template>
  <div>
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <p class="text-sm text-gray-600">{{ brand }}</p>
    <p v-if="impactScore" class="mt-2 text-sm">Impact: {{ impactScore }}/20</p>
  </div>
</template>

<script setup lang="ts">
const _props = defineProps<{
  title: string
  brand: string
  impactScore?: number
}>()
</script>
