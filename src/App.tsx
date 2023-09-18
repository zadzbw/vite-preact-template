import { useSignal, useComputed } from '@preact/signals'
import preactLogo from '@/assets/preact.svg'
import viteLogo from '@/assets/vite.svg'
import { Button } from '@/components/Button'
import { Counter } from '@/components/Counter'

export default function App() {
  const count = useSignal(0)
  const double = useComputed(() => count.value * 2)

  console.log('app render')

  return (
    <div className="flex-center min-h-screen min-w-[320px]">
      <div className="space-y-12 text-center">
        <div className="flex justify-center">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://preactjs.com" target="_blank" rel="noreferrer">
            <img src={preactLogo} className="logo preact" alt="Preact logo" />
          </a>
        </div>
        <h1 className="text-5xl font-bold">Vite + Preact</h1>
        <div className="flex items-center justify-center gap-x-2">
          <Button onClick={() => (count.value += 1)}>
            {count} x 2 = {double}
          </Button>
          <Counter />
        </div>
        <p className="my-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="text-gray-500">Click on the Vite and Preact logos to learn more</p>
      </div>
    </div>
  )
}
