<template>
  <div class="border rounded p-4 text-center">
    <p class="text-xl font-semibold">{{ score }}/{{ maxScore }}</p>
    <p class="text-gray-500 text-sm">classé {{ rank }} sur {{ categorySize }}</p>
  </div>
</template>

<script setup lang="ts">
const _props = defineProps<{
  score: number
  maxScore: number
  rank: number
  categorySize: number
}>()
</script>
