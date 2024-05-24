import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
