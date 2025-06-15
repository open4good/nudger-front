import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Hero from './Hero.vue'

describe('Hero', () => {
  it('renders title and subtitle', () => {
    const wrapper = mount(Hero, {
      props: { title: 'Hello', subtitle: 'World' },
      global: { stubs: { LazyHydrate: { template: '<div><slot /></div>' } } }
    })
    expect(wrapper.text()).toContain('Hello')
    expect(wrapper.text()).toContain('World')
  })
})
