import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use './src/styles/essential' as *;
        `,
      },
    },
  },
  test: {
    include: ['**/*.test.js'],
    globals: true,
  },
  baseUrl: './',
  resolve: {
    alias: {
      '@icons': resolve(__dirname, './src/components/Icons'),
      '@sections': resolve(__dirname, './src/components/sections'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@layouts': resolve(__dirname, './src/components/Layouts'),
      '@pages': resolve(__dirname, './src/pages'),
      '@templates': resolve(__dirname, './src/templates'),
      '@data': resolve(__dirname, './src/data'),
    },
  },
});
