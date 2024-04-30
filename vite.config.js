import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/styles/breakpoints';
          @import './src/styles/variables';
          @import './src/styles/spacing';
          @import './src/styles/mixins';
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
      '@icons': path.resolve(__dirname, './src/components/Icons'),
      '@sections': path.resolve(__dirname, './src/components/sections'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/components/Layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@templates': path.resolve(__dirname, './src/templates'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
});
