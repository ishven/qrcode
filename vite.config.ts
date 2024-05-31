import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs' // 设置输出目录为docs，GitHub部署的目录是docs
  },
  plugins: [vue()],
  base: 'qrcode',
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  }
})