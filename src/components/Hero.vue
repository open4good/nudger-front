<template>
  <LazyHydrate when-idle>
    <section class="py-16 text-center bg-gray-100 rounded">
      <h1 class="mb-2 text-5xl font-bold">{{ title }}</h1>
      <p v-if="subtitle" class="text-xl text-gray-600">{{ subtitle }}</p>
    </section>
  </LazyHydrate>
</template>

<script setup lang="ts">
export interface HeroProps {
  title: string
  subtitle?: string
}

defineProps<HeroProps>()
</script>
