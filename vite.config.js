import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Docker必須設定
    watch: {
      usePolling: true // ファイル監視用
    }
  }
})
