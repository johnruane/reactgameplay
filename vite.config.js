import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import './src/styles/breakpoints';
          @import './src/styles/variables';
          @import './src/styles/mixins';
        `,
      },
    },
  },
  test: {
    include: ['**/*.test.js'],
    globals: true,
  },
});
