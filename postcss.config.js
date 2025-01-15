module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-color-mod-function': {
      importFrom: ['src/styles/variables.css']
    },
    'postcss-mixins': {},
    'postcss-custom-media': {},
  },
};
