import React from 'react';

import Script from 'next/script';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import * as gtag from 'client/lib/gtag';

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
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
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
