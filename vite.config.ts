import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
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
        replacement: path.resolve(__dirname, '/apps/games'),
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
      {
        find: '@styles',
        replacement: path.resolve(__dirname, '/src/styles'),
      },
      {
        find: '@context',
        replacement: path.resolve(__dirname, 'reactgames/utils/context'),
      },
    ],
  },
  server: {
    host: true,
    port: 5173,
  },
});
