import autoprefixer from 'autoprefixer';
import postcssColorMod from 'postcss-color-mod-function';
import postcssMixins from 'postcss-mixins';
import postcssCustomMedia from 'postcss-custom-media';
import postcssStackOverrides from './postcss-stack-overrides.js';

export default {
  plugins: [
    autoprefixer,
    postcssColorMod({
      importFrom: ['src/styles/variables.css'],
    }),
    postcssMixins,
    postcssCustomMedia,
    postcssStackOverrides,
  ],
};
