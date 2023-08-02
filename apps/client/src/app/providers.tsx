'use client';

import React from 'react';

import { ThemeProvider } from '@emotion/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { theme } from 'common';

export default function Providers({ children }: { children: React.ReactNode }) {
  // TODO: client api 연동 시, queryclient option 공유 가능하도록 구성 변경
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  );

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
