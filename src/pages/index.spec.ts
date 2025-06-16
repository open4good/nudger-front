import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IndexPage from './index.vue'

describe('Index page', () => {
  it('renders welcome text', () => {
    const wrapper = mount(IndexPage, {
      global: { stubs: { LazyHydrate: { template: '<div><slot /></div>' } } }
    })
    expect(wrapper.text()).toContain('Welcome to Nudger Next gen !')
  })
})
