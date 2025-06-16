import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ListBox from './ListBox.vue'
import { defineComponent, nextTick } from 'vue'

// Minimal LazyHydrate implementation for tests that immediately renders content
const LazyHydrate = defineComponent({
  setup(_, { slots }) {
    return () => slots.default?.({ hydrated: true })
  }
})

describe('ListBox', () => {
  it('emits selected item on click', async () => {
    const items = [
      { icon: 'a.png', name: 'A', description: 'desc A' },
      { icon: 'b.png', name: 'B', description: 'desc B' }
    ]
  const wrapper = mount(ListBox, {
    props: { items },
    global: { components: { LazyHydrate } }
  })
    await nextTick()
    await wrapper.findAll('li')[1].trigger('click')
    expect(wrapper.emitted('select')?.[0]).toEqual([items[1]])
  })
})
