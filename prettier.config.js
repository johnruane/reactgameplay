export default {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: [
    '^(?!@svg).*\\?react$',
    '<THIRD_PARTY_MODULES>',
    '^@layouts(/.*)?$',
    '^@sections(/.*)?$',
    '^@components(?!(/.*)?/hooks)(/.*)?$',
    '/Components(/.*)?$',
    '/components(/.*)?$',
    '^@pages(/.*)?$',
    '^@games(/.*)?$',
    '^@utils(/.*)?$',
    '/utils(/.*)?$',
    '/lib(/.*)?$',
    '^(?:@hooks|@components(/.*)?/hooks)(/.*)?$',
    '^@data(/.*)?$',
    '^@assets(/.*)?$',
    '^@svg(/.*)?$',
    '\\.(css|scss)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
