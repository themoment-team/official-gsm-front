import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from 'common';
import React from 'react';
import Providers from './providers';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#050505',
        },
      ],
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Providers>
          <ReactQueryDevtools />
          <GlobalStyle />
          <Story />
        </Providers>
      </ThemeProvider>
    ),
  ],
};

export default preview;
