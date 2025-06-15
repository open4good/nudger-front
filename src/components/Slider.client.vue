<template>
  <div class="space-y-2">
    <div class="p-4 border rounded min-h-[2rem] flex items-center justify-center">
      {{ slides[current] }}
    </div>
    <div class="flex gap-2">
      <button class="px-2 py-1 border rounded prev" @click="prev">
        Prev
      </button>
      <button class="px-2 py-1 border rounded next" @click="next">
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ slides: string[] }>()

const current = ref(0)

function next() {
  current.value = (current.value + 1) % props.slides.length
}

function prev() {
  current.value = (current.value - 1 + props.slides.length) % props.slides.length
}
</script>
