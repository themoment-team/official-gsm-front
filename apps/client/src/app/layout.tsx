'use client';

import React from 'react';

import { ThemeProvider } from '@emotion/react';

import { GlobalStyle } from 'common';

import { theme } from 'client/styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head>
        <title>광주소프트웨어마이스터고등학교</title>
        <meta
          name='description'
          content='광주소프트웨어마이스터고등학교 공식 홈페이지'
        />
        <link
          rel='stylesheet'
          as='style'
          crossOrigin=''
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
