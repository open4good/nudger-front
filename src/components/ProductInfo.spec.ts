import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProductInfo from './ProductInfo.vue'

describe('ProductInfo', () => {
  it('renders title and brand', () => {
    const wrapper = mount(ProductInfo, {
      props: { title: 'TV', brand: 'Brand' }
    })
    expect(wrapper.text()).toContain('TV')
    expect(wrapper.text()).toContain('Brand')
  })
})
