import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/meta-pm/",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: "build",           // 👈 override default "dist" to "build"
  },
})
