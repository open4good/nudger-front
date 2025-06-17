import ProductInfo from './ProductInfo.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof ProductInfo> = {
  title: 'Components/ProductInfo',
  component: ProductInfo
}
export default meta

export const Default: StoryObj<typeof ProductInfo> = {
  render: () => ({
    components: { ProductInfo },
    template: '<ProductInfo title="TV" brand="Brand" :impactScore="15" />'
  })
}
