import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
// @ts-expect-error
import vsharp from 'vite-plugin-vsharp'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), vsharp()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      contents: fileURLToPath(new URL('./contents', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, './node_modules/bootstrap')
    }
  }
})
