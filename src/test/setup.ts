import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/preact'
import { afterEach } from 'vitest'
import '@/style/index.scss'

afterEach(() => {
  cleanup()
})
