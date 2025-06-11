import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // process.cwd() returns the current working directory
      '@': path.resolve(process.cwd(), './src'),
    },
  },
});
