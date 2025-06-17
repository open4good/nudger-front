<template>
  <LazyHydrate when-visible>
    <Card>Welcome to Nudger Next gen !</Card>
  </LazyHydrate>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Nudger Home',
  meta: [{ name: 'description', content: 'Nudger landing page' }]
})
</script>
