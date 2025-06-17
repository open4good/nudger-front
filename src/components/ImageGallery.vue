<template>
  <div>
    <div class="bg-gray-50 rounded-lg ring-1 ring-gray-200 overflow-hidden">
      <img :src="images[activeIndex]" class="w-full" alt="" />
    </div>
    <div class="flex space-x-2 mt-2 overflow-x-auto" v-if="images.length > 1">
      <button
        v-for="(img, idx) in images"
        :key="idx"
        class="w-16 h-16 border rounded hover:opacity-75"
        :class="{ 'ring-2 ring-blue-500': idx === activeIndex }"
        @click="activeIndex = idx"
      >
        <img :src="img" class="object-cover w-full h-full" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const _props = defineProps<{ images: string[] }>()
const activeIndex = ref(0)
</script>
