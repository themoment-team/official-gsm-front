import { Footer, Header, CopyrightPolicy } from 'client/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    '광주소프트웨어마이스터고등학교 공식 홈페이지 저작권신고 및 보호규정 페이지입니다.',
  title: { absolute: '저작권신고 및 보호규정' },
  openGraph: {
    title: '저작권신고 및 보호규정',
    description:
      '광주소프트웨어마이스터고등학교 공식 홈페이지 저작권신고 및 보호규정 페이지입니다.',
    url: 'https://official.hellogsm.kr/policy/copyright',
  },
};

export default function Copyright() {
  return (
    <>
      <Header segment='about' />
      <CopyrightPolicy />
      <Footer />
    </>
  );
}
