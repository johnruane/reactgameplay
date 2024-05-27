import react from '@vitejs/plugin-react';
import alias from '@rollup/plugin-alias';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  plugins: [
    react(),
    alias({
      entries: {
        '@icons': '/src/components/Icons',
        '@sections': '/src/components/sections',
        '@assets': '/src/assets',
        '@components': '/src/components',
        '@layouts': '/src/components/Layouts',
        '@pages': '/src/pages',
        '@templates': '/src/templates',
        '@data': '/src/data',
      },
    }),
  ],
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
});
