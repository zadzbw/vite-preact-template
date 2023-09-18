// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { useToggle, useToggleWithSignal } from '@/hooks'
import { act, renderHook } from '@/test/test-utils'

describe('`useToggle` hooks test', () => {
  it('should get correct value and toggle it', () => {
    const { result } = renderHook(() => useToggle(true))
    const { toggleValue } = result.current

    expect(result.current.value).toBe(true)
    act(() => {
      toggleValue()
    })
    expect(result.current.value).toBe(false)
    act(() => {
      toggleValue()
    })
    expect(result.current.value).toBe(true)
  })
})

describe('`useToggleWithSignal` hooks test', () => {
  it('should get correct value and toggle it', () => {
    const { result } = renderHook(() => useToggleWithSignal(true))
    const { toggleValue, value } = result.current

    expect(value.value).toBe(true)
    act(() => {
      toggleValue()
    })
    expect(value.value).toBe(false)
    act(() => {
      toggleValue()
    })
    expect(value.value).toBe(true)
  })
})
