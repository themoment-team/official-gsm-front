module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'unused-imports', 'sort-exports'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react-hooks/exhaustive-deps': 'error',
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
            pattern: 'react',
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
            position: 'before',
          },
          {
            pattern: 'react-hook-form',
            group: 'external',
          },
          {
            pattern: 'client/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'admin/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'api/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'common/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'ui',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'types',
            group: 'internal',
            position: 'before',
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
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'sort-exports/sort-exports': ['error'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/style.ts', '**/*.stories.tsx', '**/styles/page/*.ts'],
      rules: {
        'sort-exports/sort-exports': ['off'],
      },
    },
  ],
};
