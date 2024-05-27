import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const baseDir = process.env.BASE_PATH || __dirname;

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
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
      '@icons': resolve(baseDir, 'src/components/Icons'),
      '@sections': resolve(baseDir, 'src/components/sections'),
      '@assets': resolve(baseDir, 'src/assets'),
      '@components': resolve(baseDir, 'src/components'),
      '@layouts': resolve(baseDir, 'src/components/Layouts'),
      '@pages': resolve(baseDir, 'src/pages'),
      '@templates': resolve(baseDir, 'src/templates'),
      '@data': resolve(baseDir, 'src/data'),
    },
  },
});
