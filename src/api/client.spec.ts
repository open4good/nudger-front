import { describe, it, expectTypeOf } from 'vitest'
import type { paths, operations } from './client'

describe('API client types', () => {
  it('exposes version details endpoint', () => {
    expectTypeOf<paths>().toHaveProperty('/v2')
  })

  it('maps get operation to getVersionDetailsv2', () => {
    expectTypeOf<paths['/v2']['get']>().toEqualTypeOf<operations['getVersionDetailsv2']>()
  })
})
