import { PrivacyPolicy, Header, Footer } from 'client/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    '광주소프트웨어마이스터고등학교 공식 홈페이지 개인정보처리방침 페이지입니다.',
  title: { absolute: '개인정보처리방침' },
  openGraph: {
    title: '개인정보처리방침',
    description:
      '광주소프트웨어마이스터고등학교 공식 홈페이지 개인정보처리방침 페이지입니다.',
    url: 'https://official.hellogsm.kr/policy/privacy',
  },
};

export default function Privacy() {
  return (
    <>
      <Header segment='about' />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
