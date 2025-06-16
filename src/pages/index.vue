<template>
  <Card>Welcome to Nudger Next gen !</Card>
  <ListBox :items="associations" />
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import ListBox from '@/components/ListBox.vue'

const associations = [
  { icon: 'a.png', name: 'Aid', description: 'Association A' },
  { icon: 'b.png', name: 'Benefit', description: 'Association B' }
]
</script>
