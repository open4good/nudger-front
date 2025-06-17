import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HeaderNav from './HeaderNav.vue'

describe('HeaderNav', () => {
  it('renders links', () => {
    const wrapper = mount(HeaderNav, {
      props: { links: [{ text: 'Home', href: '/' }] }
    })
    expect(wrapper.text()).toContain('Home')
  })
})
