import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      'node-fetch': 'axios',
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@lib': path.resolve(__dirname, './src/lib/'),
      '@data': path.resolve(__dirname, './src/data/'),
      '@api': path.resolve(__dirname, './src/api/'),
    },
  },
});
