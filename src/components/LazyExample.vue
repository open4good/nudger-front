<template>
  <div v-lazy-hydrate>
    <button class="px-2 py-1 bg-gray-200 rounded" @click="count++">
      Clicked {{ count }} times
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
