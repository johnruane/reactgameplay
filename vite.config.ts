import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

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
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './.vitest/setup.ts'),
  },
  resolve: {
    alias: [
      { find: '@icons', replacement: path.resolve(__dirname, '/src/components/icons') },
      {
        find: '@sections',
        replacement: path.resolve(__dirname, '/src/components/sections'),
      },
      { find: '@assets', replacement: path.resolve(__dirname, '/src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, '/src/components') },
      { find: '@games', replacement: path.resolve(__dirname, '/src/components/games') },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, '/src/components/Layouts'),
      },
      { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
      { find: '@templates', replacement: path.resolve(__dirname, '/src/templates') },
      { find: '@data', replacement: path.resolve(__dirname, '/src/data') },
      { find: '@utils', replacement: path.resolve(__dirname, '/src/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, '/src/components/hooks') },
    ],
  },
  server: {
    host: true,
    port: 5173,
  },
});
