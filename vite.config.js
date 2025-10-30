import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Zacharias-portofolio/",

  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
