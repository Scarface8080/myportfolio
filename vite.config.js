import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://Scarface8080.github.io/3d_portfolio/",
  build: { chunkSizeWarningLimit: 1600, },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
