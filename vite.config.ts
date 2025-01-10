import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';
import fs from 'fs';

const mixinsPath = path.resolve(__dirname, 'src/styles/mixins.css');
const mixins = fs.readFileSync(mixinsPath, 'utf8');

// {
//   name: 'vite-dynamic-mixins',
//   enforce: 'pre',
//   transform(code, id) {
//     if (id.endsWith('.css')) {
//       const mixinsFilePath = path.resolve(__dirname, 'src/styles/mixins.css');
//       const mixinsContent = fs.readFileSync(mixinsFilePath, 'utf8');

//       // Extract mixin definitions
//       const mixinDefinitions = {};
//       const mixinRegex = /@define-mixin\s+([\w-]+)\s*\{([\s\S]*?)\}/g;
//       let match;
//       while ((match = mixinRegex.exec(mixinsContent))) {
//         mixinDefinitions[match[1]] = match[2].trim();
//       }

//       // Find used mixins in the current CSS file
//       const usedMixins = [];
//       const mixinUsageRegex = /@mixin\s+([\w-]+)/g;
//       while ((match = mixinUsageRegex.exec(code))) {
//         const mixinName = match[1];
//         if (mixinDefinitions[mixinName]) {
//           usedMixins.push(mixinName);
//         }
//       }

//       // Build mixins to prepend
//       const requiredMixins = usedMixins
//         .map((name) => `@define-mixin ${name} {\n${mixinDefinitions[name]}\n}`)
//         .join('\n');

//       // Prepend the required mixins to the CSS code
//       return requiredMixins + '\n' + code;
//     }

//     return code;
//   },
// },

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './.vitest/setup.ts'),
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "@styles/essentials.css";`,
      },
    },
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
    ],
  },
  server: {
    host: true,
    port: 5173,
  },
});
