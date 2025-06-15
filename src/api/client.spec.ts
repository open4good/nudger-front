import { describe, it, expectTypeOf } from 'vitest'
import type { paths, operations } from './client'

describe('API client types', () => {
  it('exposes prompt text endpoint', () => {
    expectTypeOf<paths>().toHaveProperty('/prompt/text')
  })

  it('maps get operation to prompt', () => {
    expectTypeOf<paths['/prompt/text']['get']>().toEqualTypeOf<operations['prompt']>()
  })
})
