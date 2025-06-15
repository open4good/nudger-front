import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Slider from './Slider.client.vue'

describe('Slider', () => {
  it('cycles slides', async () => {
    const wrapper = mount(Slider, { props: { slides: ['A', 'B'] } })
    expect(wrapper.text()).toContain('A')
    await wrapper.find('button.next').trigger('click')
    expect(wrapper.text()).toContain('B')
    await wrapper.find('button.prev').trigger('click')
    expect(wrapper.text()).toContain('A')
  })
})
