import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    // '../../../packages/ui/src/components/**!(node_modules)/*.stories.@(js|jsx|ts|tsx)',
    // '../../admin/src/components/**/*.stories.@(js|jsx|ts|tsx)',
    // '../../client/src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/ui/src/components/WriterAndDate/index.stories.tsx',
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
  babel: async (options) => {
    options.presets?.push([
      'next/babel',
      {
        'preset-react': {
          development: true,
          runtime: 'automatic',
        },
      },
    ]);
    return options;
  },
  // webpack: async (config) => {
  //   config?.module?.rules?.push({
  //     test: /\.(ts|tsx|js|jsx)$/,
  //     loader: require.resolve('babel-loader'),
  //     options: {
  //       presets: [
  //         // [
  //         //   '@babel/preset-react',
  //         //   {
  //         //     development: true,
  //         //     runtime: 'automatic',
  //         //   },
  //         // ],
  //         [
  //           'next/babel',
  //           {
  //             '@bable/preset-react': {
  //               devleopment: true,
  //               runtime: 'automatic',
  //             },
  //             'transform-runtime': {
  //               useESModules: false,
  //             },
  //             fdaklsfjladskja: {
  //               adksljflaksdfj: true,
  //             },
  //           },
  //         ],
  //         // [
  //         //   '@babel/preset-react',
  //         //   {
  //         //     runtime: 'automatic',
  //         //     importSource: '@emotion/react',
  //         //   },
  //         // ],
  //         // [
  //         //   '@babel/preset-typescript',
  //         //   {
  //         //     runtime: 'automatic',
  //         //   },
  //         // ],
  //       ],
  //       // importSource cannot be set when runtime is classic. preset-react's
  //       plugins: ['@emotion/babel-plugin'],
  //     },
  //   });

  //   return config;
  // },
};

export default config;
