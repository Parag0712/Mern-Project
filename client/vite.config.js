import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server:{
    'proxy':{
      '/api':"http://localhost:8000",
    },
    build: {
      outDir: 'dist'
    }
  },
  plugins: [react()],
})