module.exports = {
  root: true,
  extends: [
    'sobird/typescript-react.cjs',
    'sobird/typescript.cjs',
    'plugin:@next/next/recommended',
    'plugin:@next/next/core-web-vitals',
    // 'plugin:@next/next/typescript',
  ],
  plugins: [
    '@next/next',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  },
};
