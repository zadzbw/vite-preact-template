import { mergeConfig, UserConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineVitestConfig(() => {
  const config = mergeConfig(viteConfig, {
    test: {
      reporters: 'verbose',
      globals: true,
      setupFiles: './src/test/setup.ts',
      css: true,
    },
  })
  return config as UserConfig
})
