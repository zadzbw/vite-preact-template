import * as path from 'node:path'
import preact from '@preact/preset-vite'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [preact(), splitVendorChunkPlugin()],
  define: {
    __DEV__: isDev,
  },
})
