import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/game-radar/', //
  server: {
    proxy: {
      '/api/epic': {
        target: 'https://store-site-backend-static-ipv4.ak.epicgames.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/epic/, '')
      }
    }
  }
})
