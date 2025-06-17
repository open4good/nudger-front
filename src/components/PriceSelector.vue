<template>
  <div class="space-y-2">
    <div
      v-for="offer in offers"
      :key="offer.id"
      class="border rounded p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
      :class="{ 'border-blue-500 bg-blue-50': offer.id === selectedOfferId }"
      @click="select(offer.id)"
    >
      <div>
        <p class="font-medium">{{ offer.retailer }}</p>
        <p class="text-sm text-gray-500">{{ offer.price.toFixed(2) }} €</p>
      </div>
      <img :src="offer.logoUrl" alt="" class="h-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface Offer {
  id: string | number
  retailer: string
  price: number
  logoUrl: string
}

const _props = defineProps<{ offers: Offer[] }>()
const emit = defineEmits<{ selectOffer: [string | number] }>()
const selectedOfferId = ref<string | number | null>(null)

function select(id: string | number) {
  selectedOfferId.value = id
  emit('selectOffer', id)
}
</script>
