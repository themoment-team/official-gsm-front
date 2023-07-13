import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from 'common';

import Providers from './providers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '광주소프트웨어마이스터고등학교 - %s',
    default: '광주소프트웨어마이스터고등학교',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head>
        <link
          rel='stylesheet'
          as='style'
          crossOrigin=''
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
        />
      </head>
      <body>
        <Providers>
          <ReactQueryDevtools />
          <GlobalStyle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
