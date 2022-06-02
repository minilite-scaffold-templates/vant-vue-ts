// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json'),
      },
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
      },
    },
    'import/core-modules': ['virtual:windi-base.css', 'virtual:windi-components.css', 'virtual:windi-utilities.css'],
  },

  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
    // Vue: Recommended rules to be closed or modify
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/max-attributes-per-line': 0,
    // Vue: Add extra rules
    'vue/custom-event-name-casing': [2, 'camelCase'],
    'vue/no-v-text': 1,
    'vue/padding-line-between-blocks': 1,
    'vue/require-direct-export': 1,
    'vue/multi-word-component-names': 0,
    // Allow @ts-ignore comment
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': 0,
    'prefer-regex-literals': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    'import/no-absolute-path': 0,
    // eslint-disable-next-line no-dupe-keys
    'vue/custom-event-name-casing': 'off',
    'no-shadow': 0,
    'class-methods-use-this': 'off',
    'no-restricted-syntax': ['error', 'WithStatement', 'BinaryExpression[operator="in"]'],
    'guard-for-in': 'error',
    'import/no-cycle': [2, { maxDepth: 1 }],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: false,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-lonely-if': 'error',
    'no-nested-ternary': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
  },
}
