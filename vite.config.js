import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' faz o build funcionar em qualquer subpasta (ex.: GitHub Pages /Portfolio/)
export default defineConfig({
  base: './',
  plugins: [react()],
})
