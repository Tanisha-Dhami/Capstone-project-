import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const apiTarget = process.env.UNILOOP_API_TARGET || 'http://localhost:8080';

// In dev, /api calls are proxied to the Spring Boot backend, so there are no CORS headaches.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: { '/api': apiTarget },
  },
});
