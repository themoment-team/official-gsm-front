import { Location, Header, Footer } from 'client/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    '광주소프트웨어마이스터고등학교 공식 홈페이지 찾아오시는 길 페이지입니다.',
  title: { absolute: '찾아오시는 길' },
  openGraph: {
    title: '찾아오시는 길',
    description:
      '광주소프트웨어마이스터고등학교 공식 홈페이지 찾아오시는 길 페이지입니다.',
    url: 'https://official.hellogsm.kr/about/location',
  },
};

export default function LocationPage() {
  return (
    <>
      <Header segment='about' />
      <Location />
      <Footer />
    </>
  );
}
