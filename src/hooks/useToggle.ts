import { useSignal } from '@preact/signals'
import { useCallback, useState } from 'preact/hooks'

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue)
  const toggleValue = useCallback(() => setValue((v) => !v), [])
  return { value, toggleValue }
}

export const useToggleWithSignal = (initialValue: boolean) => {
  const valueSignal = useSignal(initialValue)
  const toggleValue = () => {
    valueSignal.value = !valueSignal.value
  }

  return { value: valueSignal, toggleValue }
}
