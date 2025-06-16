import type { Meta, StoryObj } from '@storybook/vue3'
import ListBox from './ListBox.vue'

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  title: 'ListBox'
}
export default meta

const sample = [
  { icon: 'a.png', name: 'Aid', description: 'Association A' },
  { icon: 'b.png', name: 'Benefit', description: 'Association B' }
]

export const Default: StoryObj<typeof ListBox> = {
  render: () => ({
    components: { ListBox },
    template: '<ListBox :items="items" />',
    data: () => ({ items: sample })
  })
}
