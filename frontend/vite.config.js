import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/choreo-apis/choose-your-own-adventure/backend/v1/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/choreo-apis\/choose-your-own-adventure\/backend\/v1\/api/, '/api')
      }
    }
  }
})
