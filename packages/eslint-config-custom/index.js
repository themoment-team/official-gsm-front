module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'autofix', 'unused-imports'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react-hooks/exhaustive-deps': 'error',
    'autofix/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@emotion/**',
            group: 'external',
          },
          {
            pattern: 'admin/**',
            group: 'internal',
          },
          {
            pattern: 'api/**',
            group: 'internal',
          },
          {
            pattern: 'common/**',
            group: 'internal',
          },
          {
            pattern: 'ui',
            group: 'internal',
          },
          {
            pattern: './**',
            group: 'sibling',
            position: 'after',
          },
        ],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['extanal', 'admin'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
    'no-console': 'error',
    'unused-imports/no-unused-imports-ts': ['error'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
};
