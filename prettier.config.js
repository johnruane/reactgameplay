export default {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: [
    '^@layouts(/.*)?$',
    '^@sections(/.*)?$',
    '^@components(?!(/.*)?/hooks)(/.*)?$',
    '^Components(/.*)?$',
    '^@pages(/.*)?$',
    '^@games(/.*)?$',
    '^@utils(/.*)?$',
    '^utils(/.*)?$',
    '^lib(/.*)?$',
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
