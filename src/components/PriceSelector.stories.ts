import PriceSelector from './PriceSelector.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof PriceSelector> = {
  title: 'Components/PriceSelector',
  component: PriceSelector
}
export default meta

export const Default: StoryObj<typeof PriceSelector> = {
  render: () => ({
    components: { PriceSelector },
    template: '<PriceSelector :offers="[{ id:1, retailer: \'Shop\', price: 1999, logoUrl: \'/logo.png\' }]" />'
  })
}
