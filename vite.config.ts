import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
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
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './.vitest/setup.ts'),
  },
  resolve: {
    alias: [
      {
        find: '@sections',
        replacement: path.resolve(__dirname, '/src/components/sections'),
      },
      { find: '@assets', replacement: path.resolve(__dirname, '/src/assets') },
      { find: '@svg', replacement: path.resolve(__dirname, '/src/assets/svg') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, '/src/components'),
      },
      {
        find: '@games',
        replacement: path.resolve(__dirname, '/src/components/games'),
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, '/src/components/Layouts'),
      },
      { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
      { find: '@data', replacement: path.resolve(__dirname, '/src/data') },
      { find: '@utils', replacement: path.resolve(__dirname, '/src/utils') },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, '/src/components/hooks'),
      },
    ],
  },
  server: {
    host: true,
    port: 5173,
  },
});
