// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ASHSAIL/', // 👈 THIS IS CRUCIAL
  plugins: [react()],
});
