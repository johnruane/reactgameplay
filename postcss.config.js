module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-color-mod-function')({
      importFrom: ['src/styles/variables.css'],
    }),
    require('postcss-mixins'),
    require('postcss-custom-media'),
    require('./postcss-stack-overrides'),
  ],
};
