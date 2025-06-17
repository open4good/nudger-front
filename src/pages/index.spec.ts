import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
vi.mock('@unhead/vue', () => ({
  useHead: () => {}
}))
describe('Index page', () => {
  it('renders welcome text', async () => {
    const IndexPage = (await import('./index.vue')).default
    const wrapper = mount(IndexPage)
    expect(wrapper.text()).toContain('Nudger')
  })
})
