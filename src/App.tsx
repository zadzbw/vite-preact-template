import React from 'react'
import preactLogo from '@/assets/preact.svg'
import viteLogo from '@/assets/vite.svg'
import { Counter } from '@/components/Counter'

export default function App() {
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
        <div>
          <Counter />
          <p className="my-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-500">Click on the Vite and Preact logos to learn more</p>
      </div>
    </div>
  )
}
