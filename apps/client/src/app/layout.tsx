import React from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { GlobalStyle } from 'common';

import Providers from './providers';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  applicationName: 'Official GSM',
  keywords: [
    '광주소프트웨어마이스터고등학교',
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
    siteName: 'Official GSM',
    images: [
      {
        url: '/images/favicon/OfficialGSM.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'ko',
    type: 'website',
  },
  icons: {
    icon: '/images/favicon/OfficialGSM.png',
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
