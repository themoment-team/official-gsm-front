import { SearchLocation, Header, Footer } from 'client/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    '광주소프트웨어마이스터고등학교 공식 홈페이지 학교 소개 페이지입니다.',
  title: { absolute: '학교 소개' },
  openGraph: {
    title: '학교 소개',
    description:
      '광주소프트웨어마이스터고등학교 공식 홈페이지 학교 소개 페이지입니다.',
    url: 'https://official.hellogsm.kr/about',
  },
};

export default function SearchLocationPage() {
  return (
    <>
      <Header segment='about' />
      <SearchLocation />
      <Footer />
    </>
  );
}
