import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { name } from './package.json'

export default defineConfig({
  base: `/${name}/`,
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
