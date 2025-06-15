<template>
  <div class="space-y-4">
    <Card>Welcome to Nudger !</Card>
    <Hero title="Nudger" subtitle="Prenez le contrôle de vos finances" />
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import { defineAsyncComponent } from 'vue'

const Hero = defineAsyncComponent(() => import('@/components/Hero.vue'))
</script>
