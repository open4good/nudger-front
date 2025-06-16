import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IndexPage from './index.vue'
import { defineComponent, nextTick } from 'vue'

const LazyHydrate = defineComponent({
  setup(_, { slots }) {
    return () => slots.default?.({ hydrated: true })
  }
})

describe('Index page', () => {
  it('renders welcome text and listbox', async () => {
    const wrapper = mount(IndexPage, {
      global: { components: { LazyHydrate } }
    })
    await nextTick()
    expect(wrapper.text()).toContain('Nudger')
    expect(wrapper.text()).toContain('Association A')
  })
})
