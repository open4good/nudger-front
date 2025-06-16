<template>
  <LazyHydrate when-idle>
    <ul class="space-y-2">
      <li
        v-for="item in items"
        :key="item.name"
        class="p-2 border rounded flex gap-2 cursor-pointer"
        :class="selected === item ? 'bg-blue-100' : ''"
        @click="select(item)"
      >
<img :src="item.icon" alt="" class="w-6 h-6">
        <div>
          <p class="font-semibold">{{ item.name }}</p>
          <p class="text-sm text-gray-600">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </LazyHydrate>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'

export interface AssociationItem {
  icon: string
  name: string
  description: string
}

const props = defineProps<{ items: AssociationItem[] }>()
const { items } = toRefs(props)
const emit = defineEmits<{
  (e: 'select', item: AssociationItem): void
}>()

const selected = ref<AssociationItem | null>(null)

function select(item: AssociationItem) {
  selected.value = item
  emit('select', item)
}
</script>
