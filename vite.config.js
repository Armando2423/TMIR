import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
    host: true,
    allowedHosts: ['https://my-profile-wk2a.onrender.com'], // 👈 aquí tu dominio de Render
  },
});