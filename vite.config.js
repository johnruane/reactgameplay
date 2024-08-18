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
    alias: [
      { find: '@icons', replacement: '/src/components/icons' },
      { find: '@sections', replacement: '/src/components/sections' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@games', replacement: '/src/components/games' },
      { find: '@layouts', replacement: '/src/components/Layouts' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@templates', replacement: '/src/templates' },
      { find: '@data', replacement: '/src/data' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@hooks', replacement: '/src/components/hooks' },
    ],
  },
  server: {
    host: true,
    port: 5173,
  },
});
