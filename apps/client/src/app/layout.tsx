import React from 'react';
import { Suspense } from 'react';

import Script from 'next/script';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { NavigationEvents } from 'client/components';
import { GA_TRACKING_ID } from 'client/libs';

import { GlobalStyle } from 'common';

import Providers from './providers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  applicationName: 'official GSM',
  keywords: [
    '광주소프트웨어마이스터고등학교',
    '광주소프트웨어마이스터고',
    '광소마',
    '광주',
    '소프트웨어',
    '마이스터고',
    '마이스터고등학교',
    'GSM',
    'GwangjuSoftwareMeisterHighSchool',
    'SoftWare',
  ],
  creator: 'the-moment',
  publisher: 'the-moment',
  description: '광주소프트웨어마이스터고등학교 공식 홈페이지입니다.',
  title: {
    template: '광주소프트웨어마이스터고등학교 - %s',
    default: '광주소프트웨어마이스터고등학교',
  },
  openGraph: {
    title: '광주소프트웨어마이스터고등학교',
    description: '광주소프트웨어마이스터고등학교 공식 홈페이지입니다.',
    url: 'https://official.hellogsm.kr/',
    siteName: 'official GSM',
    images: [
      {
        url: '/favicon.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'ko',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
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
        <meta name='robots' content='noindex' />
        <meta name='msvalidate.01' content='14471419A8701E4145F89E3ADCCFB1D6' />
        <link
          rel='stylesheet'
          as='style'
          crossOrigin=''
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css'
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer`}
          type='text/javascript'
          strategy='beforeInteractive'
        />
      </head>

      <body>
        <Providers>
          <ReactQueryDevtools />
          <GlobalStyle />
          {children}
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
