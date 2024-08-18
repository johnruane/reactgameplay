module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['react', 'react-hooks', 'prettier', 'jsx-a11y', 'import'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  'jsx-runtime': {
    plugins: ['react'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      jsxPragma: null,
    },
    rules: {
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
    },
  },
};
