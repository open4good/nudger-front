import Hero from './Hero.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Hero'
}
export default meta

export const Default: StoryObj<typeof Hero> = {
  render: () => ({
    components: { Hero },
    template: '<Hero title="Bienvenue" subtitle="Découvrez Nudger" />'
  })
}
