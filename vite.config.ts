/* eslint-disable import/default */
import * as path from 'node:path'
import preact from '@preact/preset-vite'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import electron from 'vite-plugin-electron'

const isDev = process.env.NODE_ENV === 'development'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    electron({
      entry: 'electron/main.ts',
    }),
    preact(),
    splitVendorChunkPlugin(),
  ],
  define: {
    __DEV__: isDev,
  },
})
