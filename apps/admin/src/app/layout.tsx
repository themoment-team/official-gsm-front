'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalStyle } from 'common';

import { queryClient } from 'api/common';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head>
        <title>Admin</title>
        <meta name='description' content='admin' />
        <link
          rel='stylesheet'
          as='style'
          crossOrigin=''
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <GlobalStyle />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
