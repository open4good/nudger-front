import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import LazyExample from './LazyExample.vue'

describe('LazyExample', () => {
  it('increments on click', async () => {
    const wrapper = mount(LazyExample)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})
