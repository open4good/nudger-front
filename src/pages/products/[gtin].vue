<template>
  <HeaderNav :links="navLinks" />
  <main class="container mx-auto p-4 space-y-4">
    <Breadcrumbs :items="breadcrumbs" />
    <div class="md:grid md:grid-cols-2 md:gap-8">
      <ImageGallery :images="product.images" />
      <div class="space-y-4">
        <ProductInfo
          :title="product.title"
          :brand="product.brand"
          :impactScore="product.impactScore"
        />
        <PriceSelector :offers="product.offers" @selectOffer="onSelectOffer" />
        <DonationSelector :charities="product.charities" />
      </div>
    </div>
    <Tabs :tabs="tabs" v-model="activeTab">
      <template #default="{ active }">
        <div v-if="active === 'impact'">
          <ImpactScoreCard
            :score="product.impactScore"
            :max-score="20"
            :rank="product.rank"
            :category-size="product.categorySize"
          />
        </div>
        <div v-else-if="active === 'price'">
          <p>Historical price coming soon...</p>
        </div>
        <div v-else-if="active === 'specs'">
          <pre>{{ product.specs }}</pre>
        </div>
      </template>
    </Tabs>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const route = useRoute()
const gtin = route.params.gtin as string

const { data } = await useFetch(`/api/products/${gtin}`, {
  default: () => ({
    title: 'Demo TV',
    brand: 'Brand',
    images: ['/placeholder.png'],
    impactScore: 15,
    rank: 1,
    categorySize: 10,
    offers: [
      { id: 1, retailer: 'Shop A', price: 1999, logoUrl: '/logo.png' }
    ],
    charities: [
      { id: 1, name: 'Good Planet' }
    ],
    specs: { resolution: '4K' }
  })
})

const product = data.value!
const navLinks = [
  { text: 'Home', href: '/' }
]
const breadcrumbs = [
  { text: 'Televisions', href: '/televisions' },
  { text: product.title, href: '#' }
]
const tabs = [
  { id: 'impact', name: 'Impact' },
  { id: 'price', name: 'Prix' },
  { id: 'specs', name: 'Caractéristiques' }
]
const activeTab = ref(tabs[0].id)

function onSelectOffer(id: string | number) {
  console.log('selected', id)
}
</script>
