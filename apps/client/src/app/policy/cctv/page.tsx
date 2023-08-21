import { Footer, Header, MediaPolicy } from 'client/components';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    '광주소프트웨어마이스터고등학교 공식 홈페이지 영상정보처리기기 운영ㆍ관리 방침 페이지입니다.',
  title: { absolute: '영상정보처리기기 운영ㆍ관리 방침' },
  openGraph: {
    title: '영상정보처리기기 운영ㆍ관리 방침',
    description:
      '광주소프트웨어마이스터고등학교 공식 홈페이지 영상정보처리기기 운영ㆍ관리 방침 페이지입니다.',
    url: 'https://official.hellogsm.kr/policy/copyright',
  },
};

export default function cctvPage() {
  return (
    <>
      <Header segment='about' />
      <MediaPolicy />
      <Footer />
    </>
  );
}
