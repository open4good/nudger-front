import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HydrationButton from './HydrationButton.vue'

describe('HydrationButton', () => {
  it('increments on click', async () => {
    const wrapper = mount(HydrationButton, {
      global: {
        stubs: {
          LazyHydrate: { template: '<div><slot /></div>' }
        }
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})
