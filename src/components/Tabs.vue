<template>
  <div>
    <div class="flex border-b mb-4">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="active = tab.id"
        class="py-2 px-4 -mb-px cursor-pointer"
        :class="active === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'"
      >
        {{ tab.name }}
      </button>
    </div>
    <div>
      <slot :active="active" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Tab {
  id: string
  name: string
}

const _props = defineProps<{ tabs: Tab[]; modelValue?: string }>()
const emit = defineEmits<{ 'update:modelValue': [string] }>()
const active = ref(props.modelValue || props.tabs[0]?.id)

watch(active, (val) => emit('update:modelValue', val))
</script>
