import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
  resolve: {
    alias: {
      '@icons': '/src/components/Icons',
      '@sections': '/src/components/sections',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@layouts': '/src/components/Layouts',
      '@pages': '/src/pages',
      '@templates': '/src/templates',
      '@data': '/src/data',
    },
  },
});
