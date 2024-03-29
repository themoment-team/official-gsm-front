'use client';

import React from 'react';

import { ThemeProvider } from '@emotion/react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle, theme } from 'common';
import 'react-toastify/dist/ReactToastify.css';

import Providers from './providers';

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
        <ThemeProvider theme={theme}>
          <Providers>
            <ReactQueryDevtools />
            <GlobalStyle />
            <ToastContainer />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
