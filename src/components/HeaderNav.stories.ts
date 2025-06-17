import HeaderNav from './HeaderNav.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof HeaderNav> = {
  title: 'Components/HeaderNav',
  component: HeaderNav
}
export default meta

export const Default: StoryObj<typeof HeaderNav> = {
  render: () => ({
    components: { HeaderNav },
    template: '<HeaderNav :links="[{ text: \'Home\', href: \'/#\' }]" />'
  })
}
