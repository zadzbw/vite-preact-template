import { useSignal } from '@preact/signals'
import { Button } from '@/components/Button'

export const Counter = () => {
  const count = useSignal(0)

  const handleClick = () => {
    count.value += 1
  }

  console.log('counter render')

  return <Button onClick={handleClick}>count is {count}</Button>
}
