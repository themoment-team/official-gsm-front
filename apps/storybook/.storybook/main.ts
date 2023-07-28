import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../../admin/src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../../client/src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: '../../admin/next.config.js',
    },
  },
  staticDirs: ['../../admin/public', '../../client/public'],
  docs: {
    autodocs: 'tag',
  },
  babel: async (config) => ({
    ...config,
    presets: [
      [
        'next/babel',
        {
          'preset-react': {
            runtime: 'automatic',
          },
        },
      ],
    ],
  }),
};

export default config;
