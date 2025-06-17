<template>
  <select class="border rounded-lg p-2" v-model="selected">
    <option value="" disabled>Laisser nudger choisir</option>
    <option
      v-for="charity in charities"
      :key="charity.id"
      :value="charity.id"
    >
      {{ charity.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Charity {
  id: string | number
  name: string
}

const _props = defineProps<{ charities: Charity[] }>()
const emit = defineEmits<{ selectCharity: [string | number | null] }>()

const selected = ref<string | number | null>(null)

watch(selected, (val) => emit('selectCharity', val))
</script>
