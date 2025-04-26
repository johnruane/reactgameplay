const postcss = require('postcss');

module.exports = () => {
  return {
    postcssPlugin: 'postcss-stack-overrides',
    Once(root) {
      const spaceVars = [];

      // 1. Collect all --space- variables from :root
      root.walkRules(':root', (rule) => {
        rule.walkDecls((decl) => {
          if (decl.prop.startsWith('--space-')) {
            const name = decl.prop.replace('--', '');
            spaceVars.push(name);
          }
        });
      });

      // 2. Generate new rules for each space variable
      spaceVars.forEach((name) => {
        const newRule = postcss.rule({ selector: `[data-stack='${name}'] > * + *` });
        newRule.source = root.source;

        const newDecl = postcss.decl({
          prop: '--stack-override',
          value: `var(--${name})`,
        });
        newDecl.source = root.source;

        newRule.append(newDecl);
        root.append(newRule);
      });
    },
  };
};

module.exports.postcss = true;
